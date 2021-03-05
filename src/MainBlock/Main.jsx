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
                    <div>
                        <div className={style.prevName}>
                            <div className={style.letter}> I </div>
                            <div className={style.letter}> ' </div>
                            <div className={style.letter}> m </div>
                        </div>
                        <div className={style.prevName}>
                            <div className={style.letter}>P</div>
                            <div className={style.letter}>h</div>
                            <div className={style.letter}>i</div>
                            <div className={style.letter}>l</div>
                        </div>
                        <div className={style.prevName}>
                            <div className={style.letter}>K</div>
                            <div className={style.letter}>a</div>
                            <div className={style.letter}>m</div>
                            <div className={style.letter}>e</div>
                            <div className={style.letter}>n</div>
                            <div className={style.letter}>k</div>
                            <div className={style.letter}>o</div>
                            <div className={style.letter}>v</div>
                        </div>
                        <div className={style.prevName}>
                            <div className={style.letter}>-</div>
                        </div>
                    </div>
                    {/*2 block*/}
                    <div>
                        <div className={style.prevName}>
                            <div className={style.letter}>F</div>
                            <div className={style.letter}>r</div>
                            <div className={style.letter}>o</div>
                            <div className={style.letter}>n</div>
                            <div className={style.letter}>t</div>
                            <div className={style.letter}>e</div>
                            <div className={style.letter}>n</div>
                            <div className={style.letter}>d</div>
                        </div>
                        <div className={style.prevName}>
                            <div className={style.letter}>D</div>
                            <div className={style.letter}>e</div>
                            <div className={style.letter}>v</div>
                            <div className={style.letter}>e</div>
                            <div className={style.letter}>l</div>
                            <div className={style.letter}>o</div>
                            <div className={style.letter}>p</div>
                            <div className={style.letter}>e</div>
                            <div className={style.letter}>r</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
};


export default Main;