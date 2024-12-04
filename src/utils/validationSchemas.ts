import { z } from "zod";

// create article schema
export const createArticleSchema = z.object({
  title: z
    .string({
      required_error: "title is required",
      invalid_type_error: "title should be of type string ",
    })
    .min(2, { message: "title should be at least 2 characters long" })
    .max(200, { message: "title should be less than 200 characters" }),
  description: z
    .string({
      required_error: "description is required",
    })
    .min(10, { message: "title should be at least 10 characters long" }),
});

// register schema
export const registerSchema = z.object({
  username: z.string().min(2).max(100),
  email: z.string().min(3).max(200).email(),
  password: z.string().min(6),
});

// login schema
export const loginSchema = z.object({
  email: z.string().min(3).max(200).email(),
  password: z.string().min(6),
});