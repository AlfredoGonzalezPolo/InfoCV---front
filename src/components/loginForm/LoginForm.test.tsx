import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../store/store";
import { MemoryRouter } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import "@testing-library/jest-dom";

describe("Given a LoginForm component", () => {
  beforeEach(async () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>
    );
  });
  describe("When it is filled", () => {
    test("Then it should ...", () => {
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });

    test("Then it should ...", async () => {
      const element = screen.getByRole("button");
      await fireEvent.click(element);
    });
  });
});
