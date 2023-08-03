import { useNavigate } from "react-router-dom";
import { SyntheticEvent, useEffect } from "react";
import { useUsers } from "../../hooks/user.hook";
import { User } from "../../models/user";
import Swal from "sweetalert2";
import "./LoginForm.scss";

export function LoginForm() {
  const navigate = useNavigate();
  const { handleLoginUser, loginError } = useUsers();

  const handleLogin = async (event: SyntheticEvent) => {
    event.preventDefault();

    const formLoginElement = event.target as HTMLFormElement;

    const currentUser = {
      email: (formLoginElement.elements.namedItem("email") as HTMLFormElement)
        .value,
      password: (
        formLoginElement.elements.namedItem("password") as HTMLFormElement
      ).value,
    } as Partial<User>;

    if (currentUser.email === "" || currentUser.password === "") {
      Swal.fire("Credentials cannot be empty");
      return;
    }

    handleLoginUser(currentUser);
    formLoginElement.reset();
  };
  useEffect(() => {
    if (loginError === null) return;

    if (loginError === true) {
      Swal.fire("Invalid email or password");
      return;
    } else {
      Swal.fire({
        title: "You have logged succesfully! Welcome",
        timer: 2000,
      });
      navigate("/menu");
    }
  }, [loginError, navigate]);

  return (
    <section className="login">
      <h2>Login</h2>
      <form action="" className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="submit_button">
          Enviar
        </button>
      </form>
    </section>
  );
}
