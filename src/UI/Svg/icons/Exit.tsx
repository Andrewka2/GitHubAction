import React, { FunctionComponent } from 'react';
import { Svg, SvgProps } from '../../../UI/Svg';

const Icon: FunctionComponent<SvgProps> = (props) => {
    return (
        <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" {...props} >
            <path d="M13 2.01147L2.75171 12.2869" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M13 12.2869L2.75171 2.01147" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
        </Svg>
    );
};

export default Icon;