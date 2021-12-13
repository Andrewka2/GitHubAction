import React from "react";
import classes from './toggle.module.scss'

function ToggleBtn() {
    return (
        <div className={classes.toggle_btn_cont}>
        <label className={classes.switch}>
            <input type="checkbox"/>
            <span className={`${classes.slider} ${classes.round}`}></span>
        </label>
    </div>
    )
}

export default ToggleBtn