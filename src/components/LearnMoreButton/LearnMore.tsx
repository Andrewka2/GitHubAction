import React from "react";
import classes from './learn_more.module.scss'
import { Exit } from "../../UI/Svg";

function LearnMoreButton() {
    return (
        <div className={classes.learn_more_btn}>
            <div className={classes.learn_more_btn_container}>
                <div className={classes.learn_more_text}>
                    <p>We use  </p>
                </div>
                <div className={classes.coockie}>
                    🍪
                </div>
                <div className={classes.learn_more_text}>
                    <p><span className={classes.learn}> Learn more</span></p>
                </div>
                <div className={classes.exit_btn}>
                    <Exit />
                </div>
            </div>
        </div>
    )
}

export default LearnMoreButton