import Image from "next/image";
import { Envriment } from "@/api/ApiManager";
import { useState } from "react";

interface MainCardBlogsProps {
  date: string;
  title: string;
  image: string;
  description: string;
  bgColor?: string;
  buttCol?: string;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  totalBlogs: number;
}

export default function MainCardBlogsResponsive({
  date,
  title,
  description,
  image,
  bgColor = "bg-[#BECBCB]",
  buttCol = "bg-white",
  currentIndex,
  setCurrentIndex,
  totalBlogs,
}: MainCardBlogsProps) {
  const [animateSlide, setAnimateSlide] = useState(false);

  const handleSlide = (index: number) => {
    setAnimateSlide(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimateSlide(false);
    }, 500);
  };

  const truncateDescription = (text: string) => {
    const cleanText = text.replace(/<[^>]+>/g, "").trim();
    const maxLength = 80;
    return cleanText.length > maxLength
      ? cleanText.substring(0, maxLength) + "..."
      : cleanText;
  };

  return (
    <div
      className={`${bgColor} rounded-md w-[100%]   flex justify-around py-1 transition-all duration-500 ease-out transform ${
        animateSlide
          ? "scale-105 rotate-1 opacity-80 translate-x-4"
          : "scale-100 rotate-0 opacity-100 translate-x-0"
      }`}
    >
      <Image
        src={Envriment.baseFileManager + "/" + image}
        alt="blog"
        width={160}
        height={150}
        className="flex justify-center items-center  p-2"
      />

      <div className="flex flex-col justify-between w-[50%]">
        <div>
          <p className="text-[10px] text-gray-500">{date}</p>
          <h2 className=" text-[11px] font-bold  mb-2 text-[#333] leading-snug  ">
            {title}
          </h2>
          <p className="text-[10px] text-gray-600 ">
            {truncateDescription(description)}
          </p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex justify-center gap-3 items-start ">
            <button
              className={`${buttCol} text-[#6D9696] text-[10px] rounded-sm w-[80px] h-[20px] flex items-center gap-2 px-2`}
            >
              <div className="w-5 h-3 bg-[#6D9696] rounded"></div>
              თემატიკა
            </button>
            <button
              className={`${buttCol} text-[#6D9696] w-[20px] h-[20px] rounded-sm`}
            >
              <div className="w-3 h-3 bg-[#6D9696] rounded-sm mx-auto"></div>
            </button>
          </div>

          <div className="flex gap-1 ">
            {[...Array(totalBlogs)].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-[#6D9696] scale-110"
                    : "bg-gray-400"
                }`}
                onClick={() => handleSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
