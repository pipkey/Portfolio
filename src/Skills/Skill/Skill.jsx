import React from "react";
import style from "./Skill.module.scss"

const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} >img</div>
            <h3>{props.value}</h3>
            <span className={style.discription}>
                {props.discription}
            </span>
        </div>
    )
};

export default Skill;