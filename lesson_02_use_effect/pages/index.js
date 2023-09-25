import React, { useState, useEffect } from 'react'

const Home = () => {
  const [articles, setArticles] = useState([
      {
        title: "The Impact of Technology", 
        user: "",
        description: "",
        color: "blue"
      },
      {
        title: "How Technology Is Changing", 
        user: "",
        description: "",
        color: ""
      },
    ]
    setArticles(data);
  )

  useEffect(()=> {
    console.log("Effect")
  })
  return (
    <main className="">
      Welcome
      <div>
        {articles.map((article) => {
          <div className="border my-3 p-4">{article.title}</div>
        })}
      </div>
    </main>
  )
}

export default Home
