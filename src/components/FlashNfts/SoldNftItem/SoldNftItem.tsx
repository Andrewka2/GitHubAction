import React, { useCallback, useState } from "react";
import classes from './sold_nft.module.scss'
import { Button } from "../../Button";
import flash_img from '../../../assets/images/flash/flash_img.png'

function SoldNftItem() {
    return (
        <div className={classes.sold_nft_item}>
                    <div className={classes.content_container}>
                        <div className={classes.token_name_block}>
                            <div className={classes.token_img}>
                                <img src={flash_img} alt="flash_img" />
                            </div>
                            <div className={classes.token_name_cont}>
                                <div className={classes.category_name}>
                                    <p>Token name</p>
                                </div>
                                <div className={classes.token_name}>
                                    <div className={classes.category_value}>
                                        <p>1. Series #2 Cosmic moby dick</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.selling_price_block}>
                            <div className={classes.category_name}>
                                <p>Selling price</p>
                            </div>
                            <div className={classes.selling_price}>
                                <div className={classes.category_value}>
                                    <p>0.55 BNB</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.return_pay_block}>
                            <div className={classes.category_name}>
                                <p>How much to pay for a return</p>
                            </div>
                            <div className={classes.return_pay}>
                                <div className={classes.category_value}>
                                    <p>0.66 BNB</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.return_block}>
                            <div className={classes.return_btn}>
                                <Button text={"Return"}/>
                            </div>
                            <div className={classes.timer}>
                                <div className={classes.number}>
                                    <p>05</p>
                                </div>
                                <div className={classes.dot}>

                                </div>
                                <div className={classes.number}>
                                    <p>12</p>
                                </div>
                                <div className={classes.dot}>

                                </div>
                                <div className={classes.number}>
                                    <p>05</p>
                                </div>
                                <div className={classes.dot}>

                                </div>
                                <div className={classes.number}>
                                    <p>32</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default SoldNftItem