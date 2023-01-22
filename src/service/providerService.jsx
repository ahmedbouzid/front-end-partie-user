import http from "./axiosContext"
const register=(data)=>{
    return http.post("/provider/register" , data)
}

export default {
    register
}