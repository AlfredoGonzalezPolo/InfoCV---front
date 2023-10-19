import { SyntheticEvent } from "react";
import { useCurriculums } from "../../hooks/curriculum.hook";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./CreateCVForm.scss";
import { Curriculum } from "../../models/curriculum";

export function CreateCVForm() {
  const { handleModifyCurriculums, curriculums, handleLoadCurriculums } =
    useCurriculums();
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };

  const completeCurriculum = curriculums.find(
    (item) => item.id === id
  ) as Curriculum;

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const editCurriculumForm = event.target as HTMLFormElement;

    const nameValue = (
      editCurriculumForm.elements.namedItem("name") as HTMLInputElement
    ).value;

    const curriculumData: Partial<Curriculum> = {
      id: completeCurriculum.id,
      name: nameValue,
    };

    await handleModifyCurriculums(id, curriculumData);
    console.log(completeCurriculum.name);
    console.log(curriculumData.name);

    Swal.fire({
      title: "Your curriculum has been created succesfully",
    });
    handleLoadCurriculums();

    navigate("/menu");
  };

  return (
    <section className="form_section">
      <form
        role="form"
        action=""
        className="form"
        id="form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="createcv_form">
          <label htmlFor="photo"></label>
          <input type="file" id="photo" name="photo" />
        </div>
        <div className="createcv_form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={completeCurriculum.name}
          />
        </div>
        <div className="createcv_form">
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" name="surname" />
        </div>
        <div className="createcv_form">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" />
        </div>
        <div className="createcv_form">
          <label htmlFor="studies">Studies</label>
          <input type="text" id="studies" name="studies" />
        </div>
        <div className="createcv_form">
          <label htmlFor="experience">Experience</label>
          <input type="text" id="experience" name="experience" />
        </div>
        <div className="createcv_form">
          <label htmlFor="skills">Skills</label>
          <input type="text" id="skills" name="skills" />
        </div>
        <div className="createcv_form">
          <label htmlFor="languages">Languages</label>
          <input type="text" id="languages" name="languages" />
        </div>
        <div className="createcv_form">
          <label htmlFor="occupation">Choose a occupation:</label>
          <select name="occupation" id="occupation">
            <option value="">--Please choose an option--</option>
            <option value="developer">Developer</option>
            <option value="electrician">Electrician</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        {id ? (
          <button type="submit" className="submit_button">
            Save changes
          </button>
        ) : (
          <button type="submit" className="submit_button">
            CREATE
          </button>
        )}
      </form>
    </section>
  );
}
