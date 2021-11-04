import React, { useState } from 'react';
import classes from './Navbar.module.css';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';


const Navbar = () => {
    const [openMenu, setopenMenu] = useState(false);

    const openMenuHandler = () => {
        setopenMenu(true);
    }
    const closeMenuHandler = () => {
        setopenMenu(false);
    }
    let iconMenu = !openMenu ? <i onClick={openMenuHandler} className="fas fa-bars"></i> : <i onClick={closeMenuHandler} className="fas fa-times"></i>;
    return (
        <div className={classes.nav}>
            <div className={classes.navConteiner}>
                <LinkR to="/home" className={classes.navLogo}>LaninTata</LinkR>

                <div className={classes.menuIcon}>{iconMenu}</div>
                <ul className={classes.navList}>
                    <li className={classes.navListItem}><LinkS className={classes.navLinkS} to="header">Link1</LinkS></li>
                    <li className={classes.navListItem}><LinkS className={classes.navLinkS} to="header">Link2</LinkS></li>
                    <li className={classes.navListItem}><LinkS className={classes.navLinkS} to="header">Link3</LinkS></li>
                </ul>
                <div className={classes.navBtn}>
                    <LinkR to="/sing-up" className={classes.navBtnLink}>Sing up</LinkR>
                </div>
            </div>
        </div>
    )
}

export default Navbar
