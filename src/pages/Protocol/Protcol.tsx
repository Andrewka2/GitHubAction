import React, {useState, useCallback} from "react"
import classes from './protocol.module.scss'
import { HideTitle } from "../../components/HideTitle"
import { Footer } from "../../components/Footer"
import { Socials } from "../../components/Socials"
import { Item } from "../../components/ProtocolItems"
import { protocol_items } from "../../config"
import { HeaderNavBar } from "../../components/HeaderNavBar"
import { LearnButton } from "../../components/Button_Learn"
import Slider from 'react-slick'
import { navbar } from "../../config"
import { NavBarMobile } from "../../components/Mobile_Nav"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Protocol() {
    let [isOpen, setIsOpen] = useState<boolean>(false)
    const navigationHandler = useCallback(() => {
        setIsOpen(isOpen => !isOpen);
    }, []);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        centerPadding: "60px",
        arrows: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={classes.Protocol}>
            {
                isOpen ? <div className={classes.mobile_navigation}>
                    <NavBarMobile navbar={navbar}/>
                    <div onClick={navigationHandler} className={classes.exit}>
                        <p>x</p>
                    </div>
                </div> : <></>
            }
            <div className={classes.container}>
                <div className={classes.header}>
                    <HeaderNavBar openHandler={navigationHandler} withBtn={true} />
                    <div className={classes.header_content}>
                        <div className={classes.header_title}>
                            <h1>Panopticon <span>v0.1</span></h1>
                        </div>
                        <div className={classes.header_subtitle}>
                            <p>NFT future is here</p>
                        </div>
                        <div className={classes.header_social_links}>
                            <Socials />
                        </div>
                    </div>
                </div>
                <div className={classes.network_apps}>
                    <div className={classes.network_apps_text_container}>
                        <div className={classes.network_apps_styled_text}>
                            <p>Panopticon v0.1</p>
                        </div>
                        <div className={classes.network_apps_title}>
                            <p>NFT marketplaces & collections</p>
                        </div>
                        <div className={classes.network_apps_subtitle}>
                            <p>Collectors, NFT investors, Digital art creators.</p>
                        </div>
                    </div>
                    <div className={classes.network_apps_amount_cont}>
                        <div className={classes.network_apps_amount_text_container}>
                            <div className={classes.network_apps_amount_text}>
                                <p>List you NFT free</p>
                            </div>
                            <div className={classes.network_apps_amount_sub_text}>
                                <p>We paid for fees</p>
                            </div>
                            <div className={classes.network_apps_btn}>
                                <LearnButton link={true} href={"https://docs.google.com/forms/d/e/1FAIpQLSdHKVIaoIYIXvUDtqrFRg9jdTWUL4R9hqYNtBEGDwc5NMLEpw/viewform?usp=sf_link"} whiteList={true} text={"WHITELIST"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.developers}>
                    <div className={classes.developers_title}>
                        <HideTitle text={"AUCTIONS"} />
                    </div>
                    <div className={classes.items_container}>
                        {
                            protocol_items.map((elem, index) => {
                                return <Item key={`items-${index}-${elem.title}`} marked={elem.marked} end_title={elem.end_title} title={elem.title} text={elem.text} spanTitle={elem.spanTitle} />
                            })
                        }
                    </div>
                    <div className={classes.items_container_mobile}>
                        {
                                <Slider {...settings}>
                                    {
                                        protocol_items.map((elem, index) => {
                                            return <Item key={`items-${index}-${elem.title}`} marked={elem.marked} end_title={elem.end_title} title={elem.title} text={elem.text} spanTitle={elem.spanTitle} />
                                        })
                                    }
                                </Slider>
                        }
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

export default Protocol