import { render, screen, act } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { AppRoutes } from "./AppRoutes";
import { Provider } from "react-redux";
import { appStore } from "../../store/store";

describe("Given the AppRoutes component", () => {
  describe("When it is instantiated with the Home route", () => {
    const MockedComponentHome = jest.fn().mockReturnValue(<h1>AppRoutes</h1>);
    jest.mock("../home/Home", () => MockedComponentHome);

    let element: HTMLElement[];
    beforeEach(async () => {
      await act(async () => {
        render(
          <Provider store={appStore}>
            <Router initialEntries={["/"]} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </Router>
          </Provider>
        );
      });
    });

    test("Then it should be in the document", () => {
      element = screen.getAllByRole("heading");

      expect(MockedComponentHome).toHaveBeenCalled;
      expect(element).toBeInTheDocument;
    });
  });

  describe("When it is instantiated with the register route", () => {
    const MockedComponentRegister = jest.fn().mockReturnValue(<h1>Sign up</h1>);

    jest.mock("../register/Register", () => MockedComponentRegister);
    let element: HTMLElement[];
    beforeEach(async () => {
      await act(async () => {
        render(
          <Provider store={appStore}>
            <Router initialEntries={["/register"]} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </Router>
          </Provider>
        );
      });
    });
    test("Then it should be in the document", () => {
      element = screen.getAllByRole("heading");
      expect(MockedComponentRegister).toHaveBeenCalled;
      expect(element).toBeInTheDocument;
    });
  });

  describe("When it is instantiated with the login route", () => {
    const MockedComponentLogin = jest.fn().mockReturnValue(<h1>Log in</h1>);

    jest.mock("../login/Login", () => MockedComponentLogin);
    let element: HTMLElement[];
    beforeEach(async () => {
      await act(async () => {
        render(
          <Provider store={appStore}>
            <Router initialEntries={["/login"]} initialIndex={0}>
              <AppRoutes></AppRoutes>
            </Router>
          </Provider>
        );
      });
    });
    test("Then it should be in the document", () => {
      element = screen.getAllByRole("heading");
      expect(MockedComponentLogin).toHaveBeenCalled;
      expect(element).toBeInTheDocument;
    });
  });
});
