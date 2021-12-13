import React from "react";
import classes from './prewiev.module.scss'

function PrewievItem() {
    return (
        <div className={classes.content_prewiev}>
        <div className={classes.content_prewiev_cont}>
            <div className={classes.content_prewiev_title}>
                <p>Preview</p>
            </div>
            <div className={classes.content}>
                <div className={classes.content_text}>
                    <p>Upload file to preview your brand new NFT</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PrewievItem