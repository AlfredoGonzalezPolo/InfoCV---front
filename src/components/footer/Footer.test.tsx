import { Provider } from "react-redux";
import { Footer } from "./Footer";
import { render, screen } from "@testing-library/react";
import { appStore } from "../../store/store";
import { MemoryRouter } from "react-router-dom";

describe("Given a footer component", () => {
  describe("When it is instantiated", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Footer></Footer>
        </MemoryRouter>
      </Provider>
    );
    test("Then it should render ...", () => {
      const elementH3 = screen.getAllByRole("heading");

      expect(elementH3).toBeInTheDocument;
    });
  });
});
