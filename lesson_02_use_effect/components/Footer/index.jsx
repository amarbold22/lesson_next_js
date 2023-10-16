import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col mx-auto max-w-[900px] justify-center pt-[64px]">
        <div className="flex flex-col ml-[150px] md:mx-auto md:gap-40 md:flex-row md:justify-between pb-[10px]">
            <div className="w-[280px]">
                <div className="font-bold text-2xl">About</div>
                <div className="pt-3 text-gray-400 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                <div className="pt-6"><span className="font-bold">E-mail</span>: info@jstemplate.net</div>
                <div><span className="font-bold">Phone</span>: 880 123 456 789</div>
            </div> 
            <div className="flex flex-row gap-8 mt-4 md:mt-0 md:flex md:flex-col md:gap-2 justify-start">
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </div> 
            <div className="flex gap-[26px] h-[40px] mt-6 lg:mt-0">
                <FaFacebook className="w-[30px] h-[30px]"/>
                <FaTwitter className="w-[30px] h-[30px]"/>
                <FaInstagram className="w-[30px] h-[30px]"/>
                <FaLinkedin className="w-[30px] h-[30px]"/>
            </div> 
        </div>
        <hr className="mt-3"/>
        <div className="max-w-[768px] mx-auto sm:ml-[150px] lg:justify-between mt-12 pb-8 flex-col lg:flex lg:flex-row lg:pt-0">
            <div className="flex items-center">
                <img className="rounded-xl pr-4 hidden lg:inline-block" src="smallLogo.jpg" alt="logo"/>
                <div className="flex flex-col">
                    <div className="text-xl">Meta<span className="font-bold">Blog</span></div>
                    <div>© All rights Reserved</div>
                </div>
            </div>
            <div className="flex flex-col md:flex md:flex-row gap-2 mt-6 lg:mt-0">
                <div>Terms Of Use</div>
                <hc/>
                <div>Private Policy</div>
                <hc/>
                <div>Cookie Policy</div>
            </div>
        </div>
    </section>
  )
}

export default Footer