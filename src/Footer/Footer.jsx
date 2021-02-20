import React from "react";
import style from "./Footer.module.css"
import Title from "../common/Components/Title";

const Footer =()=> {
    return(
        <div className={style.footer}>
            <Title title={'Let’s Talk!'}/>
            <div className={style.hrefs}>
                <span>vk</span>
                <hr/>
                <span>Inst</span>
                <hr/>
                <span>TG</span>
                <hr/>
                <span>twitter</span>
            </div>
        </div>
    )
};

export default Footer;