import React from "react";
import style from "./Footer.module.scss"
import Title from "../common/Components/Title";
import vk from "../common/pict/vkontacte.png"
import inst from "../common/pict/instagram.png"
import telega from "../common/pict/telegram.png"
import twit from "../common/pict/twittew.png"


const Footer = () => {

    let vkIcon = {
        backgroundImage: `url( ${vk} )`,
    };
    let instIcon = {
        backgroundImage: `url( ${inst} )`,
    };let tgIcon = {
        backgroundImage: `url( ${telega} )`,
    };let twitIcon = {
        backgroundImage: `url( ${twit} )`,
    };

    return (
        <div className={style.footer}>
            <Title title={'Let’s Talk!'}/>
            <div className={style.hrefs}>
                <button style={vkIcon}> </button>
                <button style={instIcon}> </button>
                <button style={tgIcon}> </button>
                <button style={twitIcon}> </button>
                {/*<span>vk</span>*/}
                {/*<hr/>*/}
                {/*<span>Inst</span>*/}
                {/*<hr/>*/}
                {/*<span>TG</span>*/}
                {/*<hr/>*/}
                {/*<span>twitter</span>*/}
            </div>
        </div>
    )
};

export default Footer;