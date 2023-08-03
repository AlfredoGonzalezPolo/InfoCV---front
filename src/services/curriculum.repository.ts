import { Curriculum } from "../models/curriculum";
import { ApiRepository } from "./api.repository";

type ApiResponse = {
  items: Curriculum[];
};

export class CurriculumRepository extends ApiRepository<Curriculum> {
  constructor(public url: string, public token: string) {
    super(url);
  }

  async getAll(): Promise<Curriculum[]> {
    const response = await fetch(`${this.url}/`);
    if (!response.ok) {
      const message = `Error: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
    const data = response.json() as Promise<ApiResponse>;
    return (await data).items;
  }

  // async getCurriculum(_id: Curriculum["id"]): Promise<Curriculum> {
  //   const response = await fetch(`${this.url}/id`);
  //   if (!response.ok) {
  //     const message = `Error: ${response.status}. ${response.statusText}`;
  //     throw new Error(message);
  //   }
  //   const data = (await response.json()) as Curriculum;
  //   return data;
  // }

  async createCurriculum(item: FormData): Promise<Curriculum> {
    const response = await fetch(this.url, {
      method: "POST",
      body: item,
      headers: { Authorization: "Bearer " + this.token },
    });
    return response.json() as Promise<Curriculum>;
  }

  async deleteCurriculum(id: Curriculum["id"]): Promise<boolean> {
    const response = await fetch(this.url + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      },
    });
    return response.ok;
  }
}
