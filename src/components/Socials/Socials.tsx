import React from "react";
import classes from './socials.module.scss'
import * as IconModule from "./icons";
import { SvgProps } from '../../UI/Svg';
import { socials } from "../../config";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

function Socials(){
    return (
        <div className={classes.Socials}>
            {
                socials.map((item, i)=>{
                    const Icon = Icons[item.icon];
                    const iconElement = <Icon width="38px" />;
                    return (
                        <div key={`items-${i}-${item.label}`} className={classes.iconContainer}>
                            <a className={classes[item.label]} href={item.href}>{iconElement}</a>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Socials