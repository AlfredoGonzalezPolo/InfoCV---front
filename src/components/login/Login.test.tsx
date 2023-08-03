import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "../../store/store";
import { Header } from "../header/Header";
import { LoginForm } from "../loginForm/LoginForm";

jest.mock("../header/Header");
jest.mock("../loginForm/LoginForm");

describe("Given a Login page component", () => {
  describe("When it is instantiated", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Login></Login>
        </MemoryRouter>
      </Provider>
    );
    test("Then it should render ...", () => {
      const elementH1 = screen.getAllByRole("heading");

      expect(elementH1).toBeInTheDocument;
      expect(Header).toHaveBeenCalled();
      expect(LoginForm).toHaveBeenCalled();
    });
  });
});
