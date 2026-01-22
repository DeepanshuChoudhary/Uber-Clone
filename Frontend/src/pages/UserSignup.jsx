import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContent } from '../context/UserContext';

const UserSignup = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({});

    const navigate = useNavigate()

    const { user, setUser } = useContext(UserDataContent);


    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

        if (response.status === 201) {
            const data = response.data
            setUser(data.user)

            navigate('/home')
        }

        // console.log(userData);

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img className='w-18 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />

                <form onSubmit={handleSubmit}>

                    <h3 className='text-lg font-medium mb-2'>What's your name</h3>
                    <div className='flex gap-3 mb-7'>
                        <input
                            type="text"
                            required
                            placeholder='First name'
                            value={firstName}
                            onChange={handleFirstName}
                            className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-base placeholder:text-sm'
                        />
                        <input
                            type="text"
                            required
                            placeholder='Last name'
                            value={lastName}
                            onChange={handleLastName}
                            className='bg-[#eeeeee] rounded px-4 w-1/2 py-2 text-base placeholder:text-sm'
                        />
                    </div>

                    <h3 className='text-lg font-medium mb-2'>What's you email</h3>
                    <input
                        type="email"
                        required
                        placeholder='email@example.com'
                        value={email}
                        onChange={handleEmail}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-base placeholder:text-sm'
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                        type='password'
                        required
                        placeholder='Password ... '
                        value={password}
                        onChange={handlePassword}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-base placeholder:text-base'
                    />

                    <button className='bg-[#111] text-white rounded font-semibold mb-3 px-4 py-2 w-full text-lg placeholder:text-base'>Create account</button>


                </form>

                <p className='text-center'>Already have a account? <Link to='/user/login' className='text-blue-600'>Login here</Link>
                </p>

            </div>

            <div>
                <p className='text-[11px] mb-2 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
                {/* <Link to='/captain/login' className='bg-[#10b461] flex items-center justify-center text-white rounded font-semibold mb-7 px-4 py-2 w-full text-lg placeholder:text-base'>Login as Captain</Link> */}
            </div>
        </div>
    )
}

export default UserSignup