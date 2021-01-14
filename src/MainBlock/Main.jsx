import React from "react";
import style from "./Main.module.css"
import styleContainer from "../common/styles/container.module.css"

const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>

                <div className={style.text}>
                    <span>Hi, there</span>
                    <h1>My name is <br/>
                        Philip Kamenkov</h1>
                    <p> and I FRONTEND - DEVELOPER </p>
                </div>

                <div className={style.photo}>

                </div>

            </div>
        </div>
    )
};


export default Main;