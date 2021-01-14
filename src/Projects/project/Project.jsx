import React from "react";
import style from "./Project.module.css"

const Project = (props) => {
    return (
        <div className={style.proj}>
                <div className={style.icon}>img</div>
                <h3>{props.value}</h3>
                <span >
                    {props.text}
                </span>
        </div>
    )
};

export default Project;