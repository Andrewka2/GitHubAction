import React, { FunctionComponent } from 'react';
import { Svg, SvgProps } from '../../../UI/Svg';

const Icon: FunctionComponent<SvgProps> = (props) => {
    return (
        <Svg width="17" height="14" viewBox="0 0 17 14" fill="none" {...props} >
            <path d="M17 4.39038C17 1.96578 14.8507 -0.000244141 12.2 -0.000244141C10.7107 -0.000244141 9.38067 0.619932 8.5 1.59319C7.61933 0.619932 6.28933 -0.000244141 4.8 -0.000244141C2.14933 -0.000244141 0 1.96578 0 4.39038C0 5.4173 0.386667 6.36129 1.032 7.10891L0.988667 7.13452L8.494 13.9998L16 7.13452L15.964 7.11318C16.612 6.36494 17 5.41913 17 4.39038Z" fill="white"/>
        </Svg>
    );
};

export default Icon;