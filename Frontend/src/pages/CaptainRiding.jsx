import React from 'react'
import { Link } from 'react-router-dom'

const CaptainRiding = () => {
    return (
        <div className='h-screen'>

            <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
                <img className='w-18' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
                <Link to='/captain/logout' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif' alt='uber map image' />
            </div>

            <div className='h-1/5 p-6 bg-yellow-400 relative flex items-center justify-between'>
                <h5
                    onClick={() => {

                    }}
                    className='p-2 text-xl text-center absolute top-0 w-[95%]'
                >
                    <i className="font-semibold text-gray-900 ri-arrow-down-wide-line"></i>
                </h5>
                <h4 className='text-xl font-semibold'>4 km away</h4>
                <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>

        </div>
    )
}

export default CaptainRiding