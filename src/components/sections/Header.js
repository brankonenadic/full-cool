import React from 'react';
import backgoundVideo from '../../assets/video/Moon.mp4';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.wrapper}>
        <div className={classes.backVideo}>
            <video className={classes.video} autoPlay="autoplay" loop="loop" muted>
                <source src={backgoundVideo} type="video/mp4" />
                Your browswer dose not suporte video tag
            </video>
            <p>NEKI TEXT</p>
        </div>
        <h1>NEKI TEXT</h1>
        </div>
    )
}

export default Header
