import { Header } from "../header/Header";
import "./Register.scss";
import { RegisterForm } from "../registerForm/RegisterForm";
export function Register() {
  return (
    <>
      <Header></Header>
      <section className="register_section">
        <h1>SIGN UP FOR FREE !</h1>
        <RegisterForm></RegisterForm>
      </section>
    </>
  );
}
