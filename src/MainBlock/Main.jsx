import React from "react";
import style from "./Main.module.scss"
import styleContainer from "../common/styles/container.module.css"
import avatar from "./../assets/img/myPhoto.jpg"

const Main = () => {

    const MyPhoto = {
        backgroundImage: `url( ${avatar} )`,
    };

    return (
        <div className={style.main} style={MyPhoto}>
            <div className={styleContainer.container}>

                <div className={style.text}>
                    <span>I'm Phil Kamenkov - Frontend Developer</span>
                    {/*<h1>My name is <br/>*/}
                    {/*    Philip Kamenkov</h1>*/}
                    {/*<p> and I FRONTEND - DEVELOPER </p>*/}
                </div>
            </div>
        </div>
    )
};


export default Main;