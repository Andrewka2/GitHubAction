import React from "react";
import classes from './elem_container.module.scss'
import { Input } from "../Input";
import { Select } from "../Select";
import { List } from "../../UI/Svg";
import { Title } from "../../UI/Svg";

function SearchElemeContainer() {
    return (
        <div className={classes.SearchElemeContainer}>
            <div className={classes.container}>
                <div className={classes.input_container}>
                    <div className={classes.input}>
                        <Input placeholder={"Search on Panopticon Art"} />
                    </div>
                    <div className={classes.sort_items_text_mobile}>
                            <p>22 204 426 results</p>
                        </div>
                    <div className={classes.search_items}>
                        <div className={classes.search_item}>
                            <label htmlFor="collections">
                                <input defaultChecked={true} id="collections" name="choise_list" type="radio" />
                                <p>Collections</p>
                            </label>
                        </div>
                        <div className={classes.search_item}>
                            <label htmlFor="items">
                                <input id="items" name="choise_list" type="radio" />
                                <p>Items</p>
                            </label>
                        </div>
                        <div className={classes.search_item}>
                            <label htmlFor="users">
                                <input id="users" name="choise_list" type="radio" />
                                <p>Users</p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={classes.sort_items_cont}>
                        <div className={classes.sort_items_text}>
                            <p>22 204 426 results</p>
                        </div>
                        <div className={classes.select_item}>
                            <Select text={"All items"}/>
                        </div>
                        <div className={classes.select_item}>
                            <Select text={"Sort by"}/>
                        </div>
                        <div className={classes.icons_cont}>
                            <div className={classes.title}>
                                <Title/>
                            </div>
                            <div className={classes.list}>
                                <List/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default SearchElemeContainer