import React from "react";
import Skill from "./Skill/Skill";
import style from "./SkillBlock.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Title from "../common/Components/Title";
import reactIco from "../common/pict/1200px-Font_Awesome_5_brands_react.svg.png";
import javaIco from "../common/pict/1_YWazhGyGmNs6K3HZE7lS7Q.png";
import typeIco from "../common/pict/typescriptnew.svg";
import reduxIco from "../common/pict/redux.png";
import HTmllIco from "../common/pict/html-five.png";
import materialIco from "../common/pict/material-ui-1.png";
import Particles from "react-particles-js";
import Fade from 'react-reveal/Fade';


const SkillBlock = () => {
    let discription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus, molestias minima voluptates voluptas ad quae sunt consequuntur amet itaque";

    let reactIcon = {
        backgroundImage: `url( ${reactIco} )`,
    };
    let tsIcon = {
        backgroundImage: `url( ${typeIco} )`,
    };
    let jsIcon = {
        backgroundImage: `url( ${javaIco} )`,
    };
    let reduxXIcon = {
        backgroundImage: `url( ${reduxIco} )`,
    };
    let htmlIcon = {
        backgroundImage: `url( ${HTmllIco} )`,
    };
    let MJIcon = {
        backgroundImage: `url( ${materialIco} )`,
    };
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

    return (
        <div className={style.skillsBlock}>
            <Particles className={style.particles} params={particlesOptions}/>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <Title title={"My Skills"}/>
                <Fade right>
                    <div className={style.skills}>
                        <Skill style={jsIcon} value="JavaScript" discription={discription}/>
                        <Skill style={reactIcon} value="React" discription={discription}/>
                        <Skill style={tsIcon} value="TypeScript" discription={discription}/>
                        <Skill style={reduxXIcon} value="Redux" discription={discription}/>
                        <Skill style={htmlIcon} value="HTML" discription={discription}/>
                        <Skill style={MJIcon} value="Material UI" discription={discription}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
};

export default SkillBlock;