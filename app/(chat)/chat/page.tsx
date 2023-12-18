import Card from '@/components/chat/Card';
import Header from '@/components/common/Header'
import Image from 'next/image';
import React from 'react'
import { IoIosSend } from "react-icons/io";
import { MdHotel } from "react-icons/md";

const recommendations = [
  {
    touristSpot: "Sundarban",
    matchings: 34,
    description: "The Sundarbans is a vast mangrove forest located in the delta region of the Padma, Meghna, and Brahmaputra river basins. It spans the southern part of Bangladesh and the eastern part of India, covering an area of approximately 10,000 square kilometers (3,900 square miles). The Sundarbans is renowned for its unique ecosystem, rich biodiversity, and being the largest mangrove forest in the world.",
  },
  {
    touristSpot: "KuaKata",
    matchings: 34,
    description: "The Sundarbans is a vast mangrove forest located in the delta region of the Padma, Meghna, and Brahmaputra river basins. It spans the southern part of Bangladesh and the eastern part of India, covering an area of approximately 10,000 square kilometers (3,900 square miles). The Sundarbans is renowned for its unique ecosystem, rich biodiversity, and being the largest mangrove forest in the world.",
  },
  {
    touristSpot: "Moinamoti",
    matchings: 34,
    description: "The Sundarbans is a vast mangrove forest located in the delta region of the Padma, Meghna, and Brahmaputra river basins. It spans the southern part of Bangladesh and the eastern part of India, covering an area of approximately 10,000 square kilometers (3,900 square miles). The Sundarbans is renowned for its unique ecosystem, rich biodiversity, and being the largest mangrove forest in the world.",
  },
  {
    touristSpot: "Bandarban",
    matchings: 34,
    description: "The Sundarbans is a vast mangrove forest located in the delta region of the Padma, Meghna, and Brahmaputra river basins. It spans the southern part of Bangladesh and the eastern part of India, covering an area of approximately 10,000 square kilometers (3,900 square miles). The Sundarbans is renowned for its unique ecosystem, rich biodiversity, and being the largest mangrove forest in the world.",
  },
]

const Page = () => {
  return (
    <div className="relative min-h-screen">
      <div className="p-4">
        <Header />
      </div>

      <div className="pt-20 flex flex-col justify-center">
        <h1 className="font-bold text-[32px] text-white text-center">How should be your <span className="text-primary">Tourist Spot</span>?</h1>
        
        <form className="mx-auto py-6 flex gap-4">
          <input className="md:w-[500px] h-[50px] px-5 bg-slate-200 outline-none text-gray-800 text-lg font-medium rounded-3xl border-2 shadow-2xl border-primary" type="text" name="" id="" />
          <button className="bg-primary w-[50px] items-center flex justify-center rounded-3xl">
            <IoIosSend className="text-4xl"/>
          </button>
        </form>
      </div>

      <div className="mx-auto relative z-50 max-w-6xl mt-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((recommendation, index) => (
            <Card key={index}/>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 p-6">
        <div className="flex items-center gap-x-2 justify-end">
          <p className="text-lg font-bold text-white">Need a hotel?</p>
          <button className="bg-primary w-[50px] items-center flex justify-center rounded-xl">
            <MdHotel className="text-4xl"/>
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0">
        <Image alt="Guide me right" height={280} width={280} src="/robot.svg" />
      </div>
    </div>
  )
}

export default Page