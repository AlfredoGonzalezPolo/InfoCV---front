import { User } from "../models/user";
import { ApiResponse, loginResponse } from "../types/api.response";
import { ApiRepository } from "./api.repository";

export class UserRepository extends ApiRepository<User> {
  constructor(public url: string) {
    super(url);
  }

  async getAllUsers(): Promise<User[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    const data = response.json() as Promise<ApiResponse>;
    return (await data).items;
  }

  // async getUser(id: User["id"]): Promise<Partial<User>> {
  //   const response = await fetch(this.url + id);
  //   return response.json() as Promise<Partial<User>>;
  // }

  async register(item: Partial<User>): Promise<User> {
    const response = await fetch(this.url + "user/register/", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    return response.json() as Promise<User>;
  }

  async login(item: Partial<User>): Promise<loginResponse> {
    const response = await fetch(this.url + "user/login/", {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Login Error");
    return response.json() as Promise<loginResponse>;
  }
}
