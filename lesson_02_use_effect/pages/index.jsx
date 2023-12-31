import React from 'react'
import Card from '../components/Card';
import { formatDate } from '@/utils/function';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

export default function Home({blogs, latestBlogs, page}){
   const router = useRouter();
  return (
    <main className="bg-purple-400 w-screen">
          <section className="xl:w-[1216px] mx-auto sm:px-8">
            <div className="xl:grid xl:grid-cols-2 xl:gap-6">
              <p className="text-center xl:text-left col-span-2 py-6 font-semibold text-2xl">Recent Blog Posts</p>
                <div className="mx-auto row-span-2 flex flex-col gap-8 w-[592px] h-[432px]">
                    <Link href={"/blogs/" + latestBlogs[0].id}>
                      <div className="w-full h-[300px]">
                        <img src={latestBlogs[0]?.social_image} alt="photo"/>
                      </div>
                      <div>
                        <div className="px-4 text-gray-400 font-semibold">{formatDate(latestBlogs[0]?.created_date)}</div>
                        <div className="px-4 font-medium">{latestBlogs[0]?.title}</div>
                      </div>
                      </Link>
                </div>
              <Link href={"/blogs/" + latestBlogs[1].id}>
                <div className="mx-auto xl:mx-10 w-[592px] flex gap-6">
                      <img className="h-full w-[60%]" src={latestBlogs[1]?.social_image} alt=""/>
                    <div className="flex flex-col items-start py-8">
                        <div className="px-2 text-gray-500 font-semibold">{formatDate(latestBlogs[1]?.created_date)}</div>
                        <div className="py-4 font-medium">{latestBlogs[1]?.title}</div>
                    </div>
                </div>
              </Link>
              <Link href={"/blogs/" + latestBlogs[2].id}>
                <div className="mx-auto xl:mx-10 w-[592px] flex gap-6">
                      <img className="h-full w-[60%]" src={latestBlogs[2]?.social_image} alt=""/>
                    <div className="flex flex-col items-start py-8">
                        <div className=" text-gray-500 font-semibold">{formatDate(latestBlogs[2]?.created_date)}</div>
                        <div className="py-4 font-medium">{latestBlogs[2]?.title}</div>
                    </div>
                </div>
              </Link>
            </div>  
          </section> 
          <section className="flex flex-col justify-center items-center px-auto py-[50px]">
          <h2 className="text-2xl font-semibold py-8">All Blog Post</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {
              blogs.map((blog) => (
                <Card blog={blog}/>
              ))
             }
          </div>
          <button onClick={() => {
            const pg = Number(page) + 3;
            router.replace("?page=" + pg);
          }

          }
           className="px-4 py-2 bg-blue-400 rounded-lg my-6 text-white">Load More</button>
        </section>
    </main>
  )
}

export async function getServerSideProps(context){
  let { page } = context.query;
  page = page || 9;
  const res1 = await fetch(`https://dev.to/api/articles?per_page=${page}`);
  const blogs = await res1.json();

  const res2 = await fetch(`https://dev.to/api/articles/latest?per_page=3`);
  const latestBlogs = await res2.json();
  
  return {
    props: {
      blogs,
      latestBlogs,
      page
    }
  };
}
