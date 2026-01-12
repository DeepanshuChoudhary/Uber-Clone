import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    return (
        <div className='p-7'>
            <div>
                <img className='w-18 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />

                <form>

                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        type="email"
                        required
                        placeholder='email@example.com'
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                        type='password'
                        required
                        placeholder='Password ... '
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                    />

                    <button className='bg-[#111] text-white rounded font-semibold mb-2 px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>

                    <Link className='text-blue-600'>Create new Account</Link>

                </form>
            </div>

            <div>
                <button className='bg-[#10b461] text-white rounded font-semibold mb-7 px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</button>
            </div>
        </div>
    )
}

export default UserLogin