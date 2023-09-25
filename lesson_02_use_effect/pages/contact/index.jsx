import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  const [count, setCount] = useState(100);

  const add = () => {
    setCount(count + 10);
  }

  const sub = () => {
    setCount(count - 10);
  }

  return (
    <main className="bg-slate-800 h-screen w-screen">
      <h1 className="py-6 text-5xl text-center text-violet-800 font-bold">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-900">Home Page</div>
      </h1>
      <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-cyan-300 py-6 text-center text-3xl">Тоолуурын утга: <span className="text-yellow-300">{count}</span></h3>
      <div className="flex justify-center gap-8">
        <button className="bg-gradient-to-r from-green-300 to-blue-400 text-white text-2xl rounded-lg px-6 py-3 hover:bg-gradient-to-l hover:scale-105" onClick={add}>Нэмэх</button>
        <button className="bg-gradient-to-r from-red-400 to-orange-300 text-white text-2xl rounded-lg px-6 py-3 hover:scale-105" onClick={sub}>Хасах</button>
      </div>
    </main>
  )
}