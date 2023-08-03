import { CreateCVForm } from "../createCVForm/CreateCVForm";
import { Header } from "../header/Header";
import "./CreateCV.scss";

export function CreateCV() {
  return (
    <>
      <Header></Header>
      <section className="createCV_section">
        <CreateCVForm></CreateCVForm>
      </section>
    </>
  );
}
