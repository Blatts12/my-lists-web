import create from "zustand";
import LoginDto from "../models/auth/LoginDto";
import RegisterDto from "../models/auth/RegisterDto";
import { User } from "../models/user/User";
import getContentTypeHeaderJson from "../utils/ContentTypeJson";

const authApiLink = "http://localhost:3000/auth";

interface AuthResponse {
  user?: User;
  message?: string | string[];
  statusCode?: number;
  error?: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (loginDto: LoginDto) => Promise<AuthResponse>;
  logout: () => Promise<number>;
  register: (registerDto: RegisterDto) => Promise<AuthResponse>;
}

const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isAuthenticated: false,

  login: async (loginDto) => {
    const data = await fetch(`${authApiLink}/login`, {
      method: "POST",
      headers: getContentTypeHeaderJson(),
      credentials: "include",
      body: JSON.stringify(loginDto),
    })
      .then((response) => response.json())
      .catch((err) => {
        console.error(err);
        return {
          message: "Something went wrong",
        };
      });

    if (data.user) {
      set({
        user: data.user,
        isAuthenticated: true,
      });
    }

    return data;
  },
  logout: async () => {
    const status = await fetch(`${authApiLink}/logout`, {
      method: "POST",
      credentials: "include",
    }).then((response) => response.status);

    if (status === 200)
      set({
        user: null,
        isAuthenticated: false,
      });

    return status;
  },
  register: async (registerDto) => {
    const { password2, ...regData } = registerDto;
    const data = await fetch(`${authApiLink}/register`, {
      method: "POST",
      headers: getContentTypeHeaderJson(),
      body: JSON.stringify(regData),
    })
      .then((response) => response.json())
      .catch((err) => {
        console.error(err);
        return {
          message: "Something went wrong.",
        };
      });

    return data;
  },
}));

export default useAuthStore;
