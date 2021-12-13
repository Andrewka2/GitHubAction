import React from "react";
import classes from './title.module.scss'
import { Input } from "../../Input";

function AuctionTitle(){
    return (
        <div className={classes.AuctionTitle}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>Title</p>
                </div>
                <div className={classes.text}>
                    <Input placeholder={`e. g. "Redeemable T-Shirt with logo"`}/>
                </div>
            </div>
        </div>
    )
}

export default AuctionTitle