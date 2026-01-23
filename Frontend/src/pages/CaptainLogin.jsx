import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    // const [captainData, setCaptainData] = useState({})

    const { captain, setCaptain } = useContext(CaptainDataContext); 

    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value)
        // console.log(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(email)
        // console.log(password)

        const newCaptain = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, newCaptain)

        // console.log(response);

        if(response.status === 200) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token)

            navigate('/captain/home')
        }

        setEmail('')
        setPassword('')
    }

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img className='w-20 mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="Uber Driver Logo" />

                <form onSubmit={handleSubmit}>

                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmail}
                        required
                        placeholder='email@example.com'
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                        type='password'
                        required
                        value={password}
                        onChange={handlePassword}
                        placeholder='Password ... '
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                    />

                    <button className='bg-[#111] text-white rounded font-semibold mb-3 px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>


                </form>

                <p className='text-center'>Join a fleet? <Link to='/captain/signup' className='text-blue-600'>Register as a Captain</Link>
                </p>

            </div>

            <div>
                <Link to='/user/login' className='bg-[#d5622d] flex items-center justify-center text-white rounded font-semibold mb-7 px-4 py-2 w-full text-lg placeholder:text-base'>Login as a User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin