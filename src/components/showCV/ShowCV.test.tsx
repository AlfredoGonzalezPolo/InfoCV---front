import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "../../store/store";
import { Header } from "../header/Header";
import { ShowCV } from "./ShowCV";

jest.mock("../header/Header");

describe("Given a ShowCV page component", () => {
  describe("When it is instantiated", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <ShowCV></ShowCV>
        </MemoryRouter>
      </Provider>
    );
    test("Then it should render ...", () => {
      const elementH1 = screen.getAllByRole("list");

      expect(elementH1).toBeInTheDocument;
      expect(Header).toHaveBeenCalled();
    });
  });
});
