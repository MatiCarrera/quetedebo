import { Navigate, Route, Routes } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"
import HistoryPage from "./pages/HistoryPage"
import CalculatePage from "./pages/CalculatePage";
import FooterComponent from "./components/FooterComponent";

const AppQTD = () => {
  return (
    <>
      <div className="app-container">
        <NavbarComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<CalculatePage />}></Route>
            <Route path="/history" element={<HistoryPage />}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default AppQTD