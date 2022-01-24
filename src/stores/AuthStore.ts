import create from "zustand";
import { User } from "../models/user/User";

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
}

const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isAuthenticated: false,
}));

export default useAuthStore;
