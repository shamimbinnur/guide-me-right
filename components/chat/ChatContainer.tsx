"use client";

import axios from 'axios'
import React, { useRef, useState } from 'react'

const ChatContainer = () => {
  const [textInput, setTextInput] = useState("")
  const [recom, setRecom] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)

  const [status, setStatus] = useState("")

  const textInputRef = useRef<HTMLTextAreaElement>(null)

  const apiEndPoint = "http://127.0.0.1:8000/test2"
  const randomReplyText = [
    "Here is the recommendation is based on your preferences",
  ]

  const getData = async ()=>{
    try {
      setIsLoading(true)
      const response = await axios.post("http://127.0.0.1:8000/test2", {
        'prompt': textInput
      });

      setIsLoading(false)
      setRecom(response?.data?.recom || null)
      console.log(response?.data?.recom)
    } catch (error) {
      setIsLoading(false)
      console.error('Error making POST request:', error);
    }
  }

  return (
    <div className="w-[800px] mx-auto px-4">

      <div className="mx-auto w-[800px] flex flex-col gap-8">
        {
          recom && recom.map((item: any, index: number)=>(
            <div key={index} className="p-4 rounded-md bg-gray-300 flex gap-4">
              <div>
                <p>Place: {item[0].District}</p>
                <p>Air Conditioner: {item[0].HasAircondition}</p>
                <p>Per day living cost: {item[0].LivingCostPerDay}</p>
                <p>Neatest hotel: {item[0].NearestHotel}</p>
                <p>Star rating: {item[0].StarRating}</p>
                <p>Tourist Spot: {item[0].TouristSpot}</p>
              </div>
              <div>
                <p>Food: {item[0].foods}</p>
                <p>Gym Availability: {item[0].hasGym}</p>
                <p>Type: {item[0].isAquatic ? "Aquatic" : "Terrestrial" }</p>
                <p>Sl: {item[0].sl}</p>
              </div>
            </div>
          ))
        }
      </div>
    
      <div className="bg-grey-800 bottom-0 mx-auto flex gap-4 left-0 right-0 p-2 absolute w-[800px] h-[100px]">
        <textarea
        ref={textInputRef}
        value={textInput}
        onChange={
          (e)=> setTextInput(e.target.value)
        }
        className="bg-slate-400 w-full h-full p-2 rounded-md">

        </textarea>

        <button disabled={isLoading} onClick={getData} className="px-4 rounded-md text-white font-bold bg-green-600">Send</button>
      </div>
    </div>
  )
}

export default ChatContainer