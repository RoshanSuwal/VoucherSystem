import { Formik } from 'formik'
import React from 'react'
import "./Signup.css"

import AuthService from "./axios/AuthService"
import history from './history'
import Axios from 'axios'

export default function Signup() {

    const handleSignup=(username,password)=>{

        Axios.post("http://localhost:8080/accounts",null,{params:{username:username,password:password}})
                    .then(response=>{
                        if(response.status===200){
                            history.push("/login");
                            window.location.reload();
                        }
                  }
        )
    }
    
    return (
        <div className="main-container">
            <div className="info">
                <p>Welcome to the Voucher System</p>
            </div>
            <div className="login">

                <Formik
                    initialValues={{username:"",
                                    password:"",
                                    confirmpassword:""
                                }}
                    
                    validate={values=>{

                        const errors={};

                        if(!values.username){
                            errors.email='required'
                        }

                        if(!values.password){
                            errors.password='required'
                        }

                        if(!values.confirmpassword){
                            errors.confirmpassword='required'
                        }else if (values.confirmpassword!==values.password) {
                            errors.confirmpassword="must be same password"
                        }
                        return errors;
                    }}

                    onSubmit={(values,{setSubmitting})=>{
                        setSubmitting(true);
                        console.log("signup")
                        handleSignup(values.username,values.password);
                        setSubmitting(false);
                    }}
                
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                        
                    })=>(
                        <form onSubmit={handleSubmit}>
                        <label style={{fontSize:24, color:"rgba(41, 40, 80, 1)"}}>CREATE NEW ACCOUNT</label>
                        <br/>

                        <label>User Name</label>
                        <input name="username" value={values.username} onChange={handleChange} type="text" placeholder="enter your username"/>
                        {errors.email &&touched.email && <p>{errors.email}</p>}

                        <label>Password</label>                        
                        <input name="password" value={values.password} onChange={handleChange} type="password" placeholder="8-20 characters"/>
                        {errors.password && touched.password && <p>{errors.password}</p>}

                        <label>Confirm Password</label>                        
                        <input name="confirmpassword" value={values.confirmpassword} onChange={handleChange} type="password" placeholder="confirm your password"/>
                        {errors.confirmpassword && touched.confirmpassword && <p>{errors.confirmpassword}</p>}

                        <input disabled={isSubmitting} type="submit" value="CREATE" style={{background:"rgba(29, 29, 155, 1)",color:"white", "marginTop":"30px"}}/>
                    </form>
                    )}

                </Formik>

                <a href="/login" className="label-bottom">Already have Account</a>
            </div>
            
        </div>
    )
}
