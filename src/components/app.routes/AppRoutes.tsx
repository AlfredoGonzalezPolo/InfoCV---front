import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import { Register } from "../register/Register";
import Login from "../login/Login";
import Menu from "../menu/Menu";
import { Profile } from "../profile/Profile";
import { useUsers } from "../../hooks/user.hook";
import { ShowCV } from "../showCV/ShowCV";
import { CreateCV } from "../createCV/CreateCV";
import { DetailCardPage } from "../detailCardPage/DetailCardPage";

export function AppRoutes() {
  const { token } = useUsers();
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        {token ? (
          <Route path="/menu" element={<Menu></Menu>}></Route>
        ) : (
          <Route
            path="/menu"
            element={<Navigate to={"/login"}></Navigate>}
          ></Route>
        )}
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/showcv" element={<ShowCV></ShowCV>}></Route>
        <Route path="/createcv" element={<CreateCV></CreateCV>}></Route>
        <Route
          path="/detail/:id"
          element={<DetailCardPage></DetailCardPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
