import { z } from "zod";

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: "Email phải là một địa chỉ email hợp lệ.",
    }),
    password: z
      .string()
      .min(6, {
        message: "Password phải có ít nhất 6 ký tự.",
      })
      .max(100, {
        message: "Password không được vượt quá 100 ký tự.",
      })
      .regex(/[A-Z]/, {
        message: "Password phải chứa ít nhất một chữ cái viết hoa.",
      })
      .regex(/[a-z]/, {
        message: "Password phải chứa ít nhất một chữ cái viết thường.",
      })
      .regex(/[0-9]/, {
        message: "Password phải chứa ít nhất một chữ số.",
      })
      .regex(/[@$!%*?&#]/, {
        message: "Password phải chứa ít nhất một ký tự đặc biệt.",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm password phải khớp với password.",
    path: ["confirmPassword"], // Gán lỗi vào trường confirmPassword
  });
