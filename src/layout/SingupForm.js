import React from 'react';
import classes from './SingupForm.modul.css';
import Modal from '../components/ui/Modal';

const SingupForm = (props) => {
    return (
        <Modal>
            <div className={classes.wrapper}>
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
                <button id="close" onClick={props.onClose}>Close</button>
                </div>
        </Modal>
    )
}

export default SingupForm;