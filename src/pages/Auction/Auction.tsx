import React, { useState, useCallback } from "react";
import classes from './auction.module.scss'
import { HeaderNavBar } from "../../components/HeaderNavBar"
import { HideTitle } from "../../components/HideTitle"
import { Title } from "../../components/Title"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { NftItemsList } from "../../components/NftItemsList"
import { Footer } from "../../components/Footer"
import { NavBarMobile } from "../../components/Mobile_Nav"
import { navbar } from "../../config"

function Auction() {

    let [isOpen, setIsOpen] = useState<boolean>(false)

    const navigationHandler = useCallback(() => {
        setIsOpen(isOpen => !isOpen);
    }, []);

    return (
        <div className={classes.Auction}>
            {
                isOpen ? <div className={classes.mobile_navigation}>
                    <NavBarMobile navbar={navbar} />
                    <div onClick={navigationHandler} className={classes.exit}>
                        <p>x</p>
                    </div>
                </div> : <></>
            }
            <div className={classes.auction_bg}>
                <div className={classes.container}>
                    <div className={classes.header_container}>
                        <div className={classes.navbar}>
                            <HeaderNavBar openHandler={navigationHandler} withBtn={true} />
                        </div>
                        <div className={classes.hide_title}>
                            <HideTitle text={"Auction"} />
                        </div>
                        <div className={classes.title}>
                            <Title text={"Wormhole xstream"} />
                        </div>
                    </div>
                    <div className={classes.text_block}>
                        <div className={classes.text_block_container}>
                            <div className={classes.text_block_title}>
                                <p>Auction conditions</p>
                            </div>
                            <div className={classes.text_block_text}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.timer_block}>
                    <div className={classes.timer_block_cont}>
                        <div className={classes.timer_block_line}>

                        </div>
                        <div className={classes.timer}>
                            <div className={classes.circle_1}>

                            </div>
                            <div className={classes.circle_2}>

                            </div>
                            <div className={classes.timer_cont}>
                                <div className={classes.timer_title}>
                                    <p>Countdown counter before blowout</p>
                                </div>
                                <div className={classes.timer_time}>
                                    <div className={classes.timer_time_cont}>
                                        <div className={classes.time}>
                                            <p>05</p>
                                        </div>
                                        <div className={classes.time_text}>
                                            <p>days</p>
                                        </div>
                                    </div>
                                    <div className={classes.timer_time_cont}>
                                        <div className={classes.time}>
                                            <p>12</p>
                                        </div>
                                        <div className={classes.time_text}>
                                            <p>hours</p>
                                        </div>
                                    </div>
                                    <div className={classes.timer_time_cont}>
                                        <div className={classes.time}>
                                            <p>05</p>
                                        </div>
                                        <div className={classes.time_text}>
                                            <p>minutes</p>
                                        </div>
                                    </div>
                                    <div className={classes.timer_time_cont}>
                                        <div className={classes.time}>
                                            <p>32</p>
                                        </div>
                                        <div className={classes.time_text}>
                                            <p>seconds</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.timer_block_line}>

                        </div>
                    </div>
                </div>
                <div className={classes.random_token_item}>
                    <div className={classes.random_token_title}>
                        <p>Get your random token</p>
                    </div>
                    <div className={classes.random_token_btn}>
                        <Button text={"GET RANDOM"} />
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.search_for_nft}>
                        <div className={classes.search_for_nft_container}>
                            <div className={classes.search_for_nft_title}>
                                <p>Search for NTF</p>
                            </div>
                            <div className={classes.search_for_nft_input}>
                                <Input placeholder={"Search Panopticon Art"} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.content_title}>
                            <Title text={"Searching results"} />
                        </div>
                        <div className={classes.items_list_container}>
                            <NftItemsList />
                        </div>
                    </div>
                    <div className={classes.footer}>
                        <Footer />
                    </div>
                </div>
            </div>
            <div className={classes.footer_bg}>

            </div>
        </div>
    )
}

export default Auction