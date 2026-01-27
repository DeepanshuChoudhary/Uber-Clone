import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
    return (
        <div className='h-screen'>

            <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
                <img className='w-18' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
                <Link to='/captain/home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i class="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className='h-7/10'>
                <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif' alt='uber map image' />
            </div>

            <div className='h-2/5 p-6'>

                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-start gap-2'>
                        <img className='h-10 w-10 rounded-full object-cover' src="https://img.freepik.com/free-photo/happy-young-man-laughing_23-2148911860.jpg?semt=ais_hybrid&w=740&q=80" alt="Driver Image" />
                        <h4 className='text-lg font-medium'>Aryan Singh </h4>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>₹295.20</h4>
                        <p className='text-sm text-gray-600'>Earned</p>
                    </div>
                </div>

                <div className='flex mt-6 justify-center p-3 bg-gray-200 rounded-lg gap-6 items-start'>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-500'>Hours Online</p>
                    </div>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-500'>Hours Online</p>
                    </div>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-thin ri-sticky-note-line"></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-500'>Hours Online</p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default CaptainHome