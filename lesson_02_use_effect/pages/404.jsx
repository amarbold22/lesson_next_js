import React from 'react'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <div className="container mx-auto h-96 bg-violet-400">
        <div className="flex flex-col items-center">
            <h1 className="text-red-400 text-5xl">Huudas oldsongui</h1>
            <div className="text-4xl font-bold">
                <Link href="/">Home Page</Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage