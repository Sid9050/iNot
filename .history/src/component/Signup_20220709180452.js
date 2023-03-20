import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Signup = () => {

    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
    let navigate=useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const {name,email,password}=credentials
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password})
          });
          const json= await response.json();
          console.log(json)
          if(json.success){
            //Save the authtoken and redirect
            localStorage.setItem('token',json.authtoken)
            navigate('/')
          }
          else{
            alert("Invalid credentials")
          }
    }

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name] : e.target.value})
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} required min/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} name="email" required min/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} required min/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} required min/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup