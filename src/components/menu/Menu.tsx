import { Link } from "react-router-dom";
import { Header } from "../header/Header";
import "./Menu.scss";

export default function Menu() {
  return (
    <>
      <Header></Header>

      <nav role="navigation" className="nav-container">
        <Link to={"/createCV"}>
          <div className="create-nav">
            <h2>CREATE CV</h2>
          </div>
        </Link>
        <Link to={"/showCV"}>
          <div className="show-nav">
            <h2>SHOW CV</h2>
          </div>
        </Link>
      </nav>
    </>
  );
}
