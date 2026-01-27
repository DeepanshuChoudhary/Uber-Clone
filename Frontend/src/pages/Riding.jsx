import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>

            <Link to='/user/home' className='fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-6-line"></i>
            </Link>

            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif' alt='uber map image' />
            </div>

            <div className='h-1/2 px-3 pt-10'>
                <div className='flex items-center justify-between'>
                    <img className='h-15' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="Uber Ride" />

                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Aakash</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>DL01 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>


                <div className='flex gap-2 justify-between flex-col items-center'>
                    {/* <img className='h-25' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="Uber Ride" /> */}

                    <div className='w-full mt-5'>
                        
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

                </div>
                <button className='w-full mt-6 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding