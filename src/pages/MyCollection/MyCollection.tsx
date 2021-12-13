import React, { useState, useCallback } from "react";
import classes from './my_collection.module.scss'
import { HeaderNavBar } from "../../components/HeaderNavBar"
import bg_img from '../../assets/images/myCollection/collection_img.png'
import bg_img_mobile from '../../assets/images/myCollection/collection_img_mobile.png'
import user_img from '../../assets/images/myCollection/user_img.png'
import ProfileSearchElem from "../../components/ProfileSearchElem/ProfileSearchElem"
import { NftItemsList } from "../../components/NftItemsList"
import { Footer } from "../../components/Footer";
import { NavBarMobile } from "../../components/Mobile_Nav";
import { navbar } from "../../config";

function MyCollection(){

    let [isOpen, setIsOpen] = useState<boolean>(false)

    const navigationHandler = useCallback(() => {
        setIsOpen(isOpen => !isOpen);
    }, []);

    return (
        <div className={classes.MyCollection}>
            {
                isOpen ? <div className={classes.mobile_navigation}>
                    <NavBarMobile navbar={navbar} />
                    <div onClick={navigationHandler} className={classes.exit}>
                        <p>x</p>
                    </div>
                </div> : <></>
            }
            <div className={classes.container}>
                <div className={classes.navbar}>
                    <HeaderNavBar openHandler={navigationHandler} withBtn={false}/>
                </div>
                <div className={classes.profile_bg_cont}>
                    <div className={classes.profile_img_cont}>
                        <img src={bg_img} alt="img" />
                    </div>
                    <div className={classes.profile_img_cont_mobile}>
                        <img src={bg_img_mobile} alt="img_mobile" />
                    </div>
                    <div className={classes.user_img_block}>
                        <div className={classes.user_img}>
                            <img src={user_img} alt="user_img" />
                        </div>
                    </div>
                </div>
                <div className={classes.user_profile_info_container}>
                    <div className={classes.user_profile_info_name}>
                        <p>RoachNFT</p>
                    </div>
                    <div className={classes.user_profile_info_wallet}>
                        <p>0xb992...ccc2</p>
                    </div>
                    <div className={classes.user_profile_info_text}>
                        <p>NFT FTW</p>
                    </div>
                    <div className={classes.user_profile_info_text}>
                        <p>Joined September 2021</p>
                    </div>
                </div>
                <div className={classes.search_elem}>
                    <ProfileSearchElem/>
                </div>
                <div className={classes.items_list_container}>
                    <NftItemsList/>
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

export default MyCollection