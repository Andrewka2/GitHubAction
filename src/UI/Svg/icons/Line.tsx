import React, {FunctionComponent} from 'react';
import { Svg, SvgProps } from '../../../UI/Svg';

const Icon: FunctionComponent<SvgProps> = (props) => {
    return (
        <Svg width="121" height="6" viewBox="0 0 121 6" fill="none" {...props} >
            <rect x="0.5" y="0.502686" width="120" height="4" stroke="#FF465B"/>
        </Svg>
    );
};

export default Icon;