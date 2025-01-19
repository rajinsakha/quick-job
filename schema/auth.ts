import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().default(false).optional(),
});

export const signUpFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
 confirm_password:    z.string({ required_error: "Password is required" })
 .min(6, { message: "Password must be at least 6 characters" }),
}) .refine((data) => data.password === data.confirm_password, {
  message: "New Password and Confirm Password must be same",
  path: ["confirm_password"],
});




export const resetPasswordFormSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
});

const passwordTypeSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message:
      "Password must contain at least 1 special character, 1 capital letter, and 1 number",
  });

export const changePasswordSchema = z
  .object({
    old_password: z.string({
      required_error: "Old Password is Required.",
    }),
    new_password: passwordTypeSchema,
    confirm_password: passwordTypeSchema,
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "New Password and Confirm Password must be same",
    path: ["confirm_password"],
  });
