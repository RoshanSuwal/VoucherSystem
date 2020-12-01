import React from 'react'
import "../css/VouchersListHeader.css"

export default function VouchersListHeader() {
    return (
        <div className="voucherlist-container">
        <label style={{width:"150px"}}>ID</label>
        <label style={{width:"150px"}}>CODE</label>
        <label style={{width:"150px"}}>AMOUNT</label>
        <label style={{width:"150px"}}>USED</label>
        <label style={{width:"150px"}}>ACTIVATION DATE</label>
        <label style={{width:"150px"}}>EXPIRATION DATE</label>
        <label style={{width:"250px"}}>USEDBY</label>
    </div>
    )
}
