import React from "react";
import classes from './hide_title.module.scss'

interface HideTitleInterface {
    text: string
}

function HideTitle({text}:HideTitleInterface){
    return (
        <p className={classes.hide_title}>{text}</p>
    )
}

export default HideTitle