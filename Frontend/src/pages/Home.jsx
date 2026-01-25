import React, { useReducer, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {

    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');

    const [panelOpen, setPanelOpen] = useState(false);
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault();
    }

    useGSAP(() => {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                // opacity: 1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        }
        else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
                // opacity: 0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [panelOpen, panelCloseRef])

    return (
        <div className='h-screen relative overflow-hidden'>

            <img className='left-7 top-7 w-18 mb-10 absolute' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />

            <div className='h-screen w-screen'>
                {/* Image for temporary */}
                <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:720/format:webp/0*gwMx05pqII5hbfmX.gif' alt='uber map image' />
            </div>

            <div className='absolute h-screen flex flex-col justify-end top-0 w-full'>
                <div className='h-[30%] p-6 bg-white relative'>
                    <h5
                        ref={panelCloseRef}
                        className='absolute top-6 opacity-0 right-6 text-2xl'
                        onClick={() => {
                            setPanelOpen(false)
                        }}
                    >
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className='line absolute h-16 w-[0.7%] top-[38%] left-10 bg-gray-800 rounded-full'></div>

                        <input
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
                            type="text"
                            placeholder='Add a pick-up location'
                            value={pickup}
                            onChange={(e) => {
                                setPickup(e.target.value)
                            }}
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                        />

                        <input
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
                            type="text"
                            placeholder='Enter your destination'
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value)
                            }}
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                        />
                    </form>
                </div>

                <div ref={panelRef} className='bg-white h-0'>
                    <LocationSearchPanel />
                </div>
            </div>

            <div className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
            
                <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            
                <div className='flex w-full border-2 mb-2 active:border-black border-gray-200 p-3 rounded-xl items-center justify-between'>
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
            
                <div className='flex w-full border-2 mb-2 active:border-black border-gray-200 p-3 rounded-xl items-center justify-between'>
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
            
                <div className='flex w-full border-2 mb-2 active:border-black border-gray-200 p-3 rounded-xl items-center justify-between'>
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
            
                <div className='flex w-full border-2 mb-2 active:border-black border-gray-200 p-3 rounded-xl items-center justify-between'>
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

        </div>
    )
}

export default Home