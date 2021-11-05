import React from 'react';
import backgoundVideo from '../../assets/video/Moon.mp4';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div id="header" className={classes.wrapper}>
             <div className={classes.headerTitle}>
                <h1>Let’s start the journey together</h1>
                <h3>We turn your ideas into reality</h3>
                <button>Start now</button>
            </div>
            <div className={classes.backVideo}>
                <video className={classes.video} autoPlay="autoplay" loop="loop" muted>
                    <source src={backgoundVideo} type="video/mp4" />
                    Your browswer dose not suporte video tag
                </video>
            </div>
        </div>
    )
}

export default Header
