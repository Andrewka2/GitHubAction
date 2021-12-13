import React from "react";
import classes from './main_image.module.scss'
import { LearnMoreButton } from "../../LearnMoreButton";
import img_item from '../../../assets/images/itemPages/img_item.png'

function MainImage() {
    return (
        <div className={classes.item_page_img_wrapper}>
            <div className={classes.item_page_img_block}>
                <div className={classes.item_page_img_container}>
                    <img src={img_item} alt="img_item" />
                </div>
            </div>
            <div className={classes.learn_more_btn}>
                <LearnMoreButton />
            </div>
        </div>
    )
}

export default MainImage