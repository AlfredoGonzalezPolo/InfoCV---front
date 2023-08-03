// import { Curriculum } from "../models/curriculum";
import { CurriculumRepository } from "./curriculum.repository";

describe("Given the Curriculum Repository class", () => {
  const mockToken = "aaaaa";

  let curriculumRepository: CurriculumRepository;

  beforeEach(() => {
    curriculumRepository = new CurriculumRepository(
      "http://testesito.com/",
      mockToken
    );
  });
  describe("When calling the getAll method", () => {
    // test("Then it should fetch data from the API and return the response", async () => {
    //   const mockData = [{}] as Curriculum[];
    //   const expectedUrl = "http://testesito.com/";

    //   global.fetch = jest.fn().mockResolvedValue({
    //     ok: true,
    //     json: jest.fn().mockResolvedValue(mockData),
    //   });

    //   const response = await curriculumRepository.getAll();

    //   expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
    //   expect(response).toEqual(mockData);
    // });

    test("Then it should throw an error if the fetch is not successful", async () => {
      const expectedUrl = "http://testesito.com//";
      const mockErrorMessage = "No data found";
      const error = new Error("Error: 400. No data found");

      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: mockErrorMessage,
      });

      await expect(curriculumRepository.getAll()).rejects.toThrow(error);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
    });
  });

  describe("When calling the create method", () => {
    test("Then it should fecth data from the API and return the response", async () => {
      const curriculumData = {} as unknown as FormData;
      const expectedUrl = "http://testesito.com/";

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(curriculumData),
      });

      const response = await curriculumRepository.createCurriculum(
        curriculumData
      );

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "POST",
        body: curriculumData,
        headers: { Authorization: "Bearer " + mockToken },
      });
      expect(response).toEqual(curriculumData);
    });
  });

  describe("When calling the delete method", () => {
    test("Then it should send a DELETE request to the API and return the response status", async () => {
      const curriculumId = "1";
      const expectedUrl = `http://testesito.com//${curriculumId}`;

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
      });

      const response = await curriculumRepository.deleteCurriculum(
        curriculumId
      );

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + mockToken,
        },
      });
      expect(response).toEqual(true);
    });
  });
});
