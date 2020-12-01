import { Formik } from 'formik';
import React, { Component } from 'react'
import "../css/RedeemTransaction.css"

export default function RedeemTransaction (props){
    

    return (
        <div style={{display:"flex",flexDirection:"column",width:"50%",height:"100%"}}>
            <h2 style={{width:"auto",textAlign:"center",color:"#242133",marginTop:"10%",fontSize:"30px"}}>Redeem Transaction</h2>
            
            <Formik
                initialValues={{
                    token:''
                }}

                validate={values=>{
                    const errors={}

                    if(!values.token){
                        errors.token="required"
                    }else if(values.token.length!==10){
                        errors.token="must be of 10 characters"
                    }

                    return errors;
                }}

                onSubmit={(values,{setSubmitting})=>{
                    setSubmitting(true);
                    console.log("token ",values)
                    props.redeem(values.token);
                    setSubmitting(false);

                }}
            >
            {({values,errors,touched,handleChange,handleSubmit,isSubmitting})=>(
                <form className="redeem-form" onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}}>
                    <label className="token-label">Token</label>
                    <input onChange={handleChange} value={values.token} name='token' className="token-input" type="text"  placeholder="Enter 10 digits Token Code"/>
                    {errors.token && touched.token && <p>{errors.token}</p>}

                    <input disabled={isSubmitting} className="redeem" type="submit" value="REDEEM"/>
                </form>

            )}

            </Formik>
                
        </div>
    )
}


