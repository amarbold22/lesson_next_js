import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navigations = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Blog",
        path: "/blog",
    },
    {
        name: "Contact",
        path: "/contact",
    }
];

const Navbar = () => {
    const isActive = usePathname();   
  return (
    <header className="flex h-24 min-w-[500px] lg:justify-evenly justify-evenly items-center py-6 bg-slate-100">
        <a href="/">
            <Image width={150}  height={100} className="rounded-xl hidden lg:inline-block" src="/Logo.jpg" alt="logo"/>
        </a>
        <div className="hidden justify-center md:flex md:justify-evenly gap-4 md:gap-20 text-xl font-semibold">
            {navigations.map((navigation, i) =>
                    <Link className={`font-bold transition-all duration-75 ${
                        isActive === navigation.path
                            ? "text-red-400"
                            : "hover:text-red-500"
                    }`}
                    key={i}
                    href={navigation.path}>{navigation.name}</Link>
            )}
        </div>
        <div className="flex h-10 border border-gray-400 rounded-xl justify-center items-center px-2 mx-auto sm:mx-0">
            <input className="bg-slate-100 px-4 rounded-md border-none" placeholder="Search"/>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
            </button>
        </div>
    </header>
  )
}

export default Navbar;