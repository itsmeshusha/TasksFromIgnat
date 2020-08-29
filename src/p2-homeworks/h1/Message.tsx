import React from "react";
import s from './Message.module.css';

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={s.message}>
            <img className={s.ava} src={props.avatar} alt={"ava"}/>
            <div className={s.name}>{props.name}</div>
            <div className={s.triangle}></div>
            <div className={s.text}>{props.message}</div>
            <div className={s.time}>{props.time}</div>
        </div>
    );
}

export default Message;
