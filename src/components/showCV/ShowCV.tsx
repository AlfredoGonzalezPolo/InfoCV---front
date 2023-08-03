import { Header } from "../header/Header";
import { useEffect } from "react";
import { useCurriculums } from "../../hooks/curriculum.hook";
import { List } from "../list/List";
import "./ShowCV.scss";

export function ShowCV() {
  const { curriculums, handleLoadCurriculums } = useCurriculums();

  useEffect(() => {
    const handleCurriculums = async () => {
      await handleLoadCurriculums();
    };
    handleCurriculums();
  }, [handleLoadCurriculums]);
  return (
    <>
      <Header></Header>
      <section className="list_section">
        <div className="list_section-container">
          <ul className="list_section-container_item">
            {curriculums.map((item) => (
              <List key={item.id} item={item}></List>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
