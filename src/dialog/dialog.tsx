import React from "react";
import s from "./dialog.module.css"
import {NavLink} from "react-router-dom";

type PropsTypeFriends = {
    id: number
    name: string
}
type PropsTypeMessage = {
    id: number
    message: string
}


function Dialog() {

    //  мапим смски
    const Friend = (props: PropsTypeFriends) => {
        let link = "/dialog/" + props.id
        return <div>
            <NavLink to={link}>{props.name}</NavLink>
        </div>
    }

    let FriendsData = [
        {id: 1, name: "Олег"},
        {id: 2, name: "Саша"},
        {id: 3, name: "Женя"},
        {id: 4, name: "Данила"},
    ]
    let mappedFriends = FriendsData.map(el => <Friend id={el.id} name={el.name}/>)




    const Message = (props: PropsTypeMessage ) => {
        return <div> {props.message} </div>
    }

    let MessageItems = [
        {id: 1, message: "ку-ку"},
        {id: 2, message: "привет"},
        {id: 3, message: "пошёл нахуй"},
        {id: 4, message: "гг в миде долбоеб"},
    ]
    let mappedMessageItems = MessageItems.map(el => <Message id={el.id} message={el.message}/>)

    return (
        <div className={s.message}>
            <div className={s.messageItems}>
                {mappedMessageItems}
            </div>

            <div className={s.messageFriends}>
                {mappedFriends}
            </div>
        </div>

    )
}

export default Dialog