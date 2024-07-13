import { Navigate, Route, Routes } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"
import HistoryPage from "./pages/HistoryPage"
import CalculatePage from "./pages/CalculatePage";
import './style.css'

const AppQTD = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<CalculatePage />}></Route>
          <Route path="/history" element={<HistoryPage />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default AppQTD