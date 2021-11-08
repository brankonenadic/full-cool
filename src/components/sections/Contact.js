import React from 'react';
import classes from './Contact.module.css';

const Contact = () => {
    const submiHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div id="contact" className={classes.contactWrapper}>
            <div className={classes.leftSide}>
                <address>
                    <strong>LaninTata</strong>
                    <p>Azize Šačirbegović 12</p>
                    <p>Sarajevo, 71000</p>
                    <p> <i className="fa fa-fw fa-phone" aria-hidden="true"></i><span>Telephone:</span> <a href="tel:+38761819174">(061) 819-174</a></p>
                    <p> <i className="fa fa-fw fa-inbox" aria-hidden="true"></i><span>Mail:</span> <a href="mailto:lanintata.dev@gmail.com">lanintata.dev@gmail.com</a></p>
                </address>
            </div>
            <siv className={classes.rightSide}>
                <form className={classes.contactform} onSubmit={submiHandler}>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" required />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email..." type="email" required />
                    <label htmlFor="message">Message</label>
                    <textarea
                        placeholder="Enter message..."
                        name="message"
                        required
                    ></textarea>
                    <button> Send Message</button>
                </form>
            </siv>
        </div>
    )
}

export default Contact
