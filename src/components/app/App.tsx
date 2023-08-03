import { AppRoutes } from "../app.routes/AppRoutes";
import { Footer } from "../footer/Footer";
import "./App.scss";

export function App() {
  return (
    <>
      <div className="app-container">
        <main>
          <AppRoutes></AppRoutes>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
