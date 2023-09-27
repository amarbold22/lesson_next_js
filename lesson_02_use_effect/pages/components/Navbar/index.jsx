import React from 'react'

const Navbar = () => {
  return (
    <header class="flex h-24 min-w-[500px] justify-evenly items-center py-6 bg-slate-100">
        <a href="/">
            <img class="rounded-xl w-30 h-20 hidden lg:inline-block" src="https://www.creativefabrica.com/wp-content/uploads/2020/07/01/Letter-B-logo-to-business-or-technology-Graphics-4517437-1.jpg" alt="logo"/>
        </a>
        <div class="flex gap-20 text-xl font-semibold">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
        </div>
        <div class="hidden h-10 lg:flex border border-gray-400 rounded-xl justify-center items-center px-2">
            <input placeholder="Search" class="bg-slate-100 px-4 rounded-md"/>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
            </button>
        </div>
    </header>
  )
}

export default Navbar