"use client";
import Image from "next/image";
import headerLogo from "../../../public/assets/image/headerPhoto.png";
import homeLogo from "../../../public/assets/image/home.png";
import linkdinLogo from "../../../public/assets/image/social.png";
import rightLogo from "../../../public/assets/image/right.png";
import Link from "next/link";
import MainCardBlogsResponsive from "./MainCardBlogsResponsive";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { fetchBlogs } from "@/redux/actions/blogActions";

export default function HeaderResponsive() {
  const handleClick = (event: any) => {
    const buttons = document.querySelectorAll(".toggle-button");

    buttons.forEach((btn) => {
      btn.classList.remove("bg-[#6D9696]", "text-white");
      btn.classList.add("bg-transparent", "text-black");
    });

    event.target.classList.add("bg-[#6D9696]", "text-white");
    event.target.classList.remove("bg-transparent", "text-black");
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogs = useSelector((state: RootState) => state.blog.blogs);
  const loading = useSelector((state: RootState) => state.blog.loading);
  const error = useSelector((state: RootState) => state.blog.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogs() as any);
  }, []);

  return (
    <div className="bg-[#E1E1E1]">
      <div className="h-[69px] container mx-auto flex px-9 text-sm font-medium justify-between">
        <div className="flex items-center gap-4">
          <Image src={homeLogo} alt="Home Logo" width={17} height={13} />
          <Link href="">მთავარი</Link>
          <Image src={rightLogo} alt="Arrow Right" width={8} height={8} />
          <Link href="">ბლოგი</Link>
        </div>
      </div>

      <h1 className="text-black text-[30px] md:text-[36px] font-bold mb-6 px-16">
        ეროვნული ბანკის ბლოგი
      </h1>

      <div className="flex items-center gap-4 px-16 mb-4">
        {[...Array(4)].map((_, index) => (
          <Image
            key={index}
            src={linkdinLogo}
            alt="Social Media Logo"
            width={20}
            height={20}
          />
        ))}
      </div>

      <p className="text-sm px-16">
        აღმოაჩინეთ ახალი გზები პროფესიული ზრდისთვის ეროვნული ბანკის აღმოაჩინეთ
        ახალი გზები პროფესიული ზრდისთვის ეროვნული ბანკის აღმოაჩინეთ ახალი გზები
        პროფესიული ზრდისთვის ეროვნული ბანკის.
      </p>

      <div className="flex justify-center items-center bg-[#E1E1E1] py-8 px-4">
        <div className="flex gap-4 flex-wrap justify-center w-full">
          <button
            className="bg-transparent text-black border border-black w-[310px] h-[66px] rounded-md hover:bg-[#6D9696] hover:text-white transition 
                      sm:w-[310px] "
          >
            გამოიწერე ბლოგი
          </button>
          <button
            className="bg-transparent text-black border border-black w-[310px] h-[66px] rounded-md hover:bg-[#6D9696] hover:text-black transition 
                      sm:w-[310px] "
          >
            გახდი სებ-ის ბლოგერი
          </button>
        </div>
      </div>

      <div className="relative w-full h-[320px] mt-4">
        <Image
          alt="Header Logo"
          src={headerLogo}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="flex justify-center items-center bg-[#E1E1E1] py-8">
        <div className="flex gap-0 w-full max-w-[687px]">
          <button
            className="toggle-button w-1/2 max-w-[360px] h-[55px] border border-[#6D9696] rounded-tl-md rounded-bl-md bg-[#6D9696] text-white transition"
            onClick={handleClick}
          >
            ბლოგი
          </button>
          <button
            className="toggle-button w-1/2 max-w-[360px] h-[55px] border border-[#6D9696] rounded-tr-md rounded-br-md bg-transparent text-black transition"
            onClick={handleClick}
          >
            პროფესიული ბლოგი
          </button>
        </div>
      </div>

      {loading && <p>Loading blogs...</p>}
      {error && <p className="text-red-500">Error fetching blogs: {error}</p>}

      {/* <div className="flex flex-wrap justify-center items-center gap-6 p-8 bg-[#E1E1E1]">
        {blogs.slice(0, 1).map((blog, index) => (
          <MainCardBlogsResponsive
            key={index}
            date={new Date(blog.createDate).toLocaleDateString("ka-GE")}
            title={blog.title}
            image={blog.image}
            description={blog.description}
          />
        ))}
      </div> */}
      <div className="flex flex-wrap justify-center items-center gap-6 p-8 bg-[#E1E1E1]">
        {blogs.slice(0, 1).map((blog, index) => (
          <MainCardBlogsResponsive
            key={index}
            date={new Date(blog.createDate).toLocaleDateString("ka-GE")}
            title={blog.title}
            image={blog.image}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
}
