import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './login.css'

function Signup() {

  const[data,setData] = useState({
    email: '',
    username:'',
    password:'',
    age:''
  })

  const navigate = useNavigate();
  const [error,setError]= useState('')

  const handleSubmit =(event)=>{
    event.preventDefault();
    const formdata = new FormData();
    formdata.append("email",data.name);
    formdata.append("username",data.username);
    formdata.append("password",data.password);
    formdata.append("age",data.age);
    axios.post('http://localhost:8081/signup',data)
    .then(res => {
      if(res.data.Status === "Sucess"){
        alert("User is Created. Login to Continue")
        navigate("/")
      }
      else{
        setError(res.data.Error);
      }
    })
    .catch(err => console.log(err));
  }

  return (

    <div className='container'>
    <div className='background'></div>
    <div className="login-form">
     <div className="fade">
     <img src="/image 16.png" alt="" />
       <p>Streamline your poultry farming with IoT device iRooster   for  efficient, sustainable results.</p>
     </div>
     <div className="content">
       <img src="/myflocklogo-removebg-preview 1.png" alt="" />
       <h2>Register</h2>
       <p>Please Fill in the details to continue</p>
   
       <div className="Error">
          {error && error}
        </div>
       <form onSubmit={handleSubmit}>
          <input className='register-form' type="email" placeholder='Enter Your Email' onChange={e=>setData({...data,email:e.target.value})} required name='Name' /><br />
          <input className='register-form' type="text" placeholder='Enter Your UserName' onChange={e=>setData({...data,username:e.target.value})} required name='UserName' /><br />
          <input className='register-form' type="password" placeholder='Enter Your Password' onChange={e=>setData({...data,password:e.target.value})} required name='Password' /><br />
          <input className='register-form' type="text" placeholder='Enter Your Age' onChange={e=>setData({...data,age:e.target.value})} required name='Age' /><br />
          <button className='register-submit' type='submit'>Submit</button>
       </form>
     </div>
    </div>
 </div>


  )
}

export default Signup