import React from 'react'

const LocationSearchPanel = (props) => {

    // console.log(props)

    // sample array for location
    const location = [
        "A2/303, Saviour Park, Mohan Nagar, Ghaziabad",
        "A1/404, Saviour Park, Mohan Nagar, Ghaziabad",
        "A3/405, Saviour Park, Mohan Nagar, Ghaziabad",
        "B2/803, Saviour Park, Mohan Nagar, Ghaziabad",
        "B2/1103, Saviour Park, Mohan Nagar, Ghaziabad"
    ]

    return (
        <div>

            {/* This is just a Sample Data */}

            {
                location.map((elem, idx) => {
                    return <div key={idx} onClick={() => {
                        props.setVehiclePanelOpen(true)
                        props.setPanelOpen(false)
                    }} className='flex border-2 active:border-black border-gray-100 p-2 rounded-xl items-center my-2 justify-start gap-3'>
                        <h2 className='bg-[#eee] h-10 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                })
            }

        </div>
    )
}

export default LocationSearchPanel