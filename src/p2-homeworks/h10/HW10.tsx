import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import store, {AppStoreType} from "./bll/store";
import {InitStateType, loadingAC} from "./bll/loadingReducer";
import Spinner from './spinner.gif'
import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch

    const load = useSelector<AppStoreType, InitStateType>(state => state.loading)
    let dispatch = useDispatch()
    const loading = load.loading

    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(true))
        setTimeout(()=>{
            dispatch(loadingAC(false))
        }, 2000)
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.loading}>
                        <img className={s.img}
                             src={Spinner} alt={'spinner'} />

                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
