import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section class="lg:flex flex-col px-auto hidden xl:mx-[400px] pt-[64px]">
        <div class="flex justify-between pb-[10px]">
            <div class="w-[280px]">
                <div class="font-bold text-2xl">About</div>
                <div class="pt-3 text-gray-400 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                <div class="pt-6"><span class="font-bold">E-mail</span>: info@jstemplate.net</div>
                <div><span class="font-bold">Phone</span>: 880 123 456 789</div>
            </div> 
            <div class="flex flex-col gap-2 justify-start">
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </div> 
            <div class="flex gap-[26px]">
                <FaFacebook class="w-[30px] h-[30px]"/>
                <FaTwitter class="w-[30px] h-[30px]"/>
                <FaInstagram class="w-[30px] h-[30px]"/>
                <FaLinkedin class="w-[30px] h-[30px]"/>
            </div> 
        </div>
        <hr class="mt-3"/>
        <div class="pt-4 flex justify-between items-center ">
            <div class="flex items-center">
                <img class="rounded-xl w-30 h-20 hidden lg:inline-block" src="https://www.creativefabrica.com/wp-content/uploads/2020/07/01/Letter-B-logo-to-business-or-technology-Graphics-4517437-1.jpg" alt="logo"/>
                <div class="flex flex-col">
                    <div class="text-xl">Meta<span class="font-bold">Blog</span></div>
                    <div>© All rights Reserved</div>
                </div>
            </div>
            <div class="flex gap-2">
                <div>Terms Of Use</div>
                <hr/>
                <div>Private Policy</div>
                <hr/>
                <div>Cookie Policy</div>
            </div>
        </div>
    </section>
  )
}

export default Footer