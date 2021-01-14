import React from "react";
import style from './App.module.css';
import Header from "./Header/Header";
import Main from "./MainBlock/Main";
import SkillBlock from "./Skills/SkillBlock";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Main/>
            <SkillBlock/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App;
