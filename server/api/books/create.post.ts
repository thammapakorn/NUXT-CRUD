import BookModel from "~/server/models/Book.model";
import { BookSchema } from "~/server/validation";

export default defineEventHandler(async (event) => {
  // Get data form body
  const body = await readBody(event);

  // validate
  let { error } = BookSchema.validate(body);
  if (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation Error",
      message: error?.message?.replace(/"/g, "") || "invalid data",
      fatal: false,
    });
  }

  // สร้างข้อมูลหนังสือ ใน MongoDB
  try{
    await BookModel.create(body);
    return { message: "Book created"};
  } catch (e) {
    const error = e as Error;
    throw createError({
      statusCode: 500,
      statusMessage: "Database Error",
      message: error.message || "Something went wrong",
    });
  }
});
