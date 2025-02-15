"use client";
import Image from "next/image";
import headerLogo from "../../public/assets/image/headerPhoto.png";
import MainCardBlogs from "./MainCardBlog";
import homeLogo from "../../public/assets/image/home.png";
import linkdinLogo from "../../public/assets/image/social.png";
import rightLogo from "../../public/assets/image/right.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { fetchPinnedBlogs } from "@/redux/actions/blogActions";

export default function Headers() {
  const handleClick = (event: any) => {
    const buttons = document.querySelectorAll(".toggle-button");

    buttons.forEach((btn) => {
      btn.classList.remove("bg-[#6D9696]", "text-white");
      btn.classList.add("bg-transparent", "text-black");
    });

    event.target.classList.add("bg-[#6D9696]", "text-white");
    event.target.classList.remove("bg-transparent", "text-black");
  };

  const pinnedBlogs = useSelector((state: RootState) => state.blog.pinnedBlogs);
  const loading = useSelector((state: RootState) => state.blog.loading);
  const error = useSelector((state: RootState) => state.blog.error);
  const dispatch = useDispatch();
  const [headerPinnedBlogs, setHeaderPinnedBlogs] = useState<any[]>([]);
  useEffect(() => {
    dispatch(fetchPinnedBlogs(0, 5) as any);
  }, [dispatch]);
  useEffect(() => {
    if (pinnedBlogs.length > 0 && headerPinnedBlogs.length === 0) {
      setHeaderPinnedBlogs(pinnedBlogs.slice(0, 5));
    }
  }, [pinnedBlogs]);

  return (
    <div>
      <div className="h-[69px] container mx-auto flex px-9 text-sm font-medium  justify-between">
        <div className="flex items-center gap-4 ">
          <Image src={homeLogo} alt="Home Logo" width={17} height={13} />
          <Link href="">მთავარი </Link>
          <Image src={rightLogo} alt="Home Logo" width={8} height={8} />
          <Link href="">ბლოგი</Link>
        </div>
        <div className="flex items-center gap-2">
          <Image src={linkdinLogo} alt="LinkedIn Logo" width={20} height={20} />
          <Image src={linkdinLogo} alt="LinkedIn Logo" width={20} height={20} />
          <Image src={linkdinLogo} alt="LinkedIn Logo" width={20} height={20} />
          <Image src={linkdinLogo} alt="LinkedIn Logo" width={20} height={20} />
        </div>
      </div>
      <div className="relative w-screen h-[575px]">
        <Image
          alt="Header Logo"
          src={headerLogo}
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <div className="absolute inset-0 flex items-end justify-start p-16">
          <div className="bg-gray-700 bg-opacity-70 w-[636px] h-[203px] flex items-center justify-center rounded-md">
            <div className="text-center">
              <h1 className="text-white text-[30px] md:text-[36px] font-bold mb-6">
                ეროვნული ბანკის ბლოგი
              </h1>

              <div className="flex gap-4 justify-center">
                <button className="bg-transparent text-[#6D9696] border border-[#6D9696] w-[254px] h-[50px] rounded-md hover:bg-[#6D9696] hover:text-white transition">
                  გამოიწერე ბლოგი
                </button>
                <button className="bg-transparent text-white border border-white w-[254px] h-[50px] rounded-md hover:bg-white hover:text-black transition">
                  გახდი სებ-ის ბლოგერი
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center  bg-[#E1E1E1] py-8 ">
        <p className=" px-[14rem]">
          აღმოაჩინეთ ახალი გზები პროფესიული ზრდისთვის ეროვნული ბანკის აღმოაჩინეთ
          ახალი გზები გზები პროფესიული ზრდისთვის ეროვნული ბანკის აღმოაჩინეთ
          ახალი გზები პროფესიული ზრდისთვის ეროვნული ბანკის აღმოაჩინეთ ახალი
          გზები პროფესიული ზრდისთვის ეროვნული ბანკის
        </p>
      </div>

      <div className="flex  justify-center items-center bg-[#E1E1E1] py-8">
        <div className="flex gap-0 ">
          <button
            className="toggle-button w-[725px] h-[55px] max_Xll:w-[467px] max_md2:w-[367px] border border-[#6D9696] rounded-tl-md rounded-bl-md bg-[#6D9696] text-white transition"
            onClick={handleClick}
          >
            ბლოგი
          </button>
          <button
            className="toggle-button w-[725px] h-[55px] max_Xll:w-[467px] max_md2:w-[367px] border border-[#6D9696] rounded-tr-md rounded-br-md bg-transparent text-black  transition"
            onClick={handleClick}
          >
            პროფესიული ბლოგი
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 p-8 bg-[#E1E1E1]">
        {loading && <p>Loading blogs...</p>}
        {error && <p className="text-red-500">Error fetching blogs: {error}</p>}

        <div className="flex flex-wrap justify-center gap-6 w-full">
          {headerPinnedBlogs.length > 0
            ? headerPinnedBlogs.map((blog, index) => (
                <MainCardBlogs
                  key={index}
                  date={new Date(blog.createDate).toLocaleDateString("ka-GE")}
                  title={blog.title}
                  image={blog.image}
                  buttCol="bg-gray-100"
                />
              ))
            : !loading && <p>No pinned blogs available.</p>}
        </div>
      </div>
    </div>
  );
}
