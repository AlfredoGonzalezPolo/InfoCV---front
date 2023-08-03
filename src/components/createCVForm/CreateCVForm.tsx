import { SyntheticEvent } from "react";
import { useCurriculums } from "../../hooks/curriculum.hook";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./CreateCVForm.scss";

export function CreateCVForm() {
  const { handleCreateCurriculums } = useCurriculums();
  const navigate = useNavigate();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const curriculumForm = event.target as HTMLFormElement;
    const curriculumData = new FormData(curriculumForm);

    handleCreateCurriculums(curriculumData);

    Swal.fire({
      title: "Your curriculum has been created succesfully",
    });
    navigate("/profile");
  };
  return (
    <section className="form_section">
      <form
        role="form"
        action=""
        id="form"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="createcv_form">
          <label htmlFor="photo"></label>
          <input type="file" id="file-input" name="photo" />
        </div>
        <div className="createcv_form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name-input" name="name" />
        </div>
        <div className="createcv_form">
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname-input" name="surname" />
        </div>
        <div className="createcv_form">
          <label htmlFor="age">Age</label>
          <input type="number" id="age-input" name="age" />
        </div>
        <div className="createcv_form">
          <label htmlFor="studies">Studies</label>
          <input type="text" id="studies-input" name="studies" />
        </div>
        <div className="createcv_form">
          <label htmlFor="experience">Experience</label>
          <input type="text" id="experience-input" name="experience" />
        </div>
        <div className="createcv_form">
          <label htmlFor="skills">Skills</label>
          <input type="text" id="skills-input" name="skills" />
        </div>
        <div className="createcv_form">
          <label htmlFor="languages">Languages</label>
          <input type="text" id="languages-input" name="languages" />
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
        <button type="submit" className="submit_button">
          CREATE
        </button>
      </form>
    </section>
  );
}
