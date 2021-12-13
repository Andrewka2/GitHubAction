import React from "react";
import classes from './nft_items.module.scss'
import { NftItemBtn } from "../NftItemBtn";
import { LikeIcon } from "../../UI/Svg";
import { Fire } from "../../UI/Svg";
import { NftItemsInterface } from "../../config";

function NftItem({ img, title, text, span_text, likes_amount, with_fire }: NftItemsInterface) {
    return (
        <div className={classes.NftItemWrapper}>
            <div className={classes.NftItem}>
                <div className={classes.nftItem_container}>
                    <div className={classes.nftItem_title}>
                        <p>{title}</p>
                    </div>
                    <div className={classes.nftItem_text}>
                        <p>{text.split(' ')[0]} <span>{span_text}</span> {text.split(' ')[1]}</p>
                    </div>
                    <div className={classes.item_content_cont}>
                        <div className={classes.item_content_btn}>
                            <NftItemBtn href={"/item-page"} text={"Place a bid"} />
                        </div>
                        <div className={classes.item_content_likes_container}>
                            <div className={classes.item_content_likes}>
                                <div className={classes.like_icon}>
                                    <LikeIcon />
                                </div>
                                <div className={classes.item_content_text}>
                                    <p>{likes_amount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.nft_item_img}>
                    <img src={require(`../../assets/images/nftItemsImgs/${img}.png`).default} alt={title} />
                </div>
                {
                    with_fire === true ? <div className={classes.nft_item_fire}>
                    <Fire />
                    </div> : <></>
                }
                
            </div>
        </div>
    )
}

export default NftItem