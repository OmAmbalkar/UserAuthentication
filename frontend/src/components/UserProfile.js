import React, {useContext, useEffect, useState} from 'react'
import { LoginContext } from '../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export const UserProfile = () => {
    const navigate = useNavigate();
    const {token, setToken} = useContext(LoginContext);
    const data = {
        user: {
            email: "",
            username: "",
            dob: null,
            gender: "",
            address: "",
            district: "",
            state: "",
            taluka: "",
            profile_pic: "",
            phone_number: "",
            role: "",
            created_at: "",
            updated_at: ""
        }
    }
    const [userData, setUserData] = useState(data)
    const getData = () => {
        if (token === ""){
            navigate('/')
        } else {
            var config = {
                method: 'get',
                url: 'https://a7ab-129-210-115-228.ngrok.io/authapi/getprofile',
                headers: { 
                'Authorization': `Bearer ${token}`
                }
            };
            
            axios(config)
            .then(function (response) {
                console.log(response.data)
                setUserData(response.data)
            })
            .catch(function (error) {
            console.log(error.message);
            });
        }

    }
    useEffect(()=>{
        getData()
    },[])

    const logout = () => {
        setToken('')
        alert("You Have Logged Out!!")
        navigate('/')
    }

  return (
    <>
    <h1 className='section2'>User Profile</h1>
        <table class="table table-borderless">
            <tbody>
                <tr>
                <td>Email</td>
                <td>{userData.user.email}</td>
                </tr>
                <tr>
                <td>Username</td>
                <td>{userData.user.username}</td>
                </tr>
                <tr>
                <td>Gender</td>
                <td>{userData.user.gender}</td>
                </tr><tr>
                <td>Address</td>
                <td>{userData.user.address}</td>
                </tr><tr>
                <td>District</td>
                <td>{userData.user.district}</td>
                </tr><tr>
                <td>State</td>
                <td>{userData.user.state}</td>
                </tr><tr>
                <td>Taluka</td>
                <td>{userData.user.taluka}</td>
                </tr><tr>
                <td>Phone_number</td>
                <td>{userData.user.phone_number}</td>
                </tr><tr>
                <td>Role</td>
                <td>{userData.user.role}</td>
                </tr>
            </tbody>
        </table>
        
        <button type='button' onClick={() => logout()} className="btn btn-primary">Logout</button>
    </>
  )
}
