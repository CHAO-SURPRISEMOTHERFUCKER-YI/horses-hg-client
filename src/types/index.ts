import { z } from "zod";

// AUTH
const authSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  password_confirmation: z.string(),
  token: z.string(),
  role: z.string(),
});
type Auth = z.infer<typeof authSchema>;
export type UserLoginForm = Pick<Auth, "email" | "password">;
export type UserRegistrationForm = Pick<
  Auth,
  "name" | "email" | "password" | "password_confirmation"
>;
export type RequestCodeForm = Pick<Auth, "email">;
export type ForgotPasswordForm = Pick<Auth, "email">;
export type NewPasswordForm = Pick<Auth, "password" | "password_confirmation">;

export type ConfirmToken = Pick<Auth, "token">;

// USERS
export const userSchema = authSchema
  .pick({
    name: true,
    email: true,
    role: true,
  })
  .extend({
    _id: z.string(),
  });

export type User = z.infer<typeof userSchema>;

// HORSES
export const HorseSchema = z.object({
  _id: z.string(),
  horseName: z.string(),
  available: z.string(),
  description: z.string(),
  image: z.string(),
});
export const dashboardHorseSchema = z.array(
  HorseSchema.pick({
    _id: true,
    horseName: true,
    available: true,
    description: true,
    image: true,
  })
);
export type Horse = z.infer<typeof HorseSchema>;
export type HorseFormData = Pick<
  Horse,
  "horseName" | "available" | "description" | "image"
>;
