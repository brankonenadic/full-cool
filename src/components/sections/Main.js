import React from 'react';
import classes from './Main.module.css';

const Main = () => {
    return (
        <div id="main" className={classes.main}>
            <h2>Some Title</h2>
            <div className={classes.mainContainer}>
                <div className={classes.card}>
                    <h3>Some Subtitle</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab illo voluptatibus reprehenderit corrupti eius libero temporibus blanditiis ipsum quam asperiores, voluptates vitae numquam architecto labore minus maiores corporis culpa ratione.
                    </p>
                </div>
                <div className={classes.card}>
                    <h3>Some Subtitle</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab illo voluptatibus reprehenderit corrupti eius libero temporibus blanditiis ipsum quam asperiores, voluptates vitae numquam architecto labore minus maiores corporis culpa ratione.
                    </p>
                </div>
                <div className={classes.card}>
                    <h3>Some Subtitle</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab illo voluptatibus reprehenderit corrupti eius libero temporibus blanditiis ipsum quam asperiores, voluptates vitae numquam architecto labore minus maiores corporis culpa ratione.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
