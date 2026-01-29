import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
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
                    <p className='text-sm text-gray-600'>Hours Online</p>

                </div>

            </div>

        </div>
    )
}

export default CaptainDetails