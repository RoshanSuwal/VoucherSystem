import Axios from 'axios';
import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Header from '../Admin/components/Header'
import Users from './components/pages/Users';
import Vouchers from './components/pages/Vouchers'

import AdminService from '../axios/AdminService'

const BASE_URL="http://localhost:8080/"

export default class Admin extends Component {

    constructor(props){
        super(props);

        this.state={ 
            searchtext:"",
            voucherPagination:{
                page:1,
                pageSize:20,
                total:500
            },
            userPagination:{
                page:1,
                pageSize:20,
                total:500
            },

            users:[
                // {
                //     id:1,
                //     username:"user name",
                //     value:100,
                //     disabled:"false"
                // },
                // {
                //     id:2,
                //     username:"user name",
                //     value:100,
                //     disabled:"false"
                // }
            ],
    
            vouchers:[
                // {
                //     id:-100,
                //     code:"ABCD1234EF",
                //     value:100000,
                //     startingTimeStamp:"2020-11-10",
                //     endingTimeStamp:"2021-01-10",
                //     isUsed:"false",
                //     usedBy:""
                // },
                // {
                //     id:1234,
                //     code:"ABCD1234EF",
                //     value:100000,
                //     startingTimeStamp:"2020-11-10",
                //     endingTimeStamp:"2021-01-10",
                //     isUsed:"true",
                //     usedBy:"1234"
                // }
            ]
        }
        this.getVouchers(1,20);
        this.getUsers(1,20,"");
    }

    handleCreateVoucher=(number,amount)=>{
        console.log("create voucher ",number,amount)

        AdminService.createVoucher(number,amount)
            .then((response)=>{
                    if (response.status===200) {
                        this.getVouchers(this.state.voucherPagination.page,this.state.voucherPagination.pageSize);
                    }
                }
        )
    }

    handleVoucherPagination=(page,pageSize,search)=>{
        console.log("Pagination",page,pageSize,search)
        this.getVouchers(page,pageSize,search)

    }

    getVouchers=async (page,pageSize,search)=>{
        await AdminService.searchVouchers(page,pageSize,search).then(
            (resp)=>{
                console.log("search",search,resp.data)
                this.setState({
                    searchtext:search,
                    voucherPagination:{
                        page:page,
                        pageSize:pageSize,
                        total:resp.data.totalElements
                    },
                    userPagination:this.state.userPagination,
                    users:this.state.users,
                    vouchers:resp.data.vouchers
                })

                console.log("get vouchers")
                console.log(this.state)
            }
        )
    }

    handleUserPagination=(page,pageSize)=>{
        console.log(page,pageSize)
        this.getUsers(page,pageSize);
    }

    getUsers=async (page,pageSize)=>{
       await AdminService.getUsers(page,pageSize).then(
            (response)=>{
                console.log("users",response.data)

                this.setState({
                    searchtext:this.state.searchtext,
                    userPagination:{
                        page:page,
                        pageSize:pageSize,
                        total:response.data.totalElements
                    },
                    voucherPagination:this.state.voucherPagination,
                    vouchers:this.state.vouchers,
                    users:response.data.users
                })
            }
        )
    }

    

    render() {
       // console.log(this.state.vouchers)
        return (
            <Router>
                <div>
                    <Header/>

                    <Route path="/admin/users"  render={(props)=>(
                        <Users users={this.state.users} userPagination={this.state.userPagination} handleUserPagination={this.handleUserPagination} usedVouchers={this.handleVoucherPagination}/>
                    )}/>
                    
                    <Route path="/admin/vouchers" render={(props)=>(
                        <Vouchers searchtext={this.state.searchtext} voucherPagination={this.state.voucherPagination} handleVoucherPagination={this.handleVoucherPagination} handleCreateVoucher={this.handleCreateVoucher} vouchers={this.state.vouchers}/>
                    )}/>
                    
                </div>
            </Router>
        )
    }
}

