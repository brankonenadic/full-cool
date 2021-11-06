import React from 'react';
import classes from './Singup.module.css';
import { Link as LinkR } from 'react-router-dom';

const Singup = () => {
    return (
        <div className={classes.wrapper}>
            <LinkR to="/home" className={classes.back}> <i className="fas fa-chevron-left"></i> LaninTata</LinkR>
            <form id="singup-form" className={classes.singup}>
                <label className={classes.singuplabel} htmlFor="name">Full Name</label>
                <input className={classes.singupinput} name="name" placeholder="Enter full name..." type="text" required />
                <label className={classes.singuplabel} htmlFor="email">Email</label>
                <input className={classes.singupinput} name="email" placeholder="Enter email..." type="email" required />
                <label className={classes.singuplabel} htmlFor="password">Password</label>
                <input className={classes.singupinput} name="password" autoComplete="false" placeholder="Enter password..." type="password" required />
                <label className={classes.singuplabel} htmlFor="re-password">Re-password</label>
                <input className={classes.singupinput} name="re-password" autoComplete="false" placeholder="Retype password..." type="password" required />
                <button className={classes.singupbutton}> Sing up</button>
            </form>
        </div>
    )
}

export default Singup
