import React from "react";
import classes from './description.module.scss'
import { Input } from "../../Input";

function Description(){
    return (
        <div className={classes.Description}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>Description <span>(Optional)</span></p>
                </div>
                <div className={classes.input}>
                    <Input placeholder={`e. g. "After purchasing you’ll be able to get the real T-Shirt"`}/>
                </div>
                <div className={classes.text}>
                    <p>With preserved line-breaks</p>
                </div>
            </div>
        </div>
    )
}

export default Description