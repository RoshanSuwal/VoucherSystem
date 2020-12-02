import { Button } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import "../css/User.css"

export default function User(props) {
    
    
    //console.log("from user")
    //console.log(props.user);
    const {uuid,username,amount,accountDisabled}=props.user;

    const onClick=()=>{
        console.log("onclick",username);
        props.usedVouchers(1,20,username)
    }

    //console.log(props.user)
    return (
        <div className="userlist-item-container">
            <label style={{width:"250px", fontSize:"10px"}}>{uuid}</label>
            <label style={{width:"300px"}}>{username}</label>
            <label style={{width:"150px"}}>{amount}</label>
            <label style={{width:"150px"}}>{accountDisabled?"true":"false"}</label>
            <label style={{width:"150px" ,padding:"0px"}}><Link className="user-link" to="/admin/vouchers" onClick={onClick}>View</Link></label>
        </div>
    )
}
