import { fireEvent, render } from "@testing-library/react";
import { Header } from "./Header";
import { Provider } from "react-redux";
import { useNavigate, MemoryRouter } from "react-router-dom";
import { appStore } from "../../store/store";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));
describe("Header Component", () => {
  test("navigates to registration page when SIGN UP button is clicked", () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
    const { getByRole } = render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    const registerButton = getByRole("button", { name: "SIGN UP" });
    fireEvent.click(registerButton);

    expect(navigateMock).toHaveBeenCalledWith("/register");
  });

  test("navigates to registration page when SIGN UP button is clicked", () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
    const { getByRole } = render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    const loginButton = getByRole("button", { name: "LOG IN" });
    fireEvent.click(loginButton);

    expect(navigateMock).toHaveBeenCalledWith("/login");
  });
  // test("navigates to registration page when SIGN UP button is clicked", () => {
  //   const navigateMock = jest.fn();
  //   (useNavigate as jest.Mock).mockReturnValue(navigateMock);
  //   const { getByRole } = render(
  //     <Provider store={appStore}>
  //       <MemoryRouter>
  //         <Header />
  //       </MemoryRouter>
  //     </Provider>
  //   );

  //   const profileButton = getByRole("button", { name: "VIEW PROFILE" });
  //   fireEvent.click(profileButton);

  //   expect(navigateMock).toHaveBeenCalledWith("/profile");
  // });
});
