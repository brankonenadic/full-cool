import React from 'react';
import Modal from '../components/ui/Modal';


const SinginForm = () => {
    return (
        <Modal>
            <div id="wrapper">
                <form id="singin-form" className={classes.singup}>
                    <label className={classes.singuplabel} htmlFor="email">Email</label>
                    <input className={classes.singupinput} name="email" placeholder="Enter email..." type="email" required />
                    <label className={classes.singuplabel} htmlFor="password">Password</label>
                    <input className={classes.singupinput} name="password" autoComplete="false" placeholder="Enter password..." type="password" required />
                    <button className={classes.singupbutton}> Sing in</button>
                </form>
                <button className={classes.close} onClick={props.onClose}>Close</button>
                </div>
        </Modal>
    )
}

export default SinginForm
