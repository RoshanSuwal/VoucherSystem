import React from 'react'
import Voucher from '../Voucher'
import "../../css/Vouchers.css"
import VouchersListHeader from '../VouchersListHeader';
import { Input, Modal, Pagination} from 'antd';
import { Formik } from 'formik';

import SearchIcon from '@material-ui/icons/Search';
import AdminService from '../../../axios/AdminService';


export default class Vouchers extends React.Component {
    
    constructor(props){
        super(props)
        console.log("voucher",this.props)
        this.state={
            visible:false,
            searchtext:null
        }
    }

    showModal = () => {
        this.setState({
            visible:true,
            searchtext:this.state.searchtext
        })
    };

    handleCancel = e => {
        console.log("cancled form clicked");
        this.setState({
            visible:false,
            searchtext:this.state.searchtext
        })
    };

    onChange(page,pageSize){
        this.props.handleVoucherPagination(page,pageSize,this.state.searchtext);
        this.setState({
            visible:this.state.visible,
            searchtext:null
        })
    }


    onSearchTextChanged=(e)=>{
        this.setState({
            visible:this.state.visible,
            searchtext:e.target.value
        })
    }

    onSearch=(e)=>{
        console.log(e.target.value)
        this.props.handleVoucherPagination(1,20,e.target.value)
    }

    render(){
       console.log("vouchers page")
       console.log(this.props)
       console.log(this.state)
      // console.log("Pagination",this.props.voucherPagination)

        return( 
            <div> 
                <div className="vouchers-header">
                    <h3>List of Voucher</h3>
                    <Input prefix={<SearchIcon style={{marginRight:"10px"}}/>} 
                           placeholder="Search code ,amount, usedby" 
                           style={{width:'40%',margin:'12px 0 5px 0',
                           paddingLeft:'10px'}}
                           value={this.state.searchtext===null?this.props.searchtext:this.state.searchtext}
                           onChange={this.onSearchTextChanged}
                           onPressEnter={this.onSearch}/>
                    <button style={{marginRight:'20px'}} onClick={this.showModal}>CREATE VOUCHER</button>
                </div>
                <VouchersListHeader/>
                <div>
                    {this.props.vouchers.map((voucher)=>(
                        <Voucher key={voucher.id} voucher={voucher}/>
                    ))}
                </div>
                <div style={{
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                <Pagination 
                    defaultCurrent={this.props.voucherPagination.page} 
                    defaultPageSize={this.props.voucherPagination.pageSize}
                    total={this.props.voucherPagination.total}
                    onChange={this.onChange.bind(this)}
                    style={{
                        marginLeft:"25%",
                        width:"50%",
                        padding:"20px",
                        justifyContent:"center",
                        alignItems:"center"
                    }}
                />

                </div>

                <Modal
                    style={{
                        border:"1px solid #333333",
                        position:"absolute",
                        width:"50%",
                        backgroundColor:"#fff",
                        top:"50px",
                        marginTop:"50px",
                    }}
                    closable={false}
                    centered={true}
                    width={400}  
                    footer={null}
                    visible={this.state.visible}
                >
                    <div className="create-voucher-container">
                        <h4>CREATE NEW VOUCHERS</h4>

                        <Formik
                            initialValues={{
                                number:'',
                                amount:''
                            }}

                            validate={(values)=>{
                                const errors={}

                                if(!values.number){
                                    errors.number="required"
                                }

                                if(!values.amount){
                                    errors.amount="required"
                                }

                                return errors;
                            }}

                            onSubmit={(values,{setSubmitting})=>{
                                setSubmitting(true)
                                console.log("generate")
                                this.props.handleCreateVoucher(values.number,values.amount)
                                setSubmitting(false)
                                this.handleCancel();
                            }}
                        
                        >
                            {({values,errors,handleChange,handleSubmit,touched,isSubmitting})=>(
                                <form onSubmit={handleSubmit}>
                                    <label>Number of Vouchers</label>
                                    <input value={values.number} onChange={handleChange} name="number" type="number" placeholder="enter number of vouchers"/>
                                      {errors.number && touched.number && <p>{errors.number}</p>}

                                    <label>Amount</label>
                                    <input onChange={handleChange} value={values.amount} name="amount" type="number" placeholder="enter the amount.."/>
                                        {errors.amount && touched.amount && <p>{errors.amount}</p>}

                                    <button disabled={isSubmitting}  type="submit" className="submit-button" >GENERATE</button>
                            </form>
                            )}
                        </Formik>
                        
                        <button style={{marginTop:"5px", backgroundColor:"red" }} onClick={this.handleCancel}>CANCEL</button>
                    </div>
                </Modal>
                
            </div>

        );
    }
}



