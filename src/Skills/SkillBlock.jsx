import React from "react";
import Skill from "./Skill/Skill";
import style from "./SkillBlock.module.scss"
import styleContainer from "../common/styles/container.module.css"
import Title from "../common/Components/Title";
import reactIco from "../common/pict/1200px-Font_Awesome_5_brands_react.svg.png";
import javaIco from "../common/pict/1_YWazhGyGmNs6K3HZE7lS7Q.png";
import typeIco from "../common/pict/typescriptnew.svg";

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

    return (
        <div className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"My Skills"}/>

                <div className={style.skills}>
                    <Skill style={jsIcon} value="JavaScript" discription={discription}/>
                    <Skill style={reactIcon} value="React" discription={discription}/>
                    <Skill style={tsIcon} value="TypeScript" discription={discription}/>
                </div>
            </div>
        </div>
    )
};

export default SkillBlock;