import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { UserRepository } from "../services/user.repository";
import { useMemo } from "react";
import { User } from "../models/user";
import { loginUserAsync, registerUserAsync } from "../redux/thunks";
import { ac } from "../redux/users.slice";
import { loginResponse } from "../types/api.response";

export function useUsers() {
  const { users, userData, currentUser, token, loginError, curriculum } =
    useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const url = "http://localhost:6969/";

  const repo: UserRepository = useMemo(() => new UserRepository(url), []);

  const handleRegisterUser = async (user: Partial<User>) => {
    dispatch(registerUserAsync({ repo, user }));
  };

  const handleLoginUser = async (user: Partial<User>) => {
    await dispatch(loginUserAsync({ repo, user }));
  };

  const handleLogOutUser = () => {
    dispatch(ac.logOutUser());
    localStorage.removeItem("userToken");
  };

  const handleLoginUserData = async (
    userData: loginResponse,
    token: string
  ) => {
    dispatch(
      ac.loginUserData({
        token,
        userData,
        users,
        currentUser,
        loginError,
      })
    );
  };

  // const findById = (id: string) => {
  //   // const user = users.find((user) => user.id === currentUser?.id);
  //   // return user;
  // };

  return {
    users,
    currentUser,
    loginError,
    userData,
    token: token,
    curriculum,
    handleRegisterUser,
    handleLoginUser,
    handleLogOutUser,
    handleLoginUserData,
    // findById,
  };
}
