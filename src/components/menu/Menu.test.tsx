import { Provider } from "react-redux";
import { appStore } from "../../store/store";
import { MemoryRouter } from "react-router-dom";
import Menu from "./Menu";
import { render, screen } from "@testing-library/react";
import { Header } from "../header/Header";

jest.mock("../header/Header");

describe("Given a", () => {
  describe("When it receives", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Menu></Menu>
        </MemoryRouter>
      </Provider>
    );
    test("Then it should return", () => {
      const element = screen.getAllByRole("navigation");

      expect(element).toBeInTheDocument;
      expect(Header).toHaveBeenCalled();
    });
  });
});
