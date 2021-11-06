import React from 'react';
import classes from './Singup.module.css';
import { Link as LinkR } from 'react-router-dom';

const Singup = () => {
    return (
        <div className={classes.wrapper}>
           <LinkR to="/home"  className={classes.back}> <i className="fas fa-chevron-left"></i> LaninTata</LinkR>
            <form id="singup-form" >
                <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter full name..." type="text" required />
                <label htmlFor="email">Email</label>
                <input name="email" placeholder="Enter email..." type="email" required />
                <label htmlFor="password">Password</label>
                <input name="password" autoComplete="false" placeholder="Enter password..." type="password" required />
                <label htmlFor="re-password">Re.password</label>
                <input name="re-password" autoComplete="false" placeholder="Retype password..." type="password" required />
                <button> Sing up</button>
            </form>
        </div>
    )
}

export default Singup
