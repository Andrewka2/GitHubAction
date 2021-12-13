import React from "react";
import classes from './footer.module.scss'
import { NavBar } from "../NavBar";
import { navbar_footer } from "../../config";
import { Socials } from "../Socials";

function Footer(){
    return (
        <div className={classes.Footer}>
            <div className={classes.footer_year}>
                <p>© 2021 Panopticon Art</p>
            </div>
            <div className={classes.footer_navbar}>
                <NavBar navbar={navbar_footer}/>
            </div>
            <div className={classes.footer_links}>
                <Socials/>
            </div>
        </div>
    )
}

export default Footer