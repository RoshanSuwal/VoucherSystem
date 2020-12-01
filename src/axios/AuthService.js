const { axios } = require("axios");

const API_URL="http://localhost:8080/";

const login=(username,password)=>{
    return axios.
                post(API_URL+"authenticate",{username,password});
}

const siginup=(username,password)=>{
    return axios.post(API_URL+"accounts",
                    {"username":username,"password":password}
                );
}

export default{
    login,
    siginup
}