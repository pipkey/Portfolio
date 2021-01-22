import React from "react";
import style from "./Projects.module.css"
import Project from "./project/Project";
import styleContainer from "../common/styles/container.module.css"

const Projects = () => {

    let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque";

    return (
        <div className={style.projects}>

            <div className={style.pBlock}>

                <h3 className={style.title}>Projects</h3>

                <div className={`${styleContainer.container} ${style.projBlock}`}>
                    <Project value="todoList"
                             text={text}/>
                    <Project value="soushal"
                             text={text}/>
                    <Project value="portfolio"
                             text={text}/>
                </div>

            </div>

        </div>
    )
};

export default Projects;