import React from "react"
import classes from './mobileNav.module.scss'
import { NavBarInterface } from "../../config"

interface NavBarItems{
    navbar: NavBarInterface[];
}

function NavBarMobile({navbar}:NavBarItems){
    return (
        <ul className={classes.NavBar}>
            {
                navbar.map((elem, i)=>{
                   return <li key={`nav-bar-item-${i}`}><button>{elem.text}</button></li>
                })
            }
        </ul>
    )
}

export default NavBarMobile