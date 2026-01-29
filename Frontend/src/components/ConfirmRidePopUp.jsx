import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setConfirmRidePopupPanel(false)
                }}
                className='p-2 text-xl text-center absolute top-0 w-[93%]'
            >
                <i className="font-semibold text-gray-400 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm Ride Available!</h3>

            <div className='flex items-center bg-yellow-400 mt-3 p-3 rounded-lg justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src='https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Driver Profile Picture' />
                    <h2 className='text-lg font-medium'>Aryan Singh</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 km</h5>
            </div>

            <div className='flex gap-2 justify-between flex-col items-center'>

                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-2 border-gray-300 border-b-1'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600'>Kaikondrahalli, Bengaluru, Karnataka</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-2 border-gray-300 border-b-1'>
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>Third Wave Coffee</h3>
                            <p className='text-sm text-gray-600'>17th Cross Rd, PWD Wuarters, 1st Sector, HSR Layout, Bengaluru, Karnataka</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-2 border-gray-300'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-sm text-gray-600'>Payment Cash</p>
                        </div>
                    </div>
                </div>

                <Link to='/captain/riding' className='text-center w-full mt-3 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</Link>

                <button onClick={() => {
                    props.setConfirmRidePopupPanel(false)
                    props.setRidePopupPanel(false)
                }}
                    className='w-full mt-1 bg-red-500 text-white font-semibold p-2 rounded-lg'>Cancel</button>

            </div>
        </div>
    )
}

export default ConfirmRidePopUp