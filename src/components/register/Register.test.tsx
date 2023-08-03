import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { appStore } from "../../store/store";
import { Register } from "./Register";
import { Header } from "../header/Header";
import { RegisterForm } from "../registerForm/RegisterForm";

jest.mock("../header/Header");
jest.mock("../registerForm/RegisterForm");

describe("Given a Register page component", () => {
  describe("When it is instantiated", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Register></Register>
        </MemoryRouter>
      </Provider>
    );
    test("Then it should return", () => {
      const element = screen.getAllByRole("heading");

      expect(element).toBeInTheDocument;
      expect(Header).toHaveBeenCalled();
      expect(RegisterForm).toHaveBeenCalled();
    });
  });
});
