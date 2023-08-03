import { fireEvent, render, screen } from "@testing-library/react";
import { appStore } from "../../store/store";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { CreateCVForm } from "./CreateCVForm";
import { useCurriculums } from "../../hooks/curriculum.hook";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));
jest.mock("../../hooks/curriculum.hook", () => ({
  useCurriculums: jest.fn().mockReturnValue({
    handleCreateCurriculums: jest.fn(),
  }),
}));
jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));
describe("Given a CreateCVForm component", () => {
  beforeEach(async () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <CreateCVForm />
        </MemoryRouter>
      </Provider>
    );
  });
  describe("When it is filled", () => {
    test("Then it should have a submit button in the form", () => {
      const button = screen.getByRole("button", { name: "CREATE" });
      expect(button).toBeInTheDocument();
    });

    test("Then the handleCreateCurriculums function should be called", async () => {
      const form = screen.getByRole("form");
      await fireEvent.submit(form);

      expect(useCurriculums().handleCreateCurriculums).toHaveBeenCalled();
    });
  });
});
