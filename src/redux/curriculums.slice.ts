import { createSlice } from "@reduxjs/toolkit";
import { Curriculum } from "../models/curriculum";
import {
  createCurriculumAsync,
  deleteCurriculumAsync,
  getAllCurriculumsAsync,
  modifyCurriculumAsync,
} from "./thunks";
import { User } from "../models/user";

export type CurriculumState = {
  users: User[];
  curriculums: Curriculum[];
  currentUser: Pick<User, "token">;
  token?: string;
};

const initialState: CurriculumState = {
  users: [] as User[],
  curriculums: [] as Curriculum[],
  currentUser: {} as Pick<User, "token">,
  token: undefined,
};

const curriculumSlice = createSlice({
  name: "curriculums",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllCurriculumsAsync.fulfilled, (state, { payload }) => {
      state.curriculums = payload;
    });
    builder.addCase(createCurriculumAsync.fulfilled, (state, { payload }) => ({
      ...state,
      curriculums: [...state.curriculums, payload],
      token: payload.owner.token,
    }));
    builder.addCase(deleteCurriculumAsync.fulfilled, (state, { payload }) => {
      return {
        ...state,
        curriculums: state.curriculums.filter(
          (curriculum) => curriculum.id !== payload
        ),
      };
    });

    builder.addCase(modifyCurriculumAsync.fulfilled, (state, { payload }) => ({
      ...state,
      curriculums: state.curriculums.map((item) =>
        item.id === payload.id ? payload : item
      ),
    }));
  },
});

export default curriculumSlice.reducer;
export const ac = curriculumSlice.actions;
