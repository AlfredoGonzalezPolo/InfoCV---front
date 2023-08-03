import { useNavigate } from "react-router-dom";
import { useCurriculums } from "../../hooks/curriculum.hook";
import { useUsers } from "../../hooks/user.hook";
import { Curriculum } from "../../models/curriculum";
import "./DetailCard.scss";

type Propstype = {
  item: Curriculum;
};
export function DetailCard({ item }: Propstype) {
  const { curriculums, handleDeleteCurriculum } = useCurriculums();
  const { userData } = useUsers();
  const navigate = useNavigate();
  const handleDelete = (id: string) => {
    const focusedCV: Curriculum = curriculums.find(
      (item: Curriculum) => item.id === id
    ) as Curriculum;
    if (userData.user.email === item.owner.email) {
      handleDeleteCurriculum(focusedCV.id);
    }
  };
  const goToModify = () => {
    navigate("/modify");
  };

  const handleModify = () => {
    //
  };

  return (
    <>
      <div className="cv-container">
        <figure>
          <img src={item.photo.url} alt={item.name} />
        </figure>
        <div className="data-container">
          <p>Name: {item.name}</p>
          <p>Surname: {item.surname}</p>
          <p>Age: {item.age}</p>
          <p>Languages: {item.languages}</p>
          <p>Studies: {item.studies}</p>
          <p>Experience: {item.experience}</p>
          <p>Skills: {item.skills}</p>
          <p>Occupation: {item.occupation}</p>
          <p>owner: {item.owner.userName}</p>
        </div>
        <div className="buttons-container">
          <button role="button" onClick={goToModify}>
            MODIFY
          </button>
          <button role="button" onClick={() => handleDelete(item.id)}>
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}
