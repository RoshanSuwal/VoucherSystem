import Axios from 'axios';
import React, { Component } from 'react'
import RedeemTransaction from './components/RedeemTransaction';
import UserDetail from './components/UserDetail';

const BASE_URL="http://localhost:8080/users/"

export default class Client extends Component {

   
  constructor(){
    super()
    this.state={
      id:'',
      username:"",
      amount: '',
      accountDisabled:''
    }
    this.getUser()
  }
    
    
    redeem=(token)=>{
      console.log(token);
          Axios.put(BASE_URL+localStorage.getItem("id")+"/redeem",null,
          {
            headers:{"Authorization":"Bearer "+localStorage.getItem("token")},
            params:{token:token}
          }).then((response)=>{
              if(response.status===200){
                this.getUser()
              }
          })
      }


    getUser=()=>{

          Axios.get(BASE_URL+localStorage.getItem("id"),{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}}).then(
            (response)=>{
              const {uuid,username,amount,accountDisabled}=response.data
              this.setState({
                  id:uuid,
                  username:username,
                  amount:amount,
                  accountDisabled:accountDisabled
              })
            }
          )
      }

    render() {
        return (
            <div style={{display:"flex",height:"720px",position:"fixed",width:"100%"}}>
                <UserDetail user={this.state}/>
                {!this.state.accountDisabled && <RedeemTransaction redeem={this.redeem}/>}
                {this.state.accountDisabled && 
                <h3 
                  style={{marginTop:"10%",width:"50%",textAlign:"center",fontSize:"26px",fontWeight:'bolder', color:"#242133"}}
                >Account has been disabled</h3>}
            </div>
        )
    }
}
