import React from 'react'
import "../css/UserListHeader.css"

export default function UserListHeader() {
    return (
        <div className="userlist-headeer-container">
            <label style={{width:"250px"}}>ACCOUNT ID</label>
            <label style={{width:"300px"}}>USER NAME</label>
            <label style={{width:"150px"}}>AMOUNT</label>
            <label style={{width:"150px"}}>TRANSACTION DISABLED</label>
            <label style={{width:"150px"}}>REDEEMED VOUCHERS</label>
            
        </div>
    )
}
