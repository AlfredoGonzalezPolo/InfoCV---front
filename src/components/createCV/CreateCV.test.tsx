import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "../../store/store";
import { Header } from "../header/Header";
import { CreateCVForm } from "../createCVForm/CreateCVForm";
import { CreateCV } from "./CreateCV";

jest.mock("../header/Header");
jest.mock("../createCVForm/CreateCVForm");

describe("Given a CreateCV page component", () => {
  describe("When it is instantiated", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <CreateCV></CreateCV>
        </MemoryRouter>
      </Provider>
    );
    test("Then it should render ...", () => {
      expect(Header).toHaveBeenCalled();
      expect(CreateCVForm).toHaveBeenCalled();
    });
  });
});
