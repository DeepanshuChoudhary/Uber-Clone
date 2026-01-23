import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios'

const CaptainSignup = () => {

    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('')
    // const [userData, setUserData] = useState({});

    const [ vehicleColor, setVehicleColor ] = useState('')
    const [ vehiclePlate, setVehiclePlate ] = useState('')
    const [ vehicleCapacity, setVehicleCapacity ] = useState('')
    const [ vehicleType, setVehicleType ] = useState('')


    const { captain, setCaptain } = useContext(CaptainDataContext)

    const navigate = useNavigate()

    // const handleChange = (setter) => (e) => setter(e.target.value)

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

        const captainData = ({
            fullName: {
                firstName: firstName,
                lastName: lastName
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        })

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData)

        console.log(response);

        if(response === 201) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain/home');
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
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

                    <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                    <div className='flex gap-4 mb-7'>

                        <input 
                            type="text"
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 text-lg placeholder:text-base'
                            placeholder='Vehicle Color'
                            value={vehicleColor}
                            onChange={(e) => {setVehicleColor(e.target.value)}}
                        />

                        <input 
                            type='text'
                            required
                            value={vehiclePlate}
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 text-lg placeholder:text-base'
                            placeholder='Vehicle Plate'
                            onChange={(e) => {
                                setVehiclePlate(e.target.value)
                            }}
                        />

                    </div>

                    <div className='flex gap-4 mb-7'>

                        <select 
                            required
                            value={vehicleCapacity}
                            className={`bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 text-base
                                ${vehicleCapacity === "" ? "text-gray-500" : "text-black"}
                            `}
                            onChange={(e) => {
                                setVehicleCapacity(e.target.value)
                            }}
                        >
                            <option value="" disabled>Vehicle Capacity</option>     
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>

                        </select>
                        
                        <select 
                            required
                            className={`bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 text-base
                                ${vehicleType === '' ? 'text-gray-500' : 'text-black'}
                            `}
                            value={vehicleType}
                            onChange={(e) => {
                                setVehicleType(e.target.value)
                            }}
                        >

                            <option value="" disabled>Vehicle Type</option>
                            <option value="Car">Car</option>
                            <option value="Autorickshaw">Autorickshaw</option>
                            <option value="Motorcycle">Motorcycle</option>
                            
                        </select>

                    </div>

                    <button className='bg-[#111] text-white rounded font-semibold mb-3 px-4 py-2 w-full text-lg placeholder:text-base'>Create Captain account</button>


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