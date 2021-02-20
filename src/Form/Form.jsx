import React from "react"
import style from "./Form.module.css"
import container from "../common/styles/container.module.css"
import Title from "../common/Components/Title";


const Form = () => {

    return (
        <div className="bigDiv">
            <div className={style.mainCont} >
                    <Title title={"You can write me"}/>

                <div className={` ${style.inputAreas} ${container}`}>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <button className={style.btn}> Send</button>
                </div>


            </div>
        </div>
    )
};


export default Form;