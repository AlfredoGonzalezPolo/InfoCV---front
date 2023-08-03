import { Curriculum } from "./curriculum";

export type User = {
  id: string;
  userName: string;
  email: string;
  password: string;
  isLogged: boolean;
  token: string;
  curriculum: Curriculum[];
};
