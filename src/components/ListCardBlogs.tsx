"use client";
import downLogo from "../../public/assets/image/down.png";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { fetchBlogs } from "@/redux/actions/blogActions";
import MainCardBlogs from "./MainCardBlog";

export default function ListCardBlogs() {
  const blogs = useSelector((state: RootState) => state.blog.blogs);
  const loading = useSelector((state: RootState) => state.blog.loading);
  const error = useSelector((state: RootState) => state.blog.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs() as any);
  }, []);

  return (
    <div className="flex flex-col items-start gap-4 p-8 bg-[#E1E1E1]">
      <div className="flex items-center text-[#6D9696] gap-1 pl-56">
        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-[#6D9696] mt-1"></div>
        <p>დალაგება</p>
        <Image src={downLogo} alt="Logo" width={18} height={18} />
      </div>
      {loading && <p>Loading blogs...</p>}
      {error && <p className="text-red-500">Error fetching blogs: {error}</p>}

      <div className="flex flex-wrap justify-center gap-6 w-full">
        {blogs.length > 0
          ? blogs.map((blog, index) => (
              <MainCardBlogs
                key={index}
                date={new Date(blog.createDate).toLocaleDateString("ka-GE")}
                title={blog.title}
                image={blog.image}
                bgColor="bg-[#E1E1E1]"
                buttCol="bg-gray-100"
              />
            ))
          : !loading && <p>No blogs available.</p>}
      </div>
    </div>
  );
}
