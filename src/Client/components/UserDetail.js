import React from 'react'
import "../css/UserDetail.css"

export default function UserDetail(props) {

    return (
        <div style={{display:"flex",flexDirection:"column","width":"50%",height:"100%",background:" #242133"}}>
            <label style={{textAlign:"center",width:"100%",fontSize:"32px",fontWeight:"bold",color:"white",marginTop:"10%"}}>Voucher System</label>         
            
            <div className="userdetail">
                <label className="user-detail-label">User Datail</label>
                
                <label className="label-info">Account Number</label>
                    <label style={{fontSize:"10px"}} className="label-data">{props.user.id}</label>
                
                <label className="label-info">User Name</label>
                    <label className="label-data">{props.user.username}</label>
                <label className="label-info">Balance</label>
                    <label className="label-data">Rs. <strong>{props.user.amount}</strong></label>
            </div>
            
        </div>
    )
}
