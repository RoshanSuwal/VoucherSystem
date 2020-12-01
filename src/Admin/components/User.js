import React from 'react'
import "../css/User.css"

export default function User(props) {
    
    //console.log("from user")
    //console.log(props.user);
    const {uuid,username,amount,accountDisabled}=props.user;

    //console.log(props.user)
    return (
        <div className="userlist-item-container">
            <label style={{width:"250px", fontSize:"10px"}}>{uuid}</label>
            <label style={{width:"300px"}}>{username}</label>
            <label style={{width:"150px"}}>{amount}</label>
            <label style={{width:"150px"}}>{accountDisabled?"true":"false"}</label>
           {/* <label style={{width:"150px" ,padding:"0px"}}><button className="view-voucher-btn">view</button></label>*/}
        </div>
    )
}
