import React, { useState, useEffect } from 'react'
import './App.css';
import { GlobalStyles } from './components/styles/Global.styled';
import { Header } from './components/styles/Header.styled'
import { Footer } from './components/styles/Footer.styled'
import Quotes from './components/Quotes';
import {
  ThemeContainer,
  ThemeButton,
} from "./components/styles/ThemeSwitching.styled";
import { ThemeProvider } from "styled-components";
import {
  light,
  dark,
  blue,
  green,
  brown,
  pink,
} from "./components/styles/Theme.styled";

function App() {

  const [selectedTheme, setSelectedTheme] = useState(light);

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  const themeToggler = (theme) => {
    setSelectedTheme(theme)
    localStorage.setItem("current-theme", JSON.stringify(theme));
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <GlobalStyles />
        <Header>Game of Thrones Quotes</Header>
        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton
            className={`light ${selectedTheme === light ? "active" : ""}`}
            onClick={() => themeToggler(light)}></ThemeButton>
          <ThemeButton
            className={`dark ${selectedTheme === dark ? "active" : ""}`}
            onClick={() => themeToggler(dark)}></ThemeButton>
          <ThemeButton
            className={`blue ${selectedTheme === blue ? "active" : ""}`}
            onClick={() => themeToggler(blue)}></ThemeButton>
          <ThemeButton
            className={`green ${selectedTheme === green ? "active" : ""}`}
            onClick={() => themeToggler(green)}></ThemeButton>
          <ThemeButton
            className={`brown ${selectedTheme === brown ? "active" : ""}`}
            onClick={() => themeToggler(brown)}></ThemeButton>
          <ThemeButton
            className={`pink ${selectedTheme === pink ? "active" : ""}`}
            onClick={() => themeToggler(pink)}></ThemeButton>
        </ThemeContainer>
        <Quotes />
        <Footer>
          <p>
            Made with love by <a href="https://github.com/maxtimoshin">Max</a>
          </p>
        </Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
