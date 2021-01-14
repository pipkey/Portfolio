import React from "react";
import style from "./Footer.module.css"

const Footer =()=> {
    return(
        <div className={style.footer}>
            <h4 className={style.title}> Contacts </h4>
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