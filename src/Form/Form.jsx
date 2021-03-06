import React from "react"
import style from "./Form.module.scss"
import Title from "../common/Components/Title";


const Form = () => {



    return (
        <div className="bigDiv">
            <div  className={style.mainCont}>
                <Title title={"You can write me"}/>
                <div className={style.inputAreas}>
                    <input className={style.inp} type="text" placeholder={"Enter your name"}/>
                    <input className={style.inp} type="text" placeholder={"Enter your phone"}/>
                    <input className={style.inp} type={"text"} placeholder={"Enter your Email"}/>

                    <button className={style.btn}> Send</button>
                </div>


                <div className={style.free}>I'm available for Freelance</div>
            </div>
        </div>
    )
};


export default Form;