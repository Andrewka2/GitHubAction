import React, {useState, useCallback} from "react";
import classes from './auction.module.scss'
import { HeaderNavBar } from "../../components/HeaderNavBar";
import { HideTitle } from "../../components/HideTitle";
import { Title } from "../../components/Title";
import { UploadFile } from "../../components/AuctionComponents/UploadFile";
import { PutOn } from "../../components/AuctionComponents/PutOn";
import { Price } from "../../components/AuctionComponents/Price";
import { Unlock } from "../../components/AuctionComponents/Unlock";
import { ChooseCollection } from "../../components/AuctionComponents/ChooseCollection";
import { Minting } from "../../components/AuctionComponents/Minting";
import { AuctionTitle } from "../../components/AuctionComponents/Title";
import { Description } from "../../components/AuctionComponents/Description";
import { Royalties } from "../../components/AuctionComponents/Royalties";
import { Button } from "../../components/Button";
import { QestionIcon } from "../../UI/Svg";
import { Footer } from "../../components/Footer";
import { PrewievItem } from "../../components/AuctionComponents/PrewievItem";
import { NavBarMobile } from "../../components/Mobile_Nav";
import { navbar } from "../../config";

function CreateAuction() {
    let [isOpen, setIsOpen] = useState<boolean>(false)

    const navigationHandler = useCallback(() => {
        setIsOpen(isOpen => !isOpen);
    }, []);
    return (
        <div className={classes.Auction}>
            {
                isOpen ? <div className={classes.mobile_navigation}>
                    <NavBarMobile navbar={navbar}/>
                    <div onClick={navigationHandler} className={classes.exit}>
                        <p>x</p>
                    </div>
                </div> : <></>
            }
            <div className={classes.container}>
                <div className={classes.header_container}>
                    <div className={classes.navbar}>
                        <HeaderNavBar openHandler={navigationHandler} withBtn={true}/>
                    </div>
                    <div className={classes.hide_title}>
                        <HideTitle text={"Create auction"}/>
                    </div>
                    <div className={classes.title}>
                        <Title text={"Create single collectible"}/>
                    </div>

                </div> 
                <div className={classes.content_container}>
                    <div className={classes.content_items_cont}>
                        <div className={classes.content_item}>
                            <UploadFile/>
                        </div>
                        <div className={classes.content_item}>
                            <PutOn/>
                        </div >
                        <div className={classes.content_item}>
                            <Price/>
                        </div>
                        <div className={classes.content_item}>
                            <Unlock/>
                        </div>
                        <div className={classes.content_item}>
                            <ChooseCollection/>
                        </div>
                        <div className={classes.content_item}>
                            <Minting/>
                        </div>
                        <div className={classes.content_item}>
                            <AuctionTitle/>
                        </div>
                        <div className={classes.content_item}>
                            <Description/>
                        </div>
                        <div className={classes.content_item}>
                            <Royalties/>
                        </div>
                    </div>
                    <div className={classes.content_prewiev}>
                        <PrewievItem/>
                    </div>
                </div> 
                <div className={classes.create_item_cont}>
                    <div className={classes.create_item_btn}>
                        <Button text={"Create item"}/>
                    </div>
                    <div className={classes.create_item_unsaved}>
                        <div className={classes.create_item_unsaved_text}>
                            <p>Unsaved changes </p>
                        </div>
                        <div className={classes.create_item_unsaved_img}>
                            <QestionIcon/>
                        </div>
                    </div>
                </div>
                <div className={classes.footer}>
                    <Footer/>
                </div>
            </div>
            <div className={classes.footer_bg}>

            </div>
        </div>
    )
}

export default CreateAuction