import React from 'react'
import { TiTick } from "react-icons/ti";

interface Props {
  recommendation: any
}

const Card = (
  recommendation: any
) => {
  return (
    <div className="w-500px border w-full bg-neutral-900 bg-opacity-90 border-gray-400 rounded-xl p-6 shadow-lg">
      <div className="flex justify-between">
        <div className="flex items-center justify-start gap-x-4">
          <p className="text-2xl font-bold text-white">{recommendation.recommendation[0].touristPlace}</p>
          
          <div className="bg-green-400 bg-opacity-20 px-3 py-2 rounded-full">
            <p className="text-green-400 text-xs font-bold">{recommendation.recommendation[1]*100}% Match</p> 
          </div>
        </div>

        <div className="bg-primary rounded-full p-1 bg-opacity-20">
          <TiTick className="text-3xl text-primary" />
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        {recommendation.recommendation[0]?.subPlaces?.split(",").map((subPlace: string, index: number)=>
        <div key={index} className="text-sm font-bold rounded-md px-2 bg-white bg-opacity-10 text-gray-400">
          <p>{subPlace}</p>
        </div>)}
      </div>

      <div className="pt-6">
        <p className="text-gray-400 text-md">The Sundarbans is a vast mangrove forest located in the delta region of the Padma, Meghna, and Brahmaputra river basins. It spans the southern part of Bangladesh and the eastern part of India, covering an area of approximately 10,000 square kilometers (3,900 square miles). The Sundarbans is renowned for its unique ecosystem, rich biodiversity, and being the largest mangrove forest in the world.</p>
      </div>
    </div>
  )
}

export default Card