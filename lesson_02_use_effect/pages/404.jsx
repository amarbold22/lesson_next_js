import React from 'react'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <div className="h-full">
        <div className="w-[642px] h-[208px] flex gap-8 items-center mx-auto my-24">
            <div className=" font-medium text-[72px]">404</div>
            <div className="bg-yellow-400 w-[1px] h-[150px]"></div>
            <div className="w-[392px] h-[188px] flex flex-col items-start py-2 justify-between gap-5">
              <div className="font-bold text-xl">Page Not Found</div>
              <div className="text-gray-500">We're sorry, This page is unknown or does not exist the page you are looking for</div>
              <Link href="/">
                <button className="bg-[#4B6BFB] p-2.5 rounded-md text-white">Back To Home</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage