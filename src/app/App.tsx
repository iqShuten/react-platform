import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { UseTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toogleTheme } = UseTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toogleTheme}>TOOGLE</button>
    </div>
  );
};

export default App;
