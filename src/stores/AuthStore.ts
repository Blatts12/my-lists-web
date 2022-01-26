import create from "zustand";
import {
  LoginErrors,
  RegisterErrors,
  UserResponse,
} from "../models/auth/AuthResponse";
import LoginDto from "../models/auth/LoginDto";
import RegisterDto from "../models/auth/RegisterDto";
import { User } from "../models/user/User";
import getContentTypeHeaderJson from "../utils/ContentTypeJson";
import {
  processLoginErrors,
  processRegisterErrors,
} from "../utils/ProcessAuthResponseErrors";

const authApiLink = "http://localhost:3000/auth";

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (loginDto: LoginDto) => Promise<UserResponse | LoginErrors>;
  logout: () => Promise<number>;
  register: (
    registerDto: RegisterDto
  ) => Promise<UserResponse | RegisterErrors>;
  load: () => void;
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
          non_field: "Something went wrong",
          username: "",
          password: "",
        };
      });

    if (data.user) {
      set({
        user: data.user,
        isAuthenticated: true,
      });
      return data;
    }
    return processLoginErrors(data);
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
          non_field: "Something went wrong.",
          username: "",
          password: "",
          email: "",
        };
      });

    if (data.user) {
      return data;
    }
    return processRegisterErrors(data);
  },
  load: async () => {
    const data = await fetch(`${authApiLink}/load`, {
      method: "GET",
      headers: getContentTypeHeaderJson(),
      credentials: "include",
    }).then((res) => res.json());

    if (data.id) {
      set({ isAuthenticated: true, user: data });
    } else {
      set({ isAuthenticated: false, user: null });
    }
  },
}));

export default useAuthStore;
