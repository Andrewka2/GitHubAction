import React from "react";
import classes from './unlock.module.scss'
import { ToggleBtn } from "../../ToggleBtn";

function Unlock() {
    return (
        <div className={classes.Unlock}>
            <div className={classes.container}>
                <div className={classes.text_content}>
                    <div className={classes.title}>
                        <p>Unlock once purchased</p>
                    </div>
                </div>
                <div className={classes.toggle_btn}>
                    <ToggleBtn />
                </div>
            </div>
            <div className={classes.text}>
                <p>Content will be unlocked after successful transaction</p>
            </div>
        </div>
    )
}

export default Unlock