import React from "react";

export default function EventItem() {


    return (
        <div>
             <button class="bg-rose-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Add event</button>
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div class="bg-gray-100 px-4 py-2 flex justify-between items-center">
                    <h2 class="text-lg font-bold text-gray-800">Title</h2>
                    <button class="bg-rose-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Details</button>
                </div>
                <div>
                    <img src="mimik-frontend/public/assets/pexels-luis-quintero-2774556.jpg" alt=""/>
                </div>
                <div class="px-4 py-2">
                    <p class="text-gray-600">Event Details</p> <br/>    
                    
                    <span class="text-gray-600">Description:</span> <br/>
                    <span class="text-gray-600">Date:</span> <br/>
                    <span class="text-gray-600">Location:</span> <br/>
                    <span class="text-gray-600">Age Limit:</span> <br/>

                </div>
            </div>

        </div>
    )
}