import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { loginUserAsync, registerUserAsync } from "./thunks";
import { Curriculum } from "../models/curriculum";
import { loginResponse } from "../types/api.response";

export type UserStates = {
  users: User[];
  currentUser: Partial<User>;
  userData: loginResponse;
  token?: string;
  loginError: boolean | null;
  curriculum?: Curriculum[];
};

const initialState: UserStates = {
  users: [] as User[],
  currentUser: {} as Partial<User>,
  userData: {} as loginResponse,
  token: undefined,
  loginError: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logOutUser: (state) => ({
      ...state,
      token: undefined,
      loginError: null,
    }),
    loginUserData: (state, { payload }: PayloadAction<UserStates>) => ({
      ...state,
      token: payload.token,
      userData: payload.userData,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserAsync.fulfilled, (state, { payload }) => ({
      ...state,
      users: [...state.users, payload],
    }));
    builder.addCase(loginUserAsync.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: payload,
      token: payload.token,
      loginError: false,
      userData: {
        token: payload.token,
        user: {
          email: payload.user.email,
          userName: payload.user.userName,
          id: payload.user.id,
        },
      },

      // {
      //   // id: payload.userData?.id,
      //   // userName: payload.userData?.userName,
      //   // email: payload.userData?.email,
      //   // curriculum: payload.userData?.curriculum,
      // },
    }));
    builder.addCase(loginUserAsync.pending, (state) => ({
      ...state,
      loginError: null,
    }));
    builder.addCase(loginUserAsync.rejected, (state) => ({
      ...state,
      loginError: true,
    }));
  },
});

export const ac = userSlice.actions;
export default userSlice.reducer;
