import { UserRole } from "./UserRole";

export interface User {
  id: number;
  username: string;
  password?: string;
  email?: string;
  active: boolean;
  createDate: Date;
  role: UserRole;
}
