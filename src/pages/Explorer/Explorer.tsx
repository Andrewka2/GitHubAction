import React, { useState, useCallback } from "react";
import classes from './explorer.module.scss'
import { HeaderNavBar } from "../../components/HeaderNavBar";
import { HideTitle } from "../../components/HideTitle";
import { Title } from "../../components/Title";
import { NftItem } from "../../components/NftItem";
import { Line } from "../../UI/Svg";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { nft_items } from "../../config/nft_items";
import { SearchElemeContainer } from "../../components/SearchElemContainer";
import { NftItemsList } from "../../components/NftItemsList";
import { Footer } from "../../components/Footer";
import { NavBarMobile } from "../../components/Mobile_Nav";
import { navbar } from "../../config";

function Explorer() {

    let [isOpen, setIsOpen] = useState<boolean>(false)

    const navigationHandler = useCallback(() => {
        setIsOpen(isOpen => !isOpen);
    }, []);

    const settings = {
        customPaging: function (i: number) {
            return (
                <p><Line /></p>
            );
        },
        dots: true,
        dotsClass: `${classes.dots_cont}`,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className={classes.Explorer}>
            {
                isOpen ? <div className={classes.mobile_navigation}>
                    <NavBarMobile navbar={navbar} />
                    <div onClick={navigationHandler} className={classes.exit}>
                        <p>x</p>
                    </div>
                </div> : <></>
            }
            <div className={classes.container}>
                <div className={classes.header}>
                    <HeaderNavBar openHandler={navigationHandler} />
                </div>
                <div className={classes.header_content}>
                    <div className={classes.header_hide_title}>
                        <HideTitle text={"Explore"} />
                    </div>
                    <div className={classes.header_title}>
                        <Title text={"Hot deals"} />
                    </div>
                </div>
                <div className={classes.items_slider_content}>
                    <Slider {...settings}>
                        {
                            nft_items.map((elem, i) => {
                                return <NftItem key={`hot-item-${i}`} with_fire={true} img={elem.img} title={elem.title} text={elem.text} span_text={elem.span_text} likes_amount={elem.likes_amount} />
                            })
                        }
                    </Slider>
                </div>
                <div className={classes.search_elem_cont}>
                    <SearchElemeContainer />
                </div>
                <div className={classes.items_list_container}>
                    <NftItemsList />
                </div>
                <div className={classes.Footer}>
                    <Footer />
                </div>
            </div>
            <div className={classes.footer_bg}>

            </div>
        </div>
    )
}

export default Explorer