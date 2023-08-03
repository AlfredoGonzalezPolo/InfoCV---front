import { Header } from "../header/Header";
import "./Login.scss";
import { LoginForm } from "../loginForm/LoginForm";

export default function Login() {
  return (
    <>
      <Header></Header>
      <section className="login_section">
        <h1>LOG IN !</h1>
        <LoginForm></LoginForm>
      </section>
    </>
  );
}
