import Joi from "joi";

// author validation
export const AuthorSchema = Joi.object({
  name: Joi.string().min(3).required(),
  // name ต้องเป็น string และต้องใส่ค่า มากกว่า 3 ตัวอักษร
});

// book validation
export const BookSchema = Joi.object({
  title: Joi.string().min(3).required(),
  isbn: Joi.string().min(3).required(),
  authors: Joi.array(),
  published: Joi.date().required(),
  pageCount: Joi.number(),
});
