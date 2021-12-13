import React from "react";
import classes from './nft_item_btn.module.scss'

interface NftItemBtnInterface {
    text: string,
    href?: string
} 

function NftItemBtn({text, href}:NftItemBtnInterface) {
    return (
        <a href={href} className={classes.NftItemBtn}>{text}</a>
    )
}

export default NftItemBtn