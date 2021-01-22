import React from "react"
import style from "./Form.module.css"
import container from "../common/styles/container.module.css"


const Form = () => {

    return (
        <div className="bigDiv">
            <div className={style.mainCont} >
                    <h3 className={style.title}>Form</h3>

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