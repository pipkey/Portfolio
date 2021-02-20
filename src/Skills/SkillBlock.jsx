import React from "react";
import Skill from "./Skill/Skill";
import style from "./SkillBlock.module.css"
import styleContainer from "../common/styles/container.module.css"
import Title from "../common/Components/Title";

const SkillBlock = () => {
    let discription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque";
    return (
        <div className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"My Skills"}/>

                <div className={style.skills}>
                    <Skill value="JavaScript" discription={discription}/>
                    <Skill value="TypeScript" discription={discription}/>
                    <Skill value="React" discription={discription}/>
                </div>
            </div>
        </div>
    )
};

export default SkillBlock;