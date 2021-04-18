import React from "react"
import style from "./Button.module.scss"


const Button = (props) => {
    return (
        <div>
            <button className={style.btn} >
                {props.title}
            </button>
        </div>
    )
}

export default Button;