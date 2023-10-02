import React from 'react';
import Link from 'next/link';

const Card = ({blog}) => {
  return (
    <Link href={"/blog/" + blog.id}>
      <div class="w-[360px] border flex flex-col p-6 gap-6 rounded-xl bg-white">
          <div class="h-[130px] overflow-hidden rounded-xl">
              <img src={blog.cover_image ? blog.cover_image : "/default.avif"}/>
          </div>
          <div class="font-bold flex flex-col justify-between">
            <div><span class="bg-slate-500 px-2 py-1 rounded-lg">{blog?.type_of}</span></div>
            <h2 class="font-bold text-2xl py-4">{blog.title}</h2>              
            <div class="flex items-center justify-between pr-8 text-gray-500">
              <img src={blog.user.profile_image} class="w-[50px] h-[50px] rounded-full"></img>
              <h3>{blog.user.name}</h3>
              <h4>{blog.readable_publish_date}, 2023</h4>
            </div>
          </div>
      </div>
    </Link>
  )
}

export default Card