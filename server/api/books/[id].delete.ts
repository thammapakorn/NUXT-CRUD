import BookModel from "~/server/models/Book.model";

export default defineEventHandler(async (event)=>{
    // get id from params
    const id = event.context.params?.id;
    // validate id
    if (!id) {
        throw createError({
          statusCode: 400,
          statusMessage: "Bad Request",
          message: "Book ID is required",
        });
      }
    // Remove Book from MongoDB
    try{
        await BookModel.findByIdAndDelete(id);
        return { message: "Book removed"};
    }
    catch (e) {
        const error = e as Error;
        throw createError({
          statusCode: 500,
          statusMessage: "Database Error",
          message: error.message || "Something went wrong",
        });
    }
})