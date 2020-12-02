import React from 'react'
import '../css/Voucher.css'
export default function Voucher(props) {
    const {id,code,value,startingTimeStamp,endingTimeStamp,used,usedBy}=props.voucher;

    //console.log("from voucher",isUsed,used)
   // console.log(props.voucher);
    return (
        
        <div className="voucher-container">
            <label style={{width:"150px"}}>{id}</label>
            <label style={{width:"150px"}}>{code}</label>
            <label style={{width:"150px"}}>{value}</label>
            <label style={{width:"150px"}}>
               {used?"true":"false"}
            </label>
            <label style={{width:"150px"}}>{startingTimeStamp}</label>
            <label style={{width:"150px"}}>{endingTimeStamp}</label>
            <label style={{width:"250px"}}>{usedBy}</label>
        </div>
    )
}
