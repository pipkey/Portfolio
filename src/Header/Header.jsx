import React from "react";
import style from './Header.module.scss';
import Navbar from "../Navbar/Navbar";

function Header() {
    return (
        <div className={style.header}>
            <Navbar/>
        </div>
    );
}

export default Header;