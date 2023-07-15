import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {

    const[values,setValues] = useState({
        email : '',
        password : ''
    })

    const navigate = useNavigate()

    const [error,setError]= useState('')

    const handleSubmit=(event) =>{
        event.preventDefault();
        axios.post('http://localhost:8081/login',values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/dashboard')
            }
            else{
                setError(res.data.Error)
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
        <h2>Login</h2>
        <p>Please Sign in to continue</p>
    
        <div className="Error">
           {error && error}
         </div>
        <form onSubmit={handleSubmit}>
          <input className='input' type="text" name='email' onChange={e => setValues({...values,email: e.target.value})} placeholder='Enter Your Email' /><br />
          <input className='input' type="password" name='password' onChange={e => setValues({...values,password: e.target.value})} placeholder='Enter Your Password' />
          <button type='submit'>Submit</button>
        </form>
        <p className='txt-register'>New to MyFlock? <Link to="/signup" className='link-reg'>Register</Link> </p>
      </div>
     </div>
  </div>
 
  )
}

export default Login