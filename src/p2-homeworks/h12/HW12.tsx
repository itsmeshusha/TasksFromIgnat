import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {AppStoreType} from "../h10/bll/store";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'purple', 'blue'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.color); // useSelector
    const dispatch = useDispatch()
    const onChangeCallback = (color: string) => {
        dispatch(changeThemeC(color))
    }


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div>
                <SuperSelect options={themes} onChangeOption={onChangeCallback}/>
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
