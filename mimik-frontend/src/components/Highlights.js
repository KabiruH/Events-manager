import React from "react"


function Highlights(){

    
    return(
        <div className = "flex justify-evenly items-center w-3/4 m-auto h-[50vh] text-gray-700">
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-calendar-days"></i>
                </div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">24/7 AVAILABLE EVENTS</h3>
                <p className="text-center">Looking for exciting and engaging events to attend? Look no further than MIMiK, where we offer a variety of events for individuals of all ages and interests. </p>
            </div>
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-location-dot"></i></div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">GREAT LOCATIONS</h3>
                <p className="text-center">Whether you're hosting a corporate conference, wedding reception, or social gathering, our experienced team will work with you every step of the way to ensure your event is unforgettable. </p>
            </div>
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-users"></i></div>
                <h3 className="border-b-2 border-rose-600 pb-3 font-semibold">OPPORTUNITIES TO NETWORK</h3>
                <p className="text-center">Looking to expand your professional network? Don't miss out on our upcoming events! We provide numerous opportunities to network with like-minded individuals and industry leaders in a variety of fields. </p>
            </div>
                  
        </div>
    )
}

export default Highlights