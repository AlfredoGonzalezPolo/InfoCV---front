import { User } from "../models/user";

export type ApiResponse = {
  items: User[];
};

export type loginResponse = {
  token: string;
  user: Pick<User, "id" | "email" | "userName">;
};
