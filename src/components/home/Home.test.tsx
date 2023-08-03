import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { appStore } from "../../store/store";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Given a Home page component", () => {
  describe("When it is instantiated", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Home></Home>
        </MemoryRouter>
      </Provider>
    );
    test("Then it should render ...", () => {
      const elementH1 = screen.getAllByRole("heading");

      expect(elementH1).toBeInTheDocument;
    });
  });
});
