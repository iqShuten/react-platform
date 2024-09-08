import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense, useContext } from "react";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { UseTheme } from "./theme/useTheme";



const App = () => {
  const {theme, toogleTheme } = UseTheme()
  

  return (
    <div className= {`app ${theme}`}>
      <button onClick={toogleTheme}>TOOGLE</button>
      <Link to={"/"}>Главная </Link>
      <Link to={"/about"}>О сайте </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
