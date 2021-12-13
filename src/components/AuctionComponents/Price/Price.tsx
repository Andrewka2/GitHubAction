import React from "react";
import classes from './price.module.scss'

function Price(){
    return (
        <div className={classes.Price}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>Price</p>
                </div>
                <div className={classes.content}>
                    <div className={classes.input_cont}>
                        <input placeholder={"Enter price for one piece"} type="text" />
                    </div>
                    <div className={classes.select_cont}>
                        <select name="" id="">
                            <option>ETH</option>
                        </select>
                    </div>
                </div>
                <div className={classes.price_text_cont}>
                    <div className={classes.price_text}>
                        <p>Service fee <span>2.5%</span></p>
                    </div>
                    <div className={classes.price_text}>
                        <p>You will receive <span>0 ETH</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price