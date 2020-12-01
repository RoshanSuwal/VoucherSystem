import Axios from 'axios'


const ADMIN_API="http://localhost:8080/"

const createVoucher=(number,amount)=>{
    return Axios.post(ADMIN_API+"vouchers",
                        null,
                        {
                            headers:{"Authorization":"Bearer "+localStorage.getItem("token")},
                            params:{"amount":amount,"number":number}
                        }                
    );
};

const getAllVouchers=()=>{
    return Axios.get(ADMIN_API+"vouchers",
                     {headers:{"Authorization":"Bearer "+localStorage.getItem("token")}}
    )
}

const getVouchers=(page,pageSize)=>{
    return Axios.get(ADMIN_API+"vouchers/",
                    {
                        headers:{"Authorization":"Bearer "+localStorage.getItem("token")},
                        params:{"page":page,"pageSize":pageSize}
                    }
    )
}

const getUsers=(page,pageSize)=>{
    return Axios.get(ADMIN_API+"users/",
                    {
                        headers:{"Authorization":"Bearer "+localStorage.getItem("token")},
                        params:{"page":page,"pageSize":pageSize}
                    }
    )
}



export default {
    createVoucher,
    getAllVouchers,
    getVouchers,
    getUsers
}