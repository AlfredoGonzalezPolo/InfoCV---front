import { useNavigate } from "react-router-dom";
import { SyntheticEvent } from "react";
import Swal from "sweetalert2";
import { useUsers } from "../../hooks/user.hook";
import { User } from "../../models/user";
import "./RegisterForm.scss";

export function RegisterForm() {
  const navigate = useNavigate();
  const { handleRegisterUser } = useUsers();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const formRegisterElement = event.target as HTMLFormElement;

    const newUserData = {
      userName: (
        formRegisterElement.elements.namedItem("userName") as HTMLFormElement
      ).value,
      email: (
        formRegisterElement.elements.namedItem("email") as HTMLFormElement
      ).value,
      password: (
        formRegisterElement.elements.namedItem("password") as HTMLFormElement
      ).value,
    } as Partial<User>;

    handleRegisterUser(newUserData);
    formRegisterElement.reset();

    Swal.fire({
      icon: "success",
      text: "You have been Registered succesfully!",
    });
    navigate("/home");
  };
  return (
    <section className="register">
      <h2>Register</h2>
      <form role="form" className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user-input">Name</label>
          <input type="text" id="user-input" name="userName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email-input">Email</label>
          <input type="email" id="email-input" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password-input" name="password" required />
        </div>
        <button type="submit" className="submit_button">
          Sign up
        </button>
      </form>
    </section>
  );
}
