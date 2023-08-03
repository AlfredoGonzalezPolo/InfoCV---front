import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { appStore } from "../../store/store";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { RegisterForm } from "./RegisterForm";
import { useUsers } from "../../hooks/user.hook";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));
jest.mock("../../hooks/user.hook", () => ({
  useUsers: jest.fn().mockReturnValue({
    handleRegisterUser: jest.fn(),
  }),
}));
jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));
describe("Given a RegisterForm component", () => {
  beforeEach(async () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <RegisterForm />
        </MemoryRouter>
      </Provider>
    );
  });
  describe("When it is filled", () => {
    test("Then it should ...", () => {
      const submitButton = screen.getByText("Sign up");

      expect(submitButton).toBeInTheDocument();
    });
    test("...", async () => {
      const userNameInput = screen.getByText("Name");
      const emailInput = screen.getByText("Email");
      const passwordInput = screen.getByText("Password");
      const submitButton = screen.getByText("Sign up");
      const form = await screen.findByRole("form");

      await userEvent.type(userNameInput, "javi");
      await userEvent.type(emailInput, "javi@javi");
      await userEvent.type(passwordInput, "astorgaIndependiente");
      await userEvent.click(submitButton);
      await fireEvent.submit(form);

      expect(useUsers().handleRegisterUser).toHaveBeenCalled();
    });
  });
});
