import { z } from 'zod';
import { IdSchema, TimestampSchema } from './common.js';

// User schemas based on the database schema
export const UserSchema = z.object({
  id: IdSchema,
  name: z.string().min(1).max(255),
  email: z.string().email(),
  emailVerified: z.boolean().default(false),
  image: z.string().url().optional(),
  createdAt: TimestampSchema,
  updatedAt: TimestampSchema
});

export const SessionSchema = z.object({
  id: IdSchema,
  expiresAt: TimestampSchema,
  token: z.string(),
  createdAt: TimestampSchema,
  updatedAt: TimestampSchema,
  ipAddress: z.string().optional(),
  userAgent: z.string().optional(),
  userId: IdSchema
});

// Auth request schemas
export const SignUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(1, 'Name is required').max(255, 'Name too long')
});

export const SignInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional().default(false)
});

export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(8, 'New password must be at least 8 characters')
});

export const UpdateUserSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  email: z.string().email().optional(),
  image: z.string().url().optional()
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address')
});

export const ResetPasswordSchema = z.object({
  token: z.string().min(1, 'Reset token is required'),
  password: z.string().min(8, 'Password must be at least 8 characters')
});

// Response schemas
export const AuthResponseSchema = z.object({
  user: UserSchema,
  session: SessionSchema
});

export const UserProfileSchema = UserSchema.omit({ createdAt: true, updatedAt: true });

// Export inferred types
export type User = z.infer<typeof UserSchema>;
export type Session = z.infer<typeof SessionSchema>;
export type SignUp = z.infer<typeof SignUpSchema>;
export type SignIn = z.infer<typeof SignInSchema>;
export type ChangePassword = z.infer<typeof ChangePasswordSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
export type ForgotPassword = z.infer<typeof ForgotPasswordSchema>;
export type ResetPassword = z.infer<typeof ResetPasswordSchema>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;
export type UserProfile = z.infer<typeof UserProfileSchema>;
