import React from "react";
import Button from "../../common/Components/Button";
import style from "./Project.module.scss"


const Project = (props) => {

    return (
        <div className={style.content}>
            <span className={style.about}>
                <h3>{props.nameBlock}</h3>               
                {props.about}
                <div className={style.btnBlock}>
                    <Button title="Watch" />
                    <Button title="Code" />
                </div>
            </span>
            <img src={props.picture} alt='alt' />
        </div>
    )
};

export default Project;