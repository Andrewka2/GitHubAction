import React, {useState} from "react";
import classes from './select.module.scss'

interface SelectTextInterface {
    text: string
}

function Select({ text }: SelectTextInterface) {
    let [isOpen, setIsOpen] = useState(false)
    let [selectedOption, setSelectedOption] = useState(text)

    function setSelectedOptionHandler(event:any){
        setSelectedOption(event.target.textContent)
        isOpenHandler()
    }

    function isOpenHandler(){
        setIsOpen(!isOpen)
    }

    return (
        <form>
            <div className={classes.__select} data-state={isOpen ? "active": ""}>
                <div onClick={isOpenHandler} className={classes.__select__title} data-default={selectedOption}>{selectedOption}</div>
                <div className={classes.__select__content}>
                    <input id="singleSelect0" className={classes.__select__input} type="radio" name="singleSelect"/>
                    <label onClick={setSelectedOptionHandler} htmlFor="singleSelect0" className={classes.__select__label}>Option 0</label>
                    <input id="singleSelect1" className={classes.__select__input} type="radio" name="singleSelect" />
                    <label onClick={setSelectedOptionHandler} htmlFor="singleSelect1" className={classes.__select__label}>Option 1</label>
                    <input id="singleSelect2" className={classes.__select__input} type="radio" name="singleSelect" />
                    <label onClick={setSelectedOptionHandler} htmlFor="singleSelect2" className={classes.__select__label}>Option 2</label>
                    <input id="singleSelect3" className={classes.__select__input} type="radio" name="singleSelect" />
                    <label onClick={setSelectedOptionHandler} htmlFor="singleSelect3" className={classes.__select__label}>Option 3</label>
                    <input id="singleSelect4" className={classes.__select__input} type="radio" name="singleSelect" />
                    <label onClick={setSelectedOptionHandler} htmlFor="singleSelect4" className={classes.__select__label}>Option 4</label>
                </div>
            </div>
        </form>
    )
}

export default Select

/*
<div className={classes.select_cont}>
        <select className={classes.select}>
            <option value="value1" selected>{text}</option>
        </select>
        </div>
*/