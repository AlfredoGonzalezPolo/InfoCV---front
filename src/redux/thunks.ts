import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { UserRepository } from "../services/user.repository";
import { Curriculum } from "../models/curriculum";
import { CurriculumRepository } from "../services/curriculum.repository";
import { loginResponse } from "../types/api.response";

export const registerUserAsync = createAsyncThunk<
  User,
  { repo: UserRepository; user: Partial<User> }
>("users/registerUserAsync", async ({ repo, user }) => {
  return await repo.register(user);
});

export const loginUserAsync = createAsyncThunk<
  loginResponse,
  { repo: UserRepository; user: Partial<User> }
>("users/loginUserAsync", async ({ repo, user }) => {
  const result = await repo.login(user);
  localStorage.setItem("userToken", result.token);

  return result;
});

export const getAllCurriculumsAsync = createAsyncThunk<
  Curriculum[],
  CurriculumRepository
>("curriculums/get", async (repo: CurriculumRepository) => {
  const answer = await repo.getAll();
  return answer;
});

export const createCurriculumAsync = createAsyncThunk<
  Curriculum,
  { repo: CurriculumRepository; curriculum: FormData }
>("curriculums/add", async ({ repo, curriculum }) => {
  return await repo.createCurriculum(curriculum);
});

export const deleteCurriculumAsync = createAsyncThunk<
  string,
  { repo: CurriculumRepository; id: Curriculum["id"] }
>("curriculums/delete", async ({ id, repo }) => {
  const response = await repo.delete(id);
  return response ? id : "";
});

export const modifyCurriculumAsync = createAsyncThunk<
  Curriculum,
  {
    repo: CurriculumRepository;
    id: Curriculum["id"];
    curriculum: FormData;
  }
>("curriculum/modify", async ({ id, repo, curriculum }) => {
  return await repo.update(id, curriculum);
});
