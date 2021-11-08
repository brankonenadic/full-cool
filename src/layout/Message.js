import React from 'react';
import classes from './Message.module.css';
import Modal from '../components/ui/Modal';

const Message = (props) => {
    return (
        <Modal >
            <div className={classes.message}>
                <h1>Coming soon....</h1>
                <button onClick={props.onAbort}>Close</button>
            </div>
        </Modal>
    )
}

export default Message
