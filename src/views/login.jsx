import { useState } from "react"
import { useNavigate } from "react-router-dom"
import authService from "../service/authService"
import Swal from "sweetalert"
function Login (){
    const [Data , setData]=useState()
    const navigate = useNavigate()
    const onChangeHandler=(e)=>{
        setData({
            ...Data ,
            [e.target.name]:e.target.value
        })
        console.log(Data)
    }
    const onSubmitHanler=(e)=>{
        e.preventDefault();
        authService.login(Data)
        .then((res)=>{
            console.log(res)
            localStorage.setItem("user",
            JSON.stringify(res.data))
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
            Swal.fire({
                icon:'error',
                title:'Opps',
                text:"This acount dosen't exist",
                footer:""
            })
        })
    }
    
    return(
        <>
       
        
       <div className="contact__form">
  <h5 style={{textAlign:"center"}}>Login</h5>
  <form  onSubmit={onSubmitHanler}>
    <input type="text" placeholder="Email" style={{width: "51%", marginLeft:"30%"}} name="email" onChange={onChangeHandler}/>
    <input type="text" placeholder="password" style={{width: "51%",marginLeft:"30%" }} name="password" onChange={onChangeHandler} /><br></br>
    <button type="submit" className="site-btn" style={{marginLeft: "70%",
    marginBottom: "3%", marginTop:"2%"}}>Connexion</button>
  </form>
</div>
        </>
    )
}
export default Login