import { Pagination } from 'antd'
import React from 'react'
import User from '../User'
import UserListHeader from '../UserListHeader'

export default function Users(props) {
    //console.log("users page")
   // console.log(props.users)

    const onChange=(page,pageSize)=>{
        props.handleUserPagination(page,pageSize);
    }

    console.log(props);

    return (
        <div className="users-container">
            <div>
                <h3 style={{"marginTop": "10px", padding: "5px 10px 5px 20px" ,"fontSize": "18px"}}>List of Users</h3>
                <UserListHeader />
            </div>
            <div>
                {props.users.map((user)=>(
                    <User key={user.uuid} user={user} usedVouchers={props.usedVouchers}/>
                ))}
            </div>
            <Pagination 
                    defaultCurrent={props.userPagination.page} 
                    defaultPageSize={props.userPagination.pageSize}
                    total={props.userPagination.total}
                    onChange={onChange}
                    style={{
                        marginLeft:"25%",
                        width:"50%",
                        padding:"20px",
                        justifyContent:"center",
                        alignItems:"center"
                    }}
                />
        </div>
    )
}
