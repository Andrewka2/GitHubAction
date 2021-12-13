import React from "react";
import classes from './royalties.module.scss'
import { Input } from "../../Input";
import { NftItemBtn } from "../../NftItemBtn";

function Royalties(){
    return (
        <div className={classes.Royalties}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>Royalties</p>
                </div>
                <div className={classes.input}>
                    <Input placeholder={`10`}/>
                </div>
                <div className={classes.text}>
                    <p>Suggested: 0%, 10%, 20%, 30%. Maximum is 50%</p>
                </div>
                <div className={classes.btn}>
                    <NftItemBtn text={"Show advanced settings"}/>
                </div>
            </div>
        </div>
    )
}

export default Royalties