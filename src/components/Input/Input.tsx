import React from "react";
import classes from './input.module.scss'

interface InputInterface {
    placeholder: string
}

function Input({placeholder}:InputInterface){
    return (
        <input placeholder={placeholder} className={classes.Input} type="text" />
    )
}

export default Input