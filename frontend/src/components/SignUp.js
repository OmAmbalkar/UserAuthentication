import React, {useState, useContext} from 'react'
import axios from 'axios';
import { LoginContext } from '../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';
export const SignUp = () => {
    const navigate = useNavigate();
    const {setToken} = useContext(LoginContext);

    let initialSignUpState = {
        email: "",
        username: "",
        gender: "M",
        address: "",
        district: "SantaClara",
        state: "California",
        taluka: "BayArea",
        profile_pic: "link_to_picture",
        phone_number: "66928811",
        role: "Student",
        password: ""
    }
    const [formData, setFormData] = useState(initialSignUpState);
   
    const submitSignUp = () =>{

        var config = {
            method: 'post',
            url: 'https://a7ab-129-210-115-228.ngrok.io/authapi/users/',
            headers: { 
              'Authorization': 'secret_key django-insecure-b@$s0n&mw5v$k-)v(nt7u$%f6_s*c*qm8+7g^gbx9utpry$(x6', 
              'Content-Type': 'application/json'
            },
            data : formData
          };
        
        axios(config)
        .then(function (response) {
            console.log(response);
            setFormData(initialSignUpState)
            alert("User Created");
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    let initialLoginState = {
        username: '',
        password: ''
    }
    const [loginFormData, setLoginFormData] = useState(initialLoginState);
    const submitLogin = () =>{
        var config = {
            method: 'post',
            url: 'https://a7ab-129-210-115-228.ngrok.io/authapi/users/login/',
            headers: { 
                'Authorization': 'secret_key django-insecure-b@$s0n&mw5v$k-)v(nt7u$%f6_s*c*qm8+7g^gbx9utpry$(x6', 
                'Content-Type': 'application/json'
            },
            data : {user: loginFormData}
          };
        
        axios(config)
        .then(function (response) {
            console.log(response);
            setLoginFormData(initialLoginState)
            setToken(response.data.token)
            alert("User Logged In");
            navigate('/user');
        })
        .catch(function (error) {
            console.log(error.message);
        });

    }
  return (
    <div>
        <div className='row'>
            <div className='col-lg-6'>
            <form>
                    <h3>Sign Up</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email"  onChange={(e)=>setFormData({...formData, email: e.target.value})} value={formData.email} className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" onChange={(e)=>setFormData({...formData, username: e.target.value})} value={formData.username} className="form-control" placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" onChange={(e)=>setFormData({...formData, address: e.target.value})} value={formData.address} className="form-control" placeholder="Enter Address" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={(e)=>setFormData({...formData, password: e.target.value})} value={formData.password} className="form-control" placeholder="Enter password" />
                    </div>
                    <button type="button" onClick={submitSignUp} className="btn btn-primary btn-block">Sign Up</button>
                </form>
            </div>
            <div className='col-lg-6'>
                <form>
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="username" className="form-control" onChange={(e)=>setLoginFormData({...loginFormData, username: e.target.value})} value={loginFormData.username} placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={(e)=>setLoginFormData({...loginFormData, password: e.target.value})} value={loginFormData.password} placeholder="Enter password" />
                    </div>
                    <button type="button" onClick={() => submitLogin()} className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
