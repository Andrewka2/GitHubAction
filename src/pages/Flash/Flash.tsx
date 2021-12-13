import React, { useState, useCallback } from "react";
import classes from './flash.module.scss'
import { HeaderNavBar } from "../../components/HeaderNavBar"
import { HideTitle } from "../../components/HideTitle";
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import flash_img from '../../assets/images/flash/flash_img.png'
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { NavBarMobile } from "../../components/Mobile_Nav";
import { navbar } from "../../config";

function Flash() {

    let [isOpen, setIsOpen] = useState<boolean>(false)

    const navigationHandler = useCallback(() => {
        setIsOpen(isOpen => !isOpen);
    }, []);

    return (
        <div className={classes.Flash}>
            {
                isOpen ? <div className={classes.mobile_navigation}>
                    <NavBarMobile navbar={navbar} />
                    <div onClick={navigationHandler} className={classes.exit}>
                        <p>x</p>
                    </div>
                </div> : <></>
            }
            <div className={classes.container}>
                <div className={classes.header_container}>
                    <div className={classes.navbar}>
                        <HeaderNavBar openHandler={navigationHandler} withBtn={true} />
                    </div>
                    <div className={classes.hide_title}>
                        <HideTitle text={"Flash NFTs"} />
                    </div>
                    <div className={classes.title}>
                        <Title text={"How to start earning with Defi Warrior"} />
                    </div>
                </div>
                {
                    /*
                     <SellNft/>
                    */
                }
                <div className={classes.steps_cont}>
                    <div className={classes.steps}>
                        <div className={classes.steps_title_number}>
                            <p>01</p>
                        </div>
                        <div className={classes.steps_title}>
                            <p>Get referral link</p>
                        </div>
                        <div className={classes.text}>
                            <p>Sign up / log in to get your referral link</p>
                        </div>
                        <div className={classes.circle_1}>

                        </div>
                        <div className={classes.circle_2}>

                        </div>
                    </div>
                    <div className={classes.steps}>
                        <div className={classes.steps_title_number}>
                            <p>02</p>
                        </div>
                        <div className={classes.steps_title}>
                            <p>Invite friends</p>
                        </div>
                        <div className={classes.text}>
                            <p>Share referral link with friends and followers</p>
                        </div>
                        <div className={classes.circle_1}>

                        </div>
                        <div className={classes.circle_2}>

                        </div>
                    </div>
                    <div className={classes.steps}>
                        <div className={classes.steps_title_number}>
                            <p>03</p>
                        </div>
                        <div className={classes.steps_title}>
                            <p>Start earning</p>
                        </div>
                        <div className={classes.text}>
                            <p>Receive up to 40% every time they complete a trade</p>
                        </div>
                        <div className={classes.circle_1}>

                        </div>
                        <div className={classes.circle_2}>

                        </div>
                    </div>
                </div>
                <div className={classes.search_token}>
                    <div className={classes.search_token_container}>
                        <div className={classes.search_token_title}>
                            <p>Search token</p>
                        </div>
                        <div className={classes.search_token_fields}>
                            <div className={classes.input}>
                                <Input placeholder={"Token address"}/>
                            </div>
                            <div className={classes.select}>
                                <Select text={"Token id"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.price_token_item}>
                    <div className={classes.price_token_item_container}>
                        <div className={classes.token_item_img}>
                            <img src={flash_img} alt="flash_img" />
                        </div>
                        <div className={classes.token_item_text_cont}>
                            <div className={classes.token_item_title}>
                                <div className={classes.token_item_img_mobile}>
                                    <img src={flash_img} alt="flash_img" />
                                </div>
                                <div className={classes.token_item_title_text}>
                                    <p>1. Series #2 Cosmic moby dick</p>
                                </div>
                                
                            </div>
                            <div className={classes.token_item_text}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className={classes.token_item_price}>
                                <p>Price: <span>0.55 ETH</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.sell_block}>
                    <div className={classes.sell_block_container}>
                        <div className={classes.sell_input}>
                            <Input placeholder={"Sell price"}/>
                        </div>
                        <div className={classes.sellBtn}>
                            <Button text={"Sell"}/>
                        </div>
                    </div>
                </div>
                <div className={classes.price}>
                    <div className={classes.price_container}>
                        <div className={classes.price_text}>
                            <p>Farming token   Possible farm by current price:</p>
                        </div>
                        <div className={classes.price_amount}>
                            <p>150 DFR</p>
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

export default Flash