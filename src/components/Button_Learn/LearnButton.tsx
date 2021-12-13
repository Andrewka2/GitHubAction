import React from "react";
import classes from './learn_btn.module.scss'

interface ButtonInterface {
    text: string,
    link?: boolean,
    href?: string,
    whiteList?: boolean
}

function LearnButton({text, link, whiteList, href}:ButtonInterface){
    return (
        <>
            {
                link === true ? <a target="_blank" className={ whiteList ? `${classes.flash_link} ${classes.whiteList}` : classes.flash_link} rel="noreferrer" href={href}>{text}</a> : <button className={whiteList ? `${classes.LearnBtn} ${classes.whiteList}` : classes.LearnBtn}>{text}</button>
            }
        </>
    )
}

export default LearnButton