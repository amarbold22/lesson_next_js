import React from 'react'

const Contact = () => {
  return (
    <section className="container mx-auto py-20">
        <div className="container mx-auto">
            <div className="container mx-auto flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <h1>Contact Us</h1>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className="flex gap-[50px]">
                    <div className="flex flex-col gap-2.5 border border-gray-300 rounded-xl p-4">
                        <h1>Address</h1>
                        <p className="">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                    </div>
                    <div className="flex flex-col gap-2.5 border border-gray-300 rounded-xl p-4">
                        <h1>Contact</h1>
                        <p className="">313-332-8662
                        info@email.com</p>
                    </div>
                </div>
            </div>
            <div className="container"></div>
        </div>
    </section>
  )
}

export default Contact