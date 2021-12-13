import React from "react";
import classes from './item.module.scss'
import { Button } from "../Button";
import { ProtocolItemsInterface } from "../../config";

function Item({ marked, title, spanTitle, text, end_title }: ProtocolItemsInterface) {
    return (
        <>
            {
                marked ? <div className={classes.item_marked}>
                    <div className={classes.item_content}>
                        <div className={classes.item_title}>
                            <p>{title} <span>{spanTitle}</span> {end_title} </p>
                        </div>
                        <div className={classes.item_subtitle}>
                            <p>{text}</p>
                        </div>
                        <div className={classes.item_btn}>
                            <Button text={"Visit"}/>
                        </div>
                    </div>
                    <div className={classes.circle_1}>

                    </div>
                    <div className={classes.circle_2}>

                    </div>
                    <div className={classes.circle_3}>

                    </div>
                </div> : <div className={classes.item}>
                    <div className={classes.item_content}>
                        <div className={classes.item_title}>
                            <p>{title} <span>{spanTitle}</span></p>
                        </div>
                        <div className={classes.item_subtitle}>
                            <p>{text}</p>
                        </div>
                        <div className={classes.item_btn}>
                            <Button text={"Visit"}/>
                        </div>
                    </div>
                    <div className={classes.circle_1}>

                    </div>
                    <div className={classes.circle_2}>

                    </div>
                </div>
            }
        </>
    )
}

export default Item