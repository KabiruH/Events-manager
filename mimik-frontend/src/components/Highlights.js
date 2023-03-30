function Highlights(){
    return(
        <div className = "flex justify-evenly items-center w-3/4 m-auto h-[50vh] text-gray-700">
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-calendar-days"></i>
                </div>
                <h3 className="border-b-2 border-rose-600 pb-3">24/7 AVAILABLE EVENTS</h3>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.</p>
            </div>
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-location-dot"></i></div>
                <h3 className="border-b-2 border-rose-600 pb-3">GREAT LOCATIONS</h3>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.</p>
            </div>
            <div className="flex flex-col gap-4 items-center w-60">
                <div className="rounded-full h-40 w-40 bg-gray-400 flex items-center justify-center text-white text-4xl hover:bg-rose-600"><i className="fa-solid fa-users"></i></div>
                <h3 className="border-b-2 border-rose-600 pb-3">OPPORTUNITIES TO NETWORK</h3>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo.</p>
            </div>
                  
        </div>
    )
}

export default Highlights