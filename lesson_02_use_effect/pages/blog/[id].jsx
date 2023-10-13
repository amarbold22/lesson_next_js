import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { formatDate } from '../../utils/function';
import { useState } from 'react';

const BlogDetail = ({ article }) => {
  return (
    <div className="container mx-auto pl-2 pb-6 pt-10 max-w-4xl bg-slate-300">
        <div>
            <>
                <div>
                    <h1 className="text-4xl font-semibold text-slate-900 ">{article.title}</h1>
                    <div className="flex items-center mt-5 gap-5">
                        <div className="flex items-center">
                            <img className="w-8 h-8 rounded-full" src="" alt="avatar"/>
                            <h4 className="ml-2 text-lg text-gray-500">
                            {article.user.name}
                            </h4>
                        </div>
                        <p className="text-lg text-gray-500">
                        {formatDate(article.created_at)}
                        </p>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="blog-content" dangerouslySetInnerHTML={{ __html: article.body_html }}>
                    </div>
                </div>
            </>
        </div>
 </div>
  )
}
export default BlogDetail;

export async function getStaticProps(context){
    const { id } = context.params;
    const res = await fetch(`https:/www.dev.to/api/articles/${id}`);
    const article = await res.json();  
    return {
        props: { article },
    };
}

export async function getStaticPaths(){
    const res = await fetch(`https://www.dev.to/api/articles?per_page=5`);
    const articles = await res.json();
    const ids = articles.map((articles) => articles.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
    return{
        paths,
        fallback: false,
    };
}
