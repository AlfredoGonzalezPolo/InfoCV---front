import { DetailCard } from "../detailCard/DetailCard";
import { useCurriculums } from "../../hooks/curriculum.hook";
// import { Header } from "../header/Header";

export function DetailCardPage() {
  const { curriculums } = useCurriculums();
  return (
    <>
      {/* <Header></Header> */}
      {curriculums.map((item) => (
        <DetailCard item={item} key={item.id}></DetailCard>
      ))}
    </>
  );
}
