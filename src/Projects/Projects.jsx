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

    let Social =
        <p>
            <h4>What was used:</h4>
            React, TypeScript, redux, redux-thunk, module CSS, redux-form, HOC, axios, connect, classes
        </p>
    let port =
        <p>
            <h4>What was used:</h4>
                React, JavaScript, module CSS, <br />
                SCSS, form
        </p>
    let todo = 
    <p> 
        <h4>What was used:</h4>
    React, TypeScript, redux, redux-thunk, module CSS, redux-form, React.memo, hooks, axios, Material-UI
</p>

    return (
        <div id="projects" className={style.projects}>

            <div className={style.pBlock}>
                <Title title={"Introduce My Projects"} />
                <Fade right>
                    <div className={`${styleContainer.container} ${style.projBlock}`}>
                        <Project
                            nameBlock={"TODOLIST"}
                            picture={todoListimg}
                            about={todo}
                        />
                        <Project
                            nameBlock={"PORTFOLIO"}
                            picture={portfolioimg}
                            about={port}
                        />
                        <Project
                            nameBlock={"SOCIAL"}
                            picture={socImg}
                            about={Social}
                        />
                    </div>
                </Fade>
            </div>

        </div>
    )
};

export default Projects;


