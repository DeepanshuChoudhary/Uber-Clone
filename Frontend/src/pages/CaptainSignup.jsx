import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {

    const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('')
    
        const [userData, setUserData] = useState({});
    
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
    
        const handleSubmit = (e) => {
            e.preventDefault();
    
            setUserData({
                fullName:{
                    FirstName: firstName,
                    LastName: lastName
                },
                Email: email,
                Password: password
            })
    
            console.log(userData);
    
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
        }

    return (
        <div className='p-7 flex flex-col justify-between h-screen'>
            <div>
                <img className='w-20 mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="Uber Logo" />

                <form onSubmit={handleSubmit}>

                    <h3 className='text-lg w-full font-medium mb-2'>What's our Captain's name</h3>
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

                    <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
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

                    <button className='bg-[#111] text-white rounded font-semibold mb-3 px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>


                </form>

                <p className='text-center'>Already have a account? <Link to='/captain/login' className='text-blue-600'>Login here</Link>
                </p>

            </div>

            <div>
                <p className='text-[11px] mb-2 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
                {/* <Link to='/captain/login' className='bg-[#10b461] flex items-center justify-center text-white rounded font-semibold mb-7 px-4 py-2 w-full text-lg placeholder:text-base'>Login as Captain</Link> */}
            </div>
        </div>
    )
}

export default CaptainSignup