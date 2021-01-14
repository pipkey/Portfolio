import React from "react";
import Skill from "./Skill/Skill";
import style from "./SkillBlock.module.css"
import styleContainer from "../common/styles/container.module.css"

const SkillBlock = () => {
    return (
        <div className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill value="JavaScript" discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque"/>
                    <Skill value="TypeScript" discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque"/>
                    <Skill value="React" discription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque"/>
                </div>
            </div>
        </div>
    )
};

export default SkillBlock;