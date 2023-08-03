import { User } from "./user";

export type Curriculum = {
  id: string;
  owner: User;
  photo: Photo;
  name: string;
  surname: string;
  age: number;
  studies: string[];
  experience: string[];
  skills: string[];
  languages: string[];
  occupation: "developer" | "electrician" | "teacher";
};

export type Photo = {
  urlOriginal: string;
  url: string;
  mimetype: string;
  size: number;
};
