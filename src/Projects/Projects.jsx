import React from "react";
import style from "./Projects.module.css"
import Project from "./project/Project";
import styleContainer from "../common/styles/container.module.css"

const Projects = () => {
    return (
        <div className={style.projects}>

            <div className={style.pBlock}>

                <h3 className={style.title}>Projects</h3>

                <div className={`${styleContainer.container} ${style.projBlock}`}>
                    <Project value="todoList"
                             text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque"/>
                    <Project value="soushal"
                             text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque"/>
                    <Project value="portfolio"
                             text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque"/>
                </div>

            </div>

        </div>
    )
};

export default Projects;