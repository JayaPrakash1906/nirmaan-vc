import React,{useState, useEffect} from 'react';
import "@fontsource/open-sans";
import '@fontsource/josefin-sans';
import image from '../assets/images/nirmaan-iitm.14fdf833.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import {FaGoogle } from 'react-icons/fa';
import { jwtDecode } from "jwt-decode";
import PuffLoader from "react-spinners/PuffLoader";

function Login() {  
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [viewPass, setViewPass] = useState(''); 
    const [formData, setFormData] = useState({
        user_mail: '',
        user_password: ''
    }) 
    const [loading, setLoading] = useState(false); 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value,
        }))
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
          }, 4000);
        try
        {
            const response = await axios.post('http://localhost:3001/api/v1/login', formData);
            if(!formData)
            {
                alertify.error('All fields are required to login');
            }
            else
            {
                const accessToken = response.data.result.accessToken;
                // console.log(jwtDecode(accessToken))
                const data = response.data.result.role;
                localStorage.setItem('token', accessToken);
                let x = localStorage.getItem('token');
                sessionStorage.setItem('role', data);
                setError('')
                if(!x)
                {
                    navigate('/');
                }
                else
                {
                    if(response.data.result.status === 'Login Authenticated')
                        {
                            if(response.data.result.role === 5)
                            {
                                navigate('/customer/home');
                            }
                            else if(response.data.result.role === 2)
                            {
                                navigate('/Home');
                            }
                            else
                            {
                               navigate('/');
                            }
                        }
                        else if(response.data.result.status === 'User_not_found')
                        {
                            alertify.error('User not found');
                        }
                        else if(response.data.authentication === 'Please enter username and password properly!')
                        {
                            alertify.error("Unknown Error");
                        }
                }          
            }
        }
        catch(error)
        {
            console.log("Login Failed" + error);
        }
    }
    return(
            <div className="flex w-full h-screen">
                <div className="w-full flex items-center justify-center lg:w-1/2">
                    <div className="bg-white px-10 py-20 rounded-xl border-2 border-green-400">
                    {error && <p>error</p>}
                    <form onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-semibold text-gray-600">LOG IN</h1>
                            <div className="mt-8">
                                <div>
                                    <label className="text-lg font-medium text-green-600">Email<span className="text-red-500">*</span></label>
                                    <input name="user_mail" value={formData.user_mail} onChange={handleChange}
                                        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent hover:border-green-300"
                                        placeholder="username@example.com"
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <label className="text-lg font-medium text-green-600">Password<span className="text-red-500">*</span></label>
                                    <input name="user_password" value={formData.user_password} onChange={handleChange}
                                        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent hover:border-green-300"
                                        placeholder="Password"
                                        type="password"
                                    />
                                </div>
                                <div className="mt-8 flex justify-between items-center">
                                    <button className="text-green-500">Forgot Password</button>
                                </div>
                                <div className='mt-3 flex flex-col gap-y-4'>
                                    <button className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all py-3 rounded-l bg-green-500 text-white text-lg font-bold flex items-center justify-center">{loading ? (<PuffLoader size={28} color="gold" ariaLabel="Loading"/>):('Log in')}</button>
                                    {/* <button className="active:scale-[.98] active:duration-75 hover:scale-[1.02] flex items-center items-center justify-center text-red-500"><FaGoogle />- <span className="font-bold text-blue-500">Log In</span></button> */}
                                </div>
                            </div>
                            </form>
                    </div>
                </div>
                <div className="hidden relative lg:flex flex-col items-center w-1/2 justify-center h-full bg-green-600">
                        <img src={image} alt={image} className="mb-4" width="30%"/>
                        <div className="text-4xl font-bold mb-4">TRA<span className="text-white">KTOR</span></div>
                        <div className="w-full flex justify-center font-semibold text-white">STARTUP MANAGEMENT PORTAL</div>
                </div>
            </div>
    );        
}

export default Login;