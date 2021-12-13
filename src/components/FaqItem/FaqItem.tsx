import React, { useCallback, useState } from "react";
import classes from './faqitem.module.scss'
import { ToggleArrow } from "../../UI/Svg"
import main_page_img from '../../assets/images/faq/main_img.png'
import explore_img from '../../assets/images/faq/explore_img.png'
import { FaqItemsInterface } from "../../config";

function FaqItem({title}:FaqItemsInterface) {

    let [isOpen, setIsOpen] = useState(false)

    const handleClick = useCallback(() => {
        setIsOpen(isOpen => !isOpen);
    }, []);
    return (
        <div className={isOpen === true ? `${classes.content_item_container} ${classes.content_item_container_height}` : classes.content_item_container}>
            <div className={classes.content_item}>
                <div className={classes.text_item}>
                    <p>{title}</p>
                </div>
                <div onClick={handleClick} className={isOpen === true ? `${classes.hide_button_open} ${classes.hide_button}` : classes.hide_button}>
                    <ToggleArrow />
                </div>
            </div>

            <div className={isOpen === true ? `${classes.hide_text_block_cont} ${classes.hide_text_block_cont_visible}` : classes.hide_text_block_cont}>
                <div className={classes.hide_text_block_text}>
                    <p>On the home page of NFTone at https://nftone.net you can see Top users, Live auctions and the Explore section with recently added NFT collectibles. The “Log in” button at the top menu does not require you to insert personal details, however, it requires TronLink or an equivalent extension installed on your device.</p>
                </div>
                <div className={classes.hide_text_block_imgs_cont}>
                    <div className={classes.hiden_block_img}>
                        <img src={explore_img} alt="explore_img" />
                    </div>
                    <div className={classes.hiden_block_img}>
                        <img src={main_page_img} alt="main_page_img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqItem