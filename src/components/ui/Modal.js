import React from 'react';
import classes from './Modal.module.css';


const Backdrop = (props) => {
    return (
<div className={classes.backdrop}></div>
    );
}
const Modaloverlay = (props) => {
    return (
<div className={classes.modal}></div>
    );
}
const Modal = (props) => {
    return (
        <div>
            
        </div>
    )
}

export default Modal
