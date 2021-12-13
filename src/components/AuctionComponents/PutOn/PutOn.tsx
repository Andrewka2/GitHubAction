import React from "react";
import classes from './put_on.module.scss'
import { Bids, PutOnIcon } from "../../../UI/Svg";
import { TimeIcon } from "../../../UI/Svg";
import { ToggleBtn } from "../../ToggleBtn";

function PutOn() {
    return (
        <div className={classes.PutOn}>
            <div className={classes.container}>
                <div className={classes.item_header_cont}>
                    <div className={classes.item_header_text}>
                        <div className={classes.title}>
                            <p>Put on marketplace</p>
                        </div>
                    </div>
                    <div className={classes.toggle_btn_cont}>
                        <ToggleBtn/>
                    </div>
                </div>
                <div className={classes.text}>
                            <p>Enter price to allow users instantly purchase your NFT</p>
                        </div>
                <div className={classes.content}>
                    <div className={classes.item}>
                        <label htmlFor="price">
                            <input type="radio" name="put-on" id="price" />
                            <div className={classes.shadow}>
                                <div className={classes.item_wrapper}>
                                    <div className={classes.item_cont}>
                                        <div className={classes.item_img}>
                                            <PutOnIcon />
                                        </div>
                                        <div className={classes.item_text}>
                                            <p>Fixed price</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className={classes.item}>
                        <label htmlFor="time">
                            <input type="radio" name="put-on" id="time" />
                            <div className={classes.shadow}>
                                <div className={classes.item_wrapper}>
                                    <div className={classes.item_cont}>
                                        <div className={classes.item_img}>
                                            <TimeIcon />
                                        </div>
                                        <div className={classes.item_text}>
                                            <p>Timed auction</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className={classes.item}>
                        <label htmlFor="bids">
                            <input type="radio" name="put-on" id="bids" />
                            <div className={classes.shadow}>
                                <div className={classes.item_wrapper}>
                                    <div className={classes.bids_item_cont}>
                                        <div className={classes.item_img}>
                                            <Bids />
                                        </div>
                                        <div className={classes.item_text}>
                                            <p>Open for bids</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PutOn