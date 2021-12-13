import React from "react";
import classes from './header_nav_bar.module.scss'
import { NavBar } from "../../components/NavBar"
import { Night } from "../../components/Night"
import { Button } from "../../components/Button"
import { navbar } from "../../config"
import menu from '../../assets/images/menu.png'
interface HeaderNavBarInterface {
    withBtn?: boolean,
    openHandler?: () => void | undefined,
}

function HeaderNavBar({ withBtn, openHandler }: HeaderNavBarInterface) {

    function navOpenHandler() {
        if (typeof openHandler !== 'undefined') {
            openHandler()
        }
    }

    return (
        <div className={classes.header_navbar}>
            <div className={classes.nav_bar_cont}>
                <div className={classes.nav_bar_wrapper}>
                    <NavBar navbar={navbar} />
                </div>
                <div className={classes.nav_bar_wrapper_mobile}>
                    <img onClick={navOpenHandler} src={menu} alt="menu" />
                </div>
            </div>
            <div className={classes.night_cont}>
                <div className={classes.night_btn}>
                    <Night />
                </div>
                {
                    withBtn ? <div className={classes.launch_app_btn}>
                        <Button text={"Launch App"} />
                    </div> : <><div className={classes.with_out_btn}>
                        <Button text={"Launch App"} />
                    </div></>
                }
            </div>
        </div>
    )
}

export default HeaderNavBar