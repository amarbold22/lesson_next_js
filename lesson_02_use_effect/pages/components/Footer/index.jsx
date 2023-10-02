import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section class="flex px-[150px] justify-center lg:flex flex-col md:mx-[200px] pt-[64px]">
        <div class="flex flex-col lg:flex-row lg:justify-between pb-[10px]">
            <div class="w-[280px]">
                <div class="font-bold text-2xl">About</div>
                <div class="pt-3 text-gray-400 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                <div class="pt-6"><span class="font-bold">E-mail</span>: info@jstemplate.net</div>
                <div><span class="font-bold">Phone</span>: 880 123 456 789</div>
            </div> 
            <div class="flex flex-row gap-8 mt-4 lg:mt-0 lg:flex lg:flex-col lg:gap-2 justify-start">
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </div> 
            <div class="flex gap-[26px] h-[40px] mt-6 lg:mt-0">
                <FaFacebook class="w-[30px] h-[30px]"/>
                <FaTwitter class="w-[30px] h-[30px]"/>
                <FaInstagram class="w-[30px] h-[30px]"/>
                <FaLinkedin class="w-[30px] h-[30px]"/>
            </div> 
        </div>
        <hr class="mt-3"/>
        <div class="pt-6 pb-8 flex-col lg:flex lg:flex-row lg:pt-0 justify-between items-center ">
            <div class="flex items-center">
                <img class="rounded-xl pr-4 hidden lg:inline-block" src="smallLogo.jpg" alt="logo"/>
                <div class="flex flex-col">
                    <div class="text-xl">Meta<span class="font-bold">Blog</span></div>
                    <div>© All rights Reserved</div>
                </div>
            </div>
            <div class="flex flex-col md:flex md:flex-row gap-2 mt-6 lg:mt-0">
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