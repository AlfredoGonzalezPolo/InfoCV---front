import { UserRepository } from "../services/user.repository";
import { appStore } from "../store/store";
import { User } from "../models/user";
import {
  // createCurriculumAsync,
  // deleteCurriculumAsync,
  // getAllCurriculumsAsync,
  loginUserAsync,
  registerUserAsync,
} from "./thunks";
// import { CurriculumRepository } from "../services/curriculum.repository";

describe("Given the users slice reducer", () => {
  describe("When it is instantiated", () => {
    const user = {} as Partial<User>;

    const userRepo: UserRepository = {
      url: "http://localhost:6969",
      getAllUsers: jest.fn(),
      get: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      register: jest.fn(),
      login: jest.fn(),
      getAll: jest.fn(),
    };

    // const mockToken = {
    //   user: {
    //     userName: "franxu",
    //     id: "2",
    //     email: "franxu.com",
    //     password: "",
    //   },
    //   token: "aegvwfde",
    // };
    // const curriculumRepo: CurriculumRepository = new CurriculumRepository(
    //   "http://localhost:4206/curriculums",
    //   "1"
    // );

    test("Then it should dispatch the registerUserAsync", () => {
      appStore.dispatch(registerUserAsync({ repo: userRepo, user }));
      expect(userRepo.register).toHaveBeenCalled();
    });

    test("Then it should dispatch the loginUserAsync", () => {
      appStore.dispatch(loginUserAsync({ repo: userRepo, user }));
      expect(userRepo.login).toHaveBeenCalled();
    });

    // test("Then it should dispatch the getAllCurriculumsAsync", async () => {
    //   const getCurriculumPayload = {
    //     repo: curriculumRepo,
    //     url: "http://localhost:6969/curriculums",
    //     status: "active",
    //   };

    //   curriculumRepo.getAll = jest.fn().mockResolvedValue([]);

    //   await appStore.dispatch(getAllCurriculumsAsync(getCurriculumPayload));
    //   expect(curriculumRepo.getAll).toHaveBeenCalled();
    // });

    // test("Then it should dispatch the createCurriculumAsync", async () => {
    //   const curriculumData = new FormData();
    //   curriculumData.append("name", "New Curriculum");

    //   const actionPayload = {
    //     repo: curriculumRepo,
    //     curriculum: curriculumData,
    //     token: mockToken,
    //   };

    //   curriculumRepo.createCurriculum = jest
    //     .fn()
    //     .mockResolvedValue({ id: 1, name: "New Curriculum" });

    //   await appStore.dispatch(createCurriculumAsync(actionPayload));

    //   expect(curriculumRepo.createCurriculum).toHaveBeenCalledWith(
    //     curriculumData
    //   );
    // });
  });
});
