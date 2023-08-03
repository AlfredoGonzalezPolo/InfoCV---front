import { useEffect } from "react";
import { useCurriculums } from "../../hooks/curriculum.hook";
import { Curriculum } from "../../models/curriculum";
import "./List.scss";
import { Link } from "react-router-dom";

type Propstype = {
  item: Curriculum;
};

export function List({ item }: Propstype) {
  const { handleLoadCurriculums } = useCurriculums();

  useEffect(() => {
    const handleCurriculums = async () => {
      await handleLoadCurriculums();
    };
    handleCurriculums();
  }, [handleLoadCurriculums]);
  return (
    <>
      <Link to={"/detail/" + item.id}>
        <li className="curriculum_list" key={item.id}>
          <section className="curriculum-container">
            <div className="image-container">
              <img
                src={item.photo.url}
                alt={item.name}
                width="160"
                height="180"
              />
            </div>
            <div className="data-container">
              <span className="data-container_item">Name: {item.name} </span>
              <span className="data-container_item">
                Surname: {item.surname}
                {"  "}
              </span>
              <span className="data-container_item">Age: {item.age} </span>
              <span className="data-container_item">
                Studies: {item.studies}
                {"  "}
              </span>
              <span className="data-container_item">
                Skills: {item.skills}
                {"  "}
              </span>
              <span className="data-container_item">
                Experience: {item.experience}
                {"  "}
              </span>
              <span className="data-container_item">
                Occupation: {item.occupation}
                {"  "}
              </span>
              <span className="data-container_item">
                Languages: {item.languages}
                {"  "}
              </span>
            </div>
          </section>
        </li>
      </Link>
    </>
  );
}
