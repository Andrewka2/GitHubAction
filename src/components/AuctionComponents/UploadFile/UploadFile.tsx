import React from "react";
import classes from './upload_file.module.scss'
import { NftItemBtn } from "../../NftItemBtn";

function UploadFile(){
    return (
        <div className={classes.UploadFile}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <p>Upload file</p>
                </div>
                <div className={classes.content}>
                    <div className={classes.content_title}>
                        <p>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                    </div>
                    <div className={classes.button}>
                        <NftItemBtn text={"Chosee File"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadFile