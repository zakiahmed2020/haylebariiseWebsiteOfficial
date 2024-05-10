"use client";
import BlogDetailSection from "@/component/blog/BlogDetailSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/component/error/ErrorSection";
import Layout from "@/component/layout/Layout";
import { blogData } from "@/data/Data";
import { useEffect, useState } from "react";
import Loading from "./loading";

// export const metadata = {
//   title: 'Eduor Blog Details Page',
//   description: 'Developed by Azizur Rahman',
// }

export default function BlogDetails({params}) {
    
    const { slug } = params;

    console.log(slug)
    const [Blog, setBlogs] = useState();
    const [loading, setLoading] = useState()

  useEffect(() => {
    async function getCourse() {
        setLoading(true)
      try {
        const getData = await fetch(
          `http://localhost:3001/blogs/slug/${slug}`
        );
        const res = await getData.json();
        // console.log(res)
        setBlogs(res);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    }
    getCourse();
  }, []);

    

    return (
        <Layout>
            {
                loading ? <Loading /> : 
                <>
            <BreadcrumbSection header={Blog?.title ?? "Blog Details"} title='Blog Details'/>
            {Blog ? (
                <BlogDetailSection blogDesc={Blog}/>
            ):(
                <ErrorSection type='Blog'/>
            )
           
            }
            </>
            }
        </Layout>
    )
}