import React, { useState } from 'react';
import classes from './Navbar.module.css';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { Fragment } from 'react/cjs/react.production.min';


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
        <Fragment>
            <div className={classes.nav}>
                <div className={classes.navConteiner}>
                    <LinkR onClick={closeMenuHandler} to="/home" className={classes.navLogo}>LaninTata</LinkR>

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
            {openMenu && <div className={classes.mobileMenu}>
                <ul className={classes.mobileMenuList}>
                    <li className={classes.mobileMenuli}><LinkS className={classes.mobileMenuItem} onClick={closeMenuHandler} to="header">Link1</LinkS></li>
                    <li className={classes.mobileMenuli}><LinkS className={classes.mobileMenuItem} onClick={closeMenuHandler} to="header">Link2</LinkS></li>
                    <li className={classes.mobileMenuli}><LinkS className={classes.mobileMenuItem} onClick={closeMenuHandler} to="header">Link3</LinkS></li>
                </ul>
                <div className={classes.mobileMenuList}><LinkR onClick={closeMenuHandler} to="/sing-up" className={classes.mobileBtn}>Sing up</LinkR></div>
            </div>}
        </Fragment>
    )
}

export default Navbar
