
'use client'

import Card from '@/components/chat/Card';
import Header from '@/components/common/Header'
import axios from 'axios';
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { MdHotel } from "react-icons/md";

// const recommendations = [
//   {
//     touristSpot: "Sundarban",
//     matchings: 34,
//     description: "The Sundarbans is a vast mangrove forest located in the delta region of the Padma, Meghna, and Brahmaputra river basins. It spans the southern part of Bangladesh and the eastern part of India, covering an area of approximately 10,000 square kilometers (3,900 square miles). The Sundarbans is renowned for its unique ecosystem, rich biodiversity, and being the largest mangrove forest in the world.",
//   },
//   {
//     touristSpot: "KuaKata",
//     matchings: 34,
//     description: "The Sundarbans is a vast mangrove forest located in the delta region of the Padma, Meghna, and Brahmaputra river basins. It spans the southern part of Bangladesh and the eastern part of India, covering an area of approximately 10,000 square kilometers (3,900 square miles). The Sundarbans is renowned for its unique ecosystem, rich biodiversity, and being the largest mangrove forest in the world.",
//   },
//   {
//     touristSpot: "Moinamoti",
//     matchings: 34,
//     description: "The Sundarbans is a vast mangrove forest located in the delta region of the Padma, Meghna, and Brahmaputra river basins. It spans the southern part of Bangladesh and the eastern part of India, covering an area of approximately 10,000 square kilometers (3,900 square miles). The Sundarbans is renowned for its unique ecosystem, rich biodiversity, and being the largest mangrove forest in the world.",
//   },
//   {
//     touristSpot: "Bandarban",
//     matchings: 34,
//     description: "The Sundarbans is a vast mangrove forest located in the delta region of the Padma, Meghna, and Brahmaputra river basins. It spans the southern part of Bangladesh and the eastern part of India, covering an area of approximately 10,000 square kilometers (3,900 square miles). The Sundarbans is renowned for its unique ecosystem, rich biodiversity, and being the largest mangrove forest in the world.",
//   },
// ]

const Page = () => {
  const [recom, setRecom] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)
  const textInputRef = useRef<HTMLInputElement>(null)

  const apiEndPoint = "http://127.0.0.1:8000/chat"

  const getData = async ()=>{
    try {
      setIsLoading(true)
      const response = await axios.post(apiEndPoint, {
        'prompt': textInputRef.current?.value
      });

      setIsLoading(false)
      console.log(response?.data?.recom)
      setRecom(response?.data?.recom)
    } catch (error) {
      setIsLoading(false)
      console.error('Error making POST request:', error);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    getData()
  }

  return (
    <div className="relative min-h-screen">
      <div className="p-4">
        <Header />
      </div>

      <div className="pt-20 flex flex-col justify-center">
        <h1 className="font-bold text-[32px] text-white text-center">How should be your <span className="text-primary">Tourist Spot</span>?</h1>
        
        <form onSubmit={handleSubmit} className="mx-auto py-6 flex gap-4">
          <input ref={textInputRef} className="md:w-[500px] h-[50px] px-5 bg-slate-200 outline-none text-gray-800 text-lg font-medium rounded-3xl border-2 shadow-2xl border-primary" type="text" name="" id="" />
          <button className="bg-primary w-[50px] items-center flex justify-center rounded-3xl">
            <IoIosSend className="text-4xl"/>
          </button>
        </form>
      </div>

      {isLoading && (
      <div className="flex justify-center w-ful py-20">
        <div role="status">
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>)}

      
      {!isLoading && recom.length > 0 && (
      <>
        <div className="mx-auto relative z-50 max-w-6xl mt-20 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recom.map((recommendation: any, index: number) => (
              <Card recommendation={recommendation} key={index}/>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-6">
          <div className="flex items-center gap-x-2 justify-end">
            <p className="text-lg font-bold text-white">Need a hotel?</p>
            <button className="bg-primary w-[50px] items-center flex justify-center rounded-xl">
              <MdHotel className="text-4xl"/>
            </button>
          </div>
        </div>
      </>)}


      <div className="absolute bottom-0 left-0">
        <Image alt="Guide me right" height={280} width={280} src="/robot.svg" />
      </div>
    </div>
  )
}

export default Page