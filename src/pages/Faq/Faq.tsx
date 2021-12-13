import React from "react"
import classes from './faq.module.scss'
import { HeaderNavBar } from "../../components/HeaderNavBar"
import { Title } from "../../components/Title"
import { FaqItem } from "../../components/FaqItem"
import { faq_items } from "../../config"
import { Footer } from "../../components/Footer"

function Faq() {
    return (
        <div className={classes.Faq}>
            <div className={classes.container}>
                <div className={classes.header_container}>
                    <div className={classes.navbar}>
                        <HeaderNavBar withBtn={true} />
                    </div>
                    <div className={classes.title}>
                        <Title text={"FAQ"} />
                    </div>
                </div>
                <div className={classes.content}>
                    {
                        faq_items.map((elem,index)=>{
                            return <FaqItem key={`faq-items-interface-${index}`} title={elem.title} />
                        })
                    } 
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

export default Faq