import Password from 'antd/lib/input/Password'
import { Formik, setNestedObjectValues } from 'formik'
import React from 'react'
import "./Login.css"

import Axios from 'axios'
import history from './history'



export default function Login() {

    const state={
        authenticate:false,
        token:'',
        user:'',
        authority:''
    }


    const BASE_URL="http://localhost:8080/authenticate"

    const login=async(username,password)=>{
        await Axios.post(BASE_URL,{"username":username,"password":password})
            .then(response=>{
                console.log(response.data)
                if (response.data.token){
                    const {authorities,username,token,uuid}=response.data;
                    localStorage.setItem("token",token)
                    localStorage.setItem("username",username)
                    localStorage.setItem("authority",authorities)
                    localStorage.setItem("id",uuid)
                    if (uuid===null){
                        history.push("admin")
                    }else{
                        history.push("client")
                    }
                    
                    console.log(localStorage.getItem("username"))
                    window.location.reload();
                }
        })
        
    }

    const hello=async()=>{
        const resp=await Axios.get("http://localhost:8080/accounts/hello")
        console.log(resp);
    }

    return (
        <div className="login_container">

            <div>
                <p className="info_container">Welcome to Voucher System</p>
            </div>

            <div className="login_form_container">
                <label className="label-login">LOGIN ACCOUNT</label>

                <Formik

                    initialValues={{
                        username:'',
                        password:''
                    }}

                    validate={values=>{
                        const errors={};

                        if(!values.username){
                            errors.username="Required"
                        }

                        if(!values.password){
                            errors.password="Required"
                        }

                        return errors;
                    }}

                    onSubmit={(values,{setSubmitting})=>{
                        
                        setSubmitting(true);
                        login(values.username,values.password)
                       // hello()
                        setSubmitting(false);
                    }}
                >
                    {({values,errors,handleChange,handleSubmit,touched})=>(

                        <form onSubmit={handleSubmit} className="login-form">
                            <label className="login-label1">User Name</label><br/>
                            <input name="username" onChange={handleChange} value={values.username} className="login-inputs1" type="text" placeholder="enter your name"/><br/>
                            {errors.username && touched.username && <p className="error">{errors.username}</p> }

                            <label className="login-label2" >Password</label>
                            <br/>
                            <input name="password" onChange={handleChange} value={values.password} className="login-inputs2" type="password" placeholder="enter your password"/><br/>
                            {errors.password && touched.password && <p className="error">{errors.password}</p> }

                            <input  className="form-submit" type="submit" value="LOGIN"/>
                        </form>
                    )}
                </Formik>

               
            </div>
            
        </div>
    )
}
