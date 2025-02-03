import BookModel from "~/server/models/Book.model";
import { BookSchema } from "~/server/validation";

export default defineEventHandler(async (event) => {
  // Get data form body
  const body = await readBody(event);
  // get id from parameter
  const id = event.context.params?.id;
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Book ID is required",
    });
  }
  // validate
  let { error } = BookSchema.validate(body, {
    abortEarly: false, // ตรวจสอบ error ทั้งหมด ไม่หยุดที่ error แรก
    allowUnknown: true, // อนุญาตให้มี field ที่ไม่ได้อยู่ใน schema
  });

  if (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation Error",
      message: error.message.replace(/"/g, ""),
      fatal: false,
    });
  }

  // อัปเดตข้อมูลใน MongoDB
  try{
    await BookModel.findByIdAndUpdate(id, body);
    return { message: "Author Updated"};
  }
    catch (e) {
    const error = e as Error;
    throw createError({
      statusCode: 500,
      statusMessage: "Database Error",
      message: error.message || "Something went wrong",
    });
  }
});
