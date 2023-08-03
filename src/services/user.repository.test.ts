import { UserRepository } from "./user.repository";

describe("Given a UserRepository", () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = new UserRepository("https://testesito.com/");
  });
  describe("When getAll is used", () => {
    test("should throw an error if the fetchto our API is not successful", async () => {
      const expectedUrl = "https://testesito.com/";
      const mockErrorMessage = "Error";

      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: "Error",
      });

      await expect(userRepository.getAllUsers()).rejects.toThrow(
        mockErrorMessage
      );

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
    });
  });

  describe("When calling the register method", () => {
    test("Then it should fetch data from the API and return the response", async () => {
      const user = {
        userName: "eustaquio",
        email: "eustaquio@gmail.com",
        password: "testesito",
      };

      const expectedUrl = "https://testesito.com/user/register/";
      const mockResponse = {
        id: "1",
        userName: "eustaquio",
        email: "eustaquio@gmail.com",
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const registeredUser = await userRepository.register(user);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      expect(registeredUser).toEqual(mockResponse);
    });
  });
  describe("When calling the login method", () => {
    test("Then it should fetch data from the API and return the response", async () => {
      const user = {
        email: "testesito@gmail.com",
        password: "1234testesito",
      };

      const expectedUrl = "https://testesito.com/user/login/";
      const mockResponse = {
        id: "1",
        userName: "testesito",
        email: "testesito@gmail.com",
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const loggedInUser = await userRepository.login(user);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      expect(loggedInUser).toEqual(mockResponse);
    });

    test("Then it should throw an error if the fetch is not successful", async () => {
      const user = {
        email: "testesito@gmail.com",
        password: "testesito",
      };
      const error = new Error("Login Error");

      const expectedUrl = "https://testesito.com/user/login/";

      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: "Login Error",
      });

      await expect(userRepository.login(user)).rejects.toThrow(error);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
    });
  });
});
