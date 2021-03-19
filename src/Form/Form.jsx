import React from "react"
import style from "./Form.module.scss"
import Title from "../common/Components/Title";
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};


const Form = () => {


    return (
        <div className="bigDiv">
            {/*<Particles  className={style.particles} params={particlesOptions}/>*/}
            <div className={style.mainCont}>
                <Particles className={style.particles} params={particlesOptions}/>
                <Title title={"You can write me"}/>
                <Fade right>
                    <form className={style.inputAreas}>
                        <input className={style.inp} type="text" placeholder={"Enter your name"}/>
                        <input className={style.inp} type="text" placeholder={"Enter your phone"}/>
                        <input className={style.inp} type={"text"} placeholder={"Enter your Email"}/>

                        <button type="submit" className={style.btn}> Send</button>
                    </form>
                </Fade>

                <div className={style.free}>

                    <ReactTypingEffect text="I'm available for Freelance"/>

                </div>
            </div>
        </div>
    )
};


export default Form;