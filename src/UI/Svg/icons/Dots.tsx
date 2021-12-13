import React, { FunctionComponent } from 'react';
import { Svg, SvgProps } from '../../../UI/Svg';

const Icon: FunctionComponent<SvgProps> = (props) => {
    return (
        <Svg width="4" height="22" viewBox="0 0 4 22" fill="none" {...props} >
            <path d="M2 3.99976C3.10457 3.99976 4 3.10433 4 1.99976C4 0.895186 3.10457 -0.000244141 2 -0.000244141C0.89543 -0.000244141 0 0.895186 0 1.99976C0 3.10433 0.89543 3.99976 2 3.99976Z" fill="white" />
            <path d="M2 12.8748C3.10457 12.8748 4 11.9793 4 10.8748C4 9.77019 3.10457 8.87476 2 8.87476C0.89543 8.87476 0 9.77019 0 10.8748C0 11.9793 0.89543 12.8748 2 12.8748Z" fill="white" />
            <path d="M2 21.7498C3.10457 21.7498 4 20.8543 4 19.7498C4 18.6452 3.10457 17.7498 2 17.7498C0.89543 17.7498 0 18.6452 0 19.7498C0 20.8543 0.89543 21.7498 2 21.7498Z" fill="white" />
        </Svg>
    );
};

export default Icon;