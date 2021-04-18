import React from "react";
import style from "./Footer.module.scss"
import Title from "../common/Components/Title";
import FB from "../common/pict/Facebook.png"
import inst from "../common/pict/instagram.png"
import telega from "../common/pict/telegram.png"
import linkedIN from "../common/pict/linkedIn.png"
import Fade from 'react-reveal/Fade';


const Footer = () => {


    return (
        <div id={"contacts"} className={style.footer}>
            <Title title={'Let’s Talk!'}/>
            <Fade right>
                <footer className={style.hrefs}>
                    {/* <button style={FaceIcon}> <a href="https://www.facebook.com/pil.kav.5"></a> </button>
                    <button style={instIcon}> </button>
                    <button style={tgIcon}> </button>
                    <button style={linkedicon}> </button> */}

                    <a href="https://www.facebook.com/pil.kav.5" target="blank">
                        <img src={FB} alt="facebook"/>
                    </a>
                    <a href="https://www.instagram.com/____p1p_key____/" target="blank">
                        <img src={inst} alt="instagram"/>
                    </a>
                    <a href="http://tele.click/@pipkey" target="blank">
                        <img src={telega} alt="telegram"/>
                    </a>
                    <a href="https://www.linkedin.com/in/philip-kamenkov-01bb19209/" target="blank">
                        <img src={linkedIN} alt="linkedIn"/>
                    </a>

                </footer>
            </Fade>
        </div>
    )
};

export default Footer;