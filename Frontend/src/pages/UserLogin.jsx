import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const handleEmail = (e) => {
        setEmail(e.target.value)
        // console.log(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email)
        // console.log(password)

        setUserData({
            email: email,
            password: password
        })

        console.log(userData);

        setEmail('')
        setPassword('')
    }

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img className='w-18 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />

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
                
                <p className='text-center'>New here? <Link to='/user/signup' className='text-blue-600'>Create new Account</Link>
                </p>
            
            </div>

            <div>
                <Link to='/captain/login' className='bg-[#10b461] flex items-center justify-center text-white rounded font-semibold mb-7 px-4 py-2 w-full text-lg placeholder:text-base'>Login as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin