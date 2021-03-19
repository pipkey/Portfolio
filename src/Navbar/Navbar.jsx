import React from "react";
import style from './Navbar.module.scss';
import { Link} from "react-scroll";


function Navbar() {
    return (
        <div className={style.navbar}>
            <Link
                activeClass={style.active}
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            > Main </Link>
            <Link
                activeClass={style.active}
                to="skill"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            > Skills </Link>
            <Link
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            > Projects </Link>

            <Link
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            > Contacts </Link>
        </div>
    );
}

export default Navbar;