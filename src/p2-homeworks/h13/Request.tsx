import React, {useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {requestAPI} from "./RequestsAPI";
import {setMessageAC} from "./request-reducer";


const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)

    let message = useSelector<AppStoreType, string>(state => state.request)
    const dispatch = useDispatch()

    const sendRequest = () => {
        requestAPI.requestPost(checked)
            .then(res => {
                dispatch(setMessageAC(res.data.errorText))
            })
            .catch(err => {
                console.log({...err})
                console.log(err.response ? err.response.data.errorText : err.message)
                dispatch(setMessageAC(err.message))
            })
    }

    return (
        <div>
            <div>{message}</div>
            <span>
            <SuperButton onClick={sendRequest}>Send Request</SuperButton>
            </span>
            <span>
            <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>
            </span>
        </div>
    )
}


export default Request;