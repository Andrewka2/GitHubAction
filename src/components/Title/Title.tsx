import React from "react";
import classes from './title.module.scss'

interface TitleInterface {
    text: string
}

function Title({ text }: TitleInterface) {
    return (
        <p className={classes.Title}>{text}</p>
    )
}

export default Title