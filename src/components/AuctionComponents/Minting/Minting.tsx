import React from "react";
import classes from './minting.module.scss'
import { ToggleBtn } from "../../ToggleBtn"
import { QestionIcon } from "../../../UI/Svg";

function Minting(){
    return (
        <div className={classes.Minting}>
            <div className={classes.container}>
                <div className={classes.text_content}>
                    <div className={classes.title}>
                        <div className={classes.title_text}>
                            <p>Free minting</p> 
                        </div>
                        <div className={classes.title_img}>
                            <QestionIcon/>
                        </div>
                    </div>
                    <div className={classes.text}>
                        <p>Buyer will pay gas fees for minting</p>
                    </div>
                </div>
                <div className={classes.toggle_btn}>
                    <ToggleBtn/>
                </div>
            </div>
        </div>
    )
}

export default Minting