import React, { useState, useEffect } from 'react'
import Card from './components/Card';
import Loader from './components/Loader';
import { formatDate } from './utils/function';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    setBlogs(data);
    setIsLoading(false);
  }

  const fetchDataLatest = async () => {
    const res2 = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data2= await res2.json();
    setLatestBlogs(data2);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchDataLatest()
  }, []);

  return (
    <main>
      {/* <section class="flex justify-center gap-8 mt-4 px-4 w-full">
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
        
      </section> */}
      {console.log(latestBlogs[0])}
      {!isLoading ? 
          <>
          <section className="w-[1216px] mx-auto px-8">
            <div className="grid grid-cols-2">
              <div className="col-span-2">Recent Blogs</div>
              <div className="row-span-2 flex flex-col gap-8 bg-purple-300 w-[592px] h-[432px]">
                <div className="w-full h-[272px]">
                  <img src={latestBlogs[0]?.social_image} alt="photo"/>
                </div>
                <div>
                  <div>{formatDate(latestBlogs[0]?.created_date)}</div>
                  <div>{latestBlogs[0]?.title}</div>
                </div>
              </div>
              <div className="w-[592px] bg-green-300 flex gap-6">
                  <div className="w-80">
                    <img className="w-full h-full" src={latestBlogs[1]?.social_image} alt=""/>
                  </div>
                  <div className="flex flex-col items-start py-8">
                      <div className="text-gray-500">{formatDate(latestBlogs[1]?.created_date)}</div>
                      <div>{latestBlogs[1]?.title}</div>
                  </div>
              </div>
              <div className="w-[592px] bg-green-300 flex gap-6">
                  <div className="w-80">
                    <img className="" src={latestBlogs[2]?.social_image} alt=""/>
                  </div>
                  <div className="flex flex-col items-start py-8">
                      <div className="text-gray-500">{formatDate(latestBlogs[2]?.created_date)}</div>
                      <div>{latestBlogs[2]?.title}</div>
                  </div>
              </div>
            </div>  
          </section> 
          <section class="flex flex-col justify-center items-center bg-slate-400 px-auto py-[50px]">
          <h2 class="text-2xl py-4">All Blog Post</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {
              blogs.map((blog, i) => (
                <Card blog={blog}/>
              ))
             }
          </div>
        </section>
        </>
          : (
            <div className="flex justify-center items-center h-[500px]">
                <Loader/>
            </div>
          )
      }
      
      
      
    </main>
  )
}

export default Home
