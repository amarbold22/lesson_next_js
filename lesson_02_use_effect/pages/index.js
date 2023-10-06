import React, { useState, useEffect } from 'react'
import Card from './components/Card';
import Loader from './components/Loader';
import { formatDate } from './utils/function';

const Home = () => {
  const [pages, setPages] = useState(6);
  const [blogs, setBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [pages]);
  
  const fetchData = async () => {
    const res = await fetch(`https://dev.to/api/articles?per_page=${pages}`);
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

  function handleLoad(){
      setPages(pages + 3);
  }

  return (
    <main className="bg-slate-400">

      {console.log(latestBlogs[0])}
      {!isLoading ? 
          <>
          <section className="w-[1216px] mx-auto px-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 py-6 font-semibold text-2xl">Recent Blog Posts</div>
              <div className="row-span-2 flex flex-col gap-8 w-[592px] h-[432px]">
                <div className="w-full h-[272px]">
                  <img src={latestBlogs[0]?.social_image} alt="photo"/>
                </div>
                <div>
                  <div className="px-4 text-gray-400 font-semibold">{formatDate(latestBlogs[0]?.created_date)}</div>
                  <div className="px-4 font-medium">{latestBlogs[0]?.title}</div>
                </div>
              </div>
              <div className="mx-10 w-[592px] flex gap-6">
                    <img className="h-full w-[60%]" src={latestBlogs[1]?.social_image} alt=""/>
                  <div className="flex flex-col items-start py-8">
                      <div className="px-2 text-gray-500 font-semibold">{formatDate(latestBlogs[1]?.created_date)}</div>
                      <div className="py-4 font-medium">{latestBlogs[1]?.title}</div>
                  </div>
              </div>
              <div className="mx-10 w-[592px] flex gap-6">
                    <img className="h-full w-[60%]" src={latestBlogs[2]?.social_image} alt=""/>
                  <div className="flex flex-col items-start py-8">
                      <div className=" text-gray-500 font-semibold">{formatDate(latestBlogs[2]?.created_date)}</div>
                      <div className="py-4 font-medium">{latestBlogs[2]?.title}</div>
                  </div>
              </div>
            </div>  
          </section> 
          <section class="flex flex-col justify-center items-center bg-slate-400 px-auto py-[50px]">
          <h2 class="text-2xl font-semibold py-8">All Blog Post</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {
              blogs.map((blog, i) => (
                <Card blog={blog}/>
              ))
             }
          </div>
          <button onClick={handleLoad} className="px-4 py-2 bg-blue-400 rounded-lg my-6 text-white">Load More</button>
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
