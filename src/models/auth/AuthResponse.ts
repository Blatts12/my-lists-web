import { User } from "../user/User";

export interface UserResponse {
  user: User;
}

export interface ErrorResponse {
  message: string | string[];
  statusCode: number;
  error?: string;
}

export interface LoginErrors {
  non_field: string;
  username: string;
  password: string;
}

export interface RegisterErrors {
  non_field: string;
  username: string;
  email: string;
  password: string;
}

export type AuthResponse = UserResponse | ErrorResponse;
