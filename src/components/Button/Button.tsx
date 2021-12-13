import React from "react";
import classes from './button.module.scss'

interface ButtonInterface {
    text: string
}

function Button({text}: ButtonInterface){
    return (
        <button className={classes.btn}>{text}</button>
    )
}

export default Button