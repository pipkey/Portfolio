import React from "react";
import style from "./Project.module.scss"

const Project = (props) => {
    return (
        <div className={style.proj}>

            <div style={props.style} className={style.imges}>
                    <button className={style.btn}> Watch</button>
            </div>

            <div className={style.value}>
                <span>
                    {props.value}
                </span>
            </div>

            <span className={style.text}>
                        {props.text}
                </span>
        </div>
    )
};

export default Project;