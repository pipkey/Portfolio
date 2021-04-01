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
import unitTest from "../common/pict/1_Rj3iVwEKZMiRhcEsjh45Kg.png";
import axiosLogo from "../common/pict/axiosLOGO.png";
import rest from "../common/pict/api-settings.png";
import story from "../common/pict/storyBlack.png";
import Particles from "react-particles-js";
import Fade from 'react-reveal/Fade';


const SkillBlock = () => {

    let reactIcon = {
        backgroundImage: `url( ${reactIco} )`,
    };
    let Axios = {
        backgroundImage: `url( ${axiosLogo} )`,
    };
    let RestAPI = {
        backgroundImage: `url( ${rest} )`,
    };
    let Storybook = {
        backgroundImage: `url( ${story} )`,
    };
    let UnitTests= {
        backgroundImage: `url( ${unitTest} )`,
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
        <div id={"skill"} className={style.skillsBlock}>
            <Particles className={style.particles} params={particlesOptions}/>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <Title title={"My Skills"}/>
                <Fade right>
                    <div className={style.skills}>
                        <Skill style={jsIcon} value="JavaScript" />
                        <Skill style={reactIcon} value="React" />
                        <Skill style={tsIcon} value="TypeScript" />
                        <Skill style={reduxXIcon} value="Redux" />
                        <Skill style={htmlIcon} value="HTML" />
                        <Skill style={MJIcon} value="Material UI"/>
                        <Skill style={Storybook} value="StoreBook"/>
                        <Skill style={RestAPI} value="Rest API"/>
                        <Skill style={Axios} value="Axios"/>
                        <Skill style={UnitTests} value="Unit tests"/>
                    </div>
                </Fade>
            </div>
        </div>
    )
};

export default SkillBlock;