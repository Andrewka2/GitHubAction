import React, { useCallback, useState } from "react";
import classes from './sell_block.module.scss'
import { Button } from "../../Button";

function SellBlock() {
    return (
        <div className={classes.SellBlock}>
            <div className={classes.container}>
                <div className={classes.text}>
                    <p>Sell your NFT and go to farming</p>
                </div>
                <div className={classes.sell_btn}>
                    <Button text={"sell"}/>
                </div>
            </div>
        </div>
    )
}

export default SellBlock