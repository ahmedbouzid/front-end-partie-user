import { useState } from "react"
import { useNavigate } from "react-router-dom"
import providerService from "../service/providerService"
import Swal from "sweetalert"

const Registre = ()=>{
  const [Data , setData] = useState({})
  const navigate = useNavigate()
  const onChangeHandler=(e)=>{
    setData({
      ...Data,
      [e.target.name] : e.target.value,
    })
    console.log(Data)
  }
  const onSubmitHanler=(e)=>{
    e.preventDefault()
    providerService.register(Data)
    .then((res)=>{
      console.log(res)
      localStorage.setItem("user" , JSON.stringify(res.data))
      navigate('/')
    })
    .catch((err)=>{
      console.log(err)
      Swal.fire({
          icon:'error',
          title:'Opps',
          text:"error",
          footer:""
      })
  })
  }
    return (
        <>
        
{/* partial:index.partial.html */}

<div className="contact__form">
  <h5 style={{textAlign:"center"}}>Login</h5>
  <form  onSubmit={onSubmitHanler}>
  <input type="text" placeholder="name" style={{width: "51%", marginLeft:"30%"}} name="name" onChange={onChangeHandler} />

    
    <input type="text" placeholder="Phone" style={{width: "51%", marginLeft:"30%"}} name="phones" onChange={onChangeHandler} />
    <input type="text" placeholder="Email" style={{width: "51%", marginLeft:"30%"}} name="email" onChange={onChangeHandler} />
    <input type="text" placeholder="Matricule" style={{width: "51%", marginLeft:"30%"}} name="matricule" onChange={onChangeHandler} />

     <input type="text" placeholder="company" style={{width: "51%", marginLeft:"30%"}} name="company" onChange={onChangeHandler} />
    <input type="text" placeholder="password" style={{width: "51%",marginLeft:"30%" }} name="password" onChange={onChangeHandler} /><br></br>
    <button type="submit" className="site-btn" style={{marginLeft: "70%",
    marginBottom: "3%", marginTop:"2%"}}>Connexion</button>
  </form>
</div>

{/* partial */}




        
        
        </>
    )
}

export default Registre