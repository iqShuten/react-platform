import './styles/index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import { UseTheme, Theme } from 'app/providers/ThemeProvider';
import { AboutPageAsync } from 'pages/AboutPage/ui/AboutPage.async';
import { MainPageAsync } from 'pages/MainPage/ui/MainPage.async';
import { ThemeContext } from './app/providers/ThemeProvider/lib/ThemeContext';

const App = () => {
  const { theme, toogleTheme } = UseTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toogleTheme}>TOOGLE</button>
      <Link to="/">Главная </Link>
      <Link to="/about">О сайте </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
