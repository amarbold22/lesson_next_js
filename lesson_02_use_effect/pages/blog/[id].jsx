import React from 'react';
import { formatDate } from '../../utils/function';

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

export async function getStaticProps(context){
    const { id } = context.params;
    const res = await fetch(`https:/www.dev.to/api/articles/${id}`);
    const article = await res.json();  
    return {
        props: { article }
    };
}

export async function getStaticPaths(){
    const res1 = await fetch(`https://www.dev.to/api/articles?per_page=9`);
    const articles1 = await res1.json();
    const res2 = await fetch(`https://www.dev.to/api/articles/latest?per_page=4`);
    const articles2 = await res2.json();
    const ids1 = articles1.map((article) => article.id);
    const ids2 = articles2.map((article) => article.id);
    const ids = ids1.concat(ids2);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
    console.log(ids2);
    return{
        paths,
        fallback: false,
    };
}

export default BlogDetail;
