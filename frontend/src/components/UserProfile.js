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
        navigate('/');
    }

  return (
    <>
        <h1>User:</h1>
        <p>Email: {userData.user.email}</p>
        <p>Username: {userData.user.username}</p>
        <p>Gender: {userData.user.gender}</p>
        <p>Address: {userData.user.address}</p>
        <p>District: {userData.user.district}</p>
        <p>State: {userData.user.state}</p>
        <p>Taluka: {userData.user.taluka}</p>
        <p>Phone_number: {userData.user.phone_number}</p>
        <p>Role: {userData.user.role}</p>
        <button type='button' onClick={() => logout()} className="btn btn-primary">Logout</button>
    </>
  )
}
