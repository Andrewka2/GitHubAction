import React from "react";
import classes from './nft_items_list.module.scss'
import { nft_items } from "../../config/nft_items";
import { NftItem } from "../NftItem";

function NftItemsList(){
    return (        
        <div className={classes.NftItemsList}>
            {
                nft_items.slice(4).map((elem, index)=>{
                    return <div key={`nft-item-${index}`} className={ index + 1 % 4 === 0 ? ` ${classes.nftItemList} ${classes.margin}` : `${classes.nftItemList}`}>
                        <NftItem img={elem.img} title={elem.title} text={elem.text} span_text={elem.span_text} likes_amount={elem.likes_amount}/>
                    </div> 
                })
            }
        </div>
    )
}

export default NftItemsList