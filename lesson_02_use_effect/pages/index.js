import React, { useState, useEffect } from 'react'
import Card from './components/Card';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    setBlogs(data);
  }

  const fetchDataLatest = async () => {
    const res2 = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data2= await res2.json();
    setLatestBlogs(data2);
    console.log(data2);
  }

  useEffect(() => {
    fetchDataLatest()
  }, []);

  return (
    <main>
      <section class="flex justify-center m-auto gap-8 mt-4">
        <div class="flex">  
          <div class="flex flex-col gap-8 w-[592px] h-[432px]">
              <h3>Recent Blog posts</h3>
              <div class="">
                <div class="h-60 overflow-hidden">
                  <img class="w-full" src={latestBlogs[0].cover_image ? latestBlogs[0].cover_image : "/default.avif"} alt="photo"/> 
                </div>
              </div>
              <div class="flex flex-col gap-6">
                <div class="text-gray-600">{latestBlogs[0].readable_publish_date}, 2023</div>
                <div class="text-bold">{latestBlogs[0].title}</div>
              </div>
          </div>
            <div class="flex flex-col">
                <div>
                  <div>{latestBlogs[1].title}</div>
                  <img class="w-[300px]" src={latestBlogs[0].cover_image ? latestBlogs[0].cover_image : "/default.avif"}/>
                </div>
                <div>
                  <div>{latestBlogs[2].title}</div>
                  <img class="w-[300px]" src={latestBlogs[0].cover_image ? latestBlogs[0].cover_image : "/default.avif"}/>
                </div>
          </div>
        </div>
        
      </section>
      <section class="flex flex-col justify-center items-center bg-slate-400 px-auto py-[50px]">
        <h2 class="text-2xl py-4">All Blog Post</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {
            blogs.map((blog, i) => (
              <Card blog={blog}/>
            ))
           }
        </div>
      </section>
      
    </main>
  )
}

export default Home
