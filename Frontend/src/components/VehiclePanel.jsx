import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div>
            <h5
                onClick={() => {
                    props.setVehiclePanel(false)
                }}
                className='p-2 text-xl text-center absolute top-0 w-[93%]'
            >
                <i className="font-semibold text-gray-400 ri-arrow-down-wide-line"></i>
            </h5>

            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className='flex w-full border-2 mb-2 active:border-black border-gray-200 p-3 rounded-xl items-center justify-between'>
                <div className='w-[30%]'>
                    <img className='h-15' src='https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png' alt='Uber Car' />
                </div>
                <div className='w-1/2'>
                    <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹193.20</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className='flex w-full border-2 mb-2 active:border-black border-gray-200 p-3 rounded-xl items-center justify-between'>
                <div className='w-[30%]'>
                    <img className='h-15' src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mY2RkZWNhYS0yZWVlLTQ4ZmUtODdmMC02MTRhYTdjZWU3ZDMucG5n' alt='Uber Car' />
                </div>
                <div className='w-1/2'>
                    <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹65.00</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className='flex w-full border-2 mb-2 active:border-black border-gray-200 p-3 rounded-xl items-center justify-between'>
                <div className='w-[30%]'>
                    <img className='h-15' src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n' alt='Uber Car' />
                </div>
                <div className='w-1/2'>
                    <h4 className='font-medium text-lg'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Affordable, Auto ride</p>
                </div>
                <h2 className='text-lg font-semibold'>₹118.21</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
            }} className='flex w-full border-2 mb-2 active:border-black border-gray-200 p-3 rounded-xl items-center justify-between'>
                <div className='w-[30%]'>
                    <img className='h-15' src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9iYWRmYjFkNi02YzJiLTQ1NTMtYjkyOS05ZmYzMmYwMmE1NWUucG5n' alt='Uber Car' />
                </div>
                <div className='w-1/2'>
                    <h4 className='font-medium text-lg'>UberLAX <span><i className="ri-user-3-fill"></i>6</span></h4>
                    <h5 className='font-medium text-sm'>4 mins away</h5>
                    <p className='font-normal text-xs text-gray-600'>Comfortable, spacious ride</p>
                </div>
                <h2 className='text-lg font-semibold'>₹538.10</h2>
            </div>
        </div>
    )
}

export default VehiclePanel