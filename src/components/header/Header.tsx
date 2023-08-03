import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useUsers } from "../../hooks/user.hook";

export function Header() {
  const navigate = useNavigate();
  const { token, handleLogOutUser } = useUsers();

  const navigateLogin = () => {
    navigate("/login");
  };

  const navigateRegister = () => {
    navigate("/register");
  };

  const navigateProfile = () => {
    navigate("/profile");
  };

  return (
    <header>
      <div className="nav-logo">
        <Link to={"/menu"}>
          <img
            src="/infoCV-logo.svg"
            alt="imagen con el logo de infoCV"
            style={{ width: 170, height: 70 }}
          />
        </Link>
      </div>
      <div className="nav-buttons_container">
        {token ? (
          <>
            <div className="nav-buttons_item">
              <button onClick={handleLogOutUser}>
                <Link to={"/"}>Log Out</Link>
              </button>
            </div>
            <div className="nav-buttons_item">
              <button onClick={navigateProfile}>
                <Link to={"/profile"}>VIEW PROFILE</Link>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="nav-buttons_item">
              <button onClick={navigateLogin}>
                <Link to={"/login"}>LOG IN</Link>
              </button>
            </div>
            <div className="nav-buttons_item">
              <button onClick={navigateRegister}>
                <Link to={"/register"}>SIGN UP</Link>
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
