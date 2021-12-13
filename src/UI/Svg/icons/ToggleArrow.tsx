import React, { FunctionComponent } from 'react';
import { Svg, SvgProps } from '../../../UI/Svg';

const Icon: FunctionComponent<SvgProps> = (props) => {
    return (
        <Svg width="9" height="14" viewBox="0 0 9 14" fill="none" {...props} >
            <path d="M2.01351 0.499756L0.5 2.01642L5.47297 6.99976L0.5 11.9831L2.01351 13.4998L8.5 6.99976L2.01351 0.499756Z" fill="white"/>
        </Svg>
    );
};

export default Icon;