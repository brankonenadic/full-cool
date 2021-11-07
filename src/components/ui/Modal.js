import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import classes from './Modal.module.css';
import reactDom from 'react-dom';

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
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />), portalElement}
            {ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>), portalElement}
        </Fragment>
    );
}

export default Modal
