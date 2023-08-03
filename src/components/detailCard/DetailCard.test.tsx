import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "../../store/store";
import { DetailCard } from "./DetailCard";
import { Curriculum } from "../../models/curriculum";

jest.mock("../../hooks/curriculum.hook", () => ({
  useCurriculums: jest.fn().mockReturnValue({
    curriculums: [
      {
        id: "1",
        Name: "Franchute",
        Surname: "Franchutin",
        Age: "222",
        Languages: "spanish",
        Studies: "high school",
        Experience: "none",
        Skills: "learning hability",
        Occupation: "teacher",
        owner: "Fran",
      },
    ],
  }),
}));

jest.mock("../../hooks/curriculum.hook", () => ({
  useCurriculums: jest.fn().mockReturnValue({
    handleDeleteCurriculum: jest.fn(),
  }),
}));

const item = {
  id: "1",
  Name: "Franchute",
  Surname: "Franchutin",
  Age: "222",
  Languages: "spanish",
  Studies: "high school",
  Experience: "none",
  Skills: "learning hability",
  Occupation: "teacher",
  owner: {
    id: "1",
    userName: "Fran",
    email: "fran@fran",
    password: "avocds",
    isLogged: true,
    token: "<fc>231</fc>",
  },
  photo: { urlOriginal: "", url: "", mimetype: "", size: "" },
} as unknown as Curriculum;

describe("Given a Login page component", () => {
  describe("When it is instantiated", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <DetailCard item={item} />
        </MemoryRouter>
      </Provider>
    );
    test("Then it should render ...", () => {
      const elementH1 = screen.getAllByRole("button");

      expect(elementH1[0]).toBeInTheDocument;
    });
  });
});
