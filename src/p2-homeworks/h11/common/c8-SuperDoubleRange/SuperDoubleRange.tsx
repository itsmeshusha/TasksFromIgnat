import React from "react";
import 'antd/dist/antd.css';
import {Slider} from "antd";
import s from '../../HW11.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: Array<number>) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const onChangeCallback = (value: Array<number>) => {
        onChangeRange && onChangeRange(value)
    }

    return (
        <div className={s.slider}>
            <Slider
                range
                value={value}
                onChange={onChangeCallback}
            />
        </div>
    );
}

export default SuperDoubleRange;
