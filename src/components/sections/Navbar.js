import React from 'react';
import classes from './Navbar.module.css';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div className={classes.navConteiner}>
                <LinkR to="/home" className={classes.navLogo}>LaninTata</LinkR>

                <div className={classes.menuIcon}><i className="fas fa-bars"></i></div>
                <ul className={classes.navList}>
                    <li className={classes.navListItem}><LinkS className={classes.navLinkS} to="header">Link1</LinkS></li>
                    <li className={classes.navListItem}><LinkS className={classes.navLinkS} to="header">Link2</LinkS></li>
                    <li className={classes.navListItem}><LinkS className={classes.navLinkS} to="header">Link3</LinkS></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
