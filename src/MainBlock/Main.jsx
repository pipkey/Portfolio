import React from "react";
import style from "./Main.module.scss"
import styleContainer from "../common/styles/container.module.css"
import wall from "./../assets/img/wall.jpg"

const Main = () => {

    const bgTextures = {
        backgroundImage: `url( ${wall} )`,
    };

    return (
        <div className={style.main} style={bgTextures}>
            <div className={styleContainer.container}>
                <div className={style.text}>I'm Philip Kamenkov -
                    <br/>
                    Frontend Developer</div>
            </div>
        </div>
    )
};


export default Main;