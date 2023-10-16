import React from 'react'

const Contact = () => {
  return (
    <section className="container mx-auto py-20">
        <div className="container mx-auto w-[895px]">
            <div className="container mx-auto w-[640px] flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Contact Us</h1>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="flex justify-between">
                    <div className="w-[300px] flex flex-col gap-2.5 border-gray-300 border-2 rounded-xl p-4">
                        <h1>Address</h1>
                        <p className="">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                    </div>
                    <div className="w-[300px] flex flex-col gap-2.5 border-gray-300 border-2 rounded-xl p-4">
                        <h1>Contact</h1>
                        <p className="">313-332-8662
                        info@email.com</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto w-[640px] rounded-md bg-gray-300 mt-6 pl-5 pr-40 flex flex-col gap-4">
                <h1 className="pt-4 text-2xl font-semibold">Leave a Message</h1>
                <div className="flex justify-between w-">
                        <input className="w-[220px] px-4 py-2 border rounded-md" placeholder="Your Name"/>
                        <input className="w-[220px] px-4 py-2 border rounded-md" placeholder="Your Email"/>    
                </div>
                <input className="px-4 py-2 border rounded-md" placeholder="Subject"/>
                <input className="h-40 px-4 py-2 border rounded-md placeholder:" placeholder="Write a Message"/>
                <span>
                    <button className="rounded-md text-white bg-blue-400 px-6 py-2 mb-6">Send Message</button>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Contact