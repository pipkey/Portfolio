import React from "react";
import style from "./Main.module.scss"
import wall from "./../assets/img/wall.jpg"
import ReactTypingEffect from 'react-typing-effect';
import myPhoto from '../assets/img/vXJ8pceZqtE.jpg'

const Main = () => {

    const bgTextures = {
        backgroundImage: `url( ${wall} )`,
    };

    return (
        <div id={"main"} className={style.main} style={bgTextures}>

            <div className={style.myName}>
                <div className={style.specText}>
                    <ReactTypingEffect text={["Hi there", "Nice to meet you"]} typingDelay={1000} cursor="!"
                        speed={400} />
                </div>
                <div className={style.text}>
                    I'm Philip Kamenkov -
                    <br />
                    Frontend Developer
                </div>
            </div>
            <div className={style.img}>
                <img className={style.photo} src={myPhoto} alt="picture" />
            </div>
        </div>
    )
};


export default Main;