import React from "react";
import style from "./Projects.module.scss"
import Project from "./project/Project";
import styleContainer from "../common/styles/container.module.css"
import Title from "../common/Components/Title";
import todoListimg from "./../assets/img/todos.jpg"
import portfolioimg from "./../assets/img/portfolio.png"
import socImg from "./../assets/img/social-network.jpg"
import Fade from 'react-reveal/Fade';


const Projects = () => {

    let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaqueLorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque";
    let text2 = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt itaque";


    let todoList = {
        backgroundImage: `url( ${todoListimg} )`,
    };
    let samWay = {
        backgroundImage: `url( ${socImg} )`,
    };
    let portfolio = {
        backgroundImage: `url( ${portfolioimg} )`,
    };


    return (
        <div className={style.projects}>

            <div className={style.pBlock}>

                <Title title={"Introduce My Projects"}/>
                <Fade right>
                    <div className={`${styleContainer.container} ${style.projBlock}`}>
                        <Project
                            style={todoList}
                            value="TODOLIST"
                            text={text}/>
                        <Project
                            style={samWay}
                            value="SOCIAL"
                            text={text2}/>
                        <Project
                            style={portfolio}
                            value="PORTFOLIO"
                            text={text}/>
                    </div>
                </Fade>
            </div>

        </div>
    )
};

export default Projects;