import React from 'react';
import Link from 'next/link';

const Card = ({blog}) => {
  return (
    <Link href={"/blog/" + blog.id} key={blog.id}>
      <div className="w-[360px] border flex flex-col p-6 gap-6 rounded-xl bg-white">
          <div className="h-[130px] overflow-hidden rounded-xl">
              <img src={blog.social_image ? blog.social_image : "/default.avif"}/>
          </div>
          <div className="font-bold">
            <div><span className="bg-slate-500 px-2 py-1 rounded-lg">{blog?.type_of}</span></div>
            <h2 className="font-bold text-2xl py-4 truncate">{blog.title}</h2>              
            <div className="flex items-center justify-between pr-8 text-gray-500">
              <img src={blog.user.profile_image} className="w-[50px] h-[50px] rounded-full"></img>
              <h3>{blog.user.name}</h3>
              <h4>{blog.readable_publish_date}, 2023</h4>
            </div>
          </div>
      </div>
    </Link>
  )
}

export default Card