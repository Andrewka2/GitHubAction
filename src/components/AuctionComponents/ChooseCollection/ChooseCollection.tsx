import React from "react";
import classes from './choose_collection.module.scss'
import { PlusIcon } from "../../../UI/Svg";

function ChooseCollection(){
    return (
        <div className={classes.ChooseCollection}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>Choose collection</p>
                </div>
                <div className={classes.text}>
                    <p>Enter price to allow users instantly purchase your NFT</p>
                </div>
                <div className={classes.item}>
                    <div className={classes.item_content}>
                        <div className={classes.item_img}>
                           <p><PlusIcon/></p>
                        </div>
                        <div className={classes.item_text}>
                            <p>Create</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseCollection