import React from "react";
import style from "./Title.module.scss"

const Title = (props) => {
    return (
        <div className={style.title}>
            <span>{props.title}</span>
        </div>
    )
};

export default Title;