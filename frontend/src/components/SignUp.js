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
        district: "",
        state: "",
        taluka: "",
        profile_pic: "profilepic",
        phone_number: "",
        role: "Student",
        password: ""
    }
    const [formData, setFormData] = useState(initialSignUpState);
   
    const submitSignUp = () =>{
        console.log(formData)
        if (formData.email === "" || formData.username === "" || formData.address === "" || formData.password === "" || formData.state === "" || formData.district === "" || formData.taluka === "" || formData.phone_number === "" ) {
            if (formData.email === "") {
                alert("Please Enter Email.")
            } else if (formData.username == "" ) {
                alert("Please Enter Username")
            } else if (formData.address == "" ) {
                alert("Please Enter Address")
            } else if (formData.password == "" ) {
                alert("Please Enter Password")
            }
            else if (formData.state == "" ) {
                alert("Please Enter State")
            }
            else if (formData.district == "" ) {
                alert("Please Enter District")
            }
            else if (formData.taluka == "" ) {
                alert("Please Enter Taluka")
            }
            else if (formData.phone_number == "" ) {
                alert("Please Enter Phone")
            }
        } else if (formData.password.length < 8) {
            alert("Please Enter Password with more than or equal to 8 characters")
        }
        else {
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
                setFormData(initialSignUpState)
                alert("User Created");
            })
            .catch(function (error) {
                alert("Username In Use!! Please choose another one.")
            });
        }
    }
    
    let initialLoginState = {
        username: '',
        password: ''
    }
    const [loginFormData, setLoginFormData] = useState(initialLoginState);
    const submitLogin = () =>{
        if (loginFormData.username === "" || loginFormData.password==""){
            if (loginFormData.username === ""){
                alert("Please enter Username !!")
            } else {
                alert("Please enter Password !!")
            }
        } else {

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
                setLoginFormData(initialLoginState)
                setToken(response.data.token)
                alert("User Logged In");
                navigate('/user');
            })
            .catch(function (error) {  
                alert("Invalid Credentials!!")
            });
        }
    }
  return (
    <div>
        <div className='row'>
            <div className='col-lg-6 section1'>
            <form>
                    <h3>Sign Up</h3>
                    <div className="form-group space">
                        <label>Email address</label>
                        <input type="email"  onChange={(e)=>setFormData({...formData, email: e.target.value})} value={formData.email} className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group space">
                        <label>Username</label>
                        <input type="text" onChange={(e)=>setFormData({...formData, username: e.target.value})} value={formData.username} className="form-control" placeholder="Enter Username" />
                    </div>
                    <div className="form-group space">
                        <label>Phone</label>
                        <input type="number" onChange={(e)=>setFormData({...formData, phone_number: e.target.value})} value={formData.phone_number} className="form-control" placeholder="Enter Phone" />
                    </div>
                    <div className="form-group space">
                        <label>Address</label>
                        <input type="text" onChange={(e)=>setFormData({...formData, address: e.target.value})} value={formData.address} className="form-control" placeholder="Enter Address" />
                    </div>
                    <div className="form-group space">
                        <label>District</label>
                        <input type="text" onChange={(e)=>setFormData({...formData, district: e.target.value})} value={formData.district} className="form-control" placeholder="Enter District" />
                    </div>
                    <div className="form-group space">
                        <label>State</label>
                        <input type="text" onChange={(e)=>setFormData({...formData, state: e.target.value})} value={formData.state} className="form-control" placeholder="Enter State" />
                    </div>
                    <div className="form-group space">
                        <label>Taluka</label>
                        <input type="text" onChange={(e)=>setFormData({...formData, taluka: e.target.value})} value={formData.taluka} className="form-control" placeholder="Enter Taluka" />
                    </div>
                    <div className="form-group space">
                        <label for="role">Role</label>
                        <select className="form-control" id="role" onChange={(e)=>setFormData({...formData, role: e.target.value})} >
                        <option value="Student">Student</option>
                        <option value="Faculty">Faculty</option>
                        </select>
                    </div>
                    <div className="form-group space">
                        <label for="gender">Gender</label>
                        <select className="form-control" id="gender" onChange={(e)=>setFormData({...formData, gender: e.target.value})}>
                        <option value="M">M</option>
                        <option value="F">F</option>
                        </select>
                    </div>
                    <div className="form-group space">
                        <label>Password</label>
                        <input type="password" onChange={(e)=>setFormData({...formData, password: e.target.value})} value={formData.password} className="form-control" placeholder="Enter password" />
                    </div><br></br>
                    <button type="button" onClick={submitSignUp} className="btn btn-primary btn-block">Sign Up</button>
                </form>
            </div>
            <div className='col-lg-6 section1'>
                <form>
                    <h3>Sign In</h3>
                    <div className="form-group space">
                        <label>Username</label>
                        <input type="username" className="form-control" onChange={(e)=>setLoginFormData({...loginFormData, username: e.target.value})} value={loginFormData.username} placeholder="Enter username" />
                    </div>
                    <div className="form-group space">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={(e)=>setLoginFormData({...loginFormData, password: e.target.value})} value={loginFormData.password} placeholder="Enter password" />
                    </div><br></br>
                    <button type="button" onClick={() => submitLogin()} className="btn btn-primary btn-block">Log In</button>
                </form>
            </div>
        </div>
    </div>
  )
}
