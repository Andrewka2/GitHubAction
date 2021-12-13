import React, { useCallback, useState } from "react";
import classes from './sell_nft.module.scss'
import { SellBlock } from "../SellBlock";
import { Title } from "../../Title";
import { SoldNftItem } from "../SoldNftItem";

function SellNft() {
    return (
        <div className={classes.SellNftContainer}>
            <div className={classes.sell_block_cont}>
                <SellBlock/>
            </div>
            <div className={classes.title}>
                <Title text={"List of sold nft"}/>  
            </div>
            <div className={classes.sold_nft_items_cont}>
                <SoldNftItem/>
            </div>
        </div>
    )
}

export default SellNft