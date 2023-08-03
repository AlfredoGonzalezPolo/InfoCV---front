import { useEffect } from "react";
import { useCurriculums } from "../../hooks/curriculum.hook";

import { DetailCardPage } from "../detailCardPage/DetailCardPage";
import { Header } from "../header/Header";

export function Profile() {
  const { handleLoadCurriculums } = useCurriculums();

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
            {<DetailCardPage></DetailCardPage>}
          </ul>
        </div>
      </section>
    </>
  );
}
