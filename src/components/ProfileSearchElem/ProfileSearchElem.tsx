import React from "react";
import classes from './profile_search_elem.module.scss'
import { Input } from "../Input";
import { Select } from "../Select";
import { List } from "../../UI/Svg";
import { Title } from "../../UI/Svg";

function ProfileSearchElem() {
    return (
        <div className={classes.SearchElemeContainer}>
            <div className={classes.container}>
                <div className={classes.input_container}>
                    <div className={classes.input}>
                        <Input placeholder={"Search OpenSea"} />
                    </div>
                    <div className={classes.select_item}>
                        <Select text={"All items"} />
                    </div>
                    <div className={classes.select_item}>
                        <Select text={"Sort by"} />
                    </div>
                    <div className={classes.icons_wrapper}>
                        <div className={classes.icons_cont}>
                            <div className={classes.title}>
                                <Title />
                            </div>
                            <div className={classes.list}>
                                <List />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.sort_items_cont}>
                    <div className={classes.search_items}>
                        <div className={`${classes.search_item} ${classes.collected}`}>
                            <label htmlFor="collected">
                                <input defaultChecked={true} id="collected" name="choise_list" type="radio" />
                                <p>Collected <span>639</span></p>
                            </label>
                        </div>
                        <div className={`${classes.search_item} ${classes.created}`}>
                            <label htmlFor="created">
                                <input id="created" name="choise_list" type="radio" />
                                <p>Created <span>0</span></p>
                            </label>
                        </div>
                        <div className={classes.search_item}>
                            <label htmlFor="favorited">
                                <input id="favorited" name="choise_list" type="radio" />
                                <p>Favorited <span>0</span></p>
                            </label>
                        </div>
                        <div className={classes.search_item}>
                            <label htmlFor="activity">
                                <input id="activity" name="choise_list" type="radio" />
                                <p>Activity</p>
                            </label>
                        </div>
                        <div className={classes.search_item}>
                            <label htmlFor="offers">
                                <input id="offers" name="choise_list" type="radio" />
                                <p>Offers</p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSearchElem