import Image from "next/image";
import { Envriment } from "@/api/ApiManager";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

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
  const [animateSlide, setAnimateSlide] = useState<"left" | "right" | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlide = (index: number) => {
    if (index > currentIndex) {
      setAnimateSlide("left");
    } else {
      setAnimateSlide("right");
    }

    setTimeout(() => {
      setCurrentIndex(index);
      setAnimateSlide(null);
    }, 300);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < totalBlogs - 1) {
        handleSlide(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        handleSlide(currentIndex - 1);
      }
    },
    trackMouse: true,
  });

  const truncateDescription = (text: string) => {
    const cleanText = text.replace(/<[^>]+>/g, "").trim();
    const maxLength = 80;
    return cleanText.length > maxLength
      ? cleanText.substring(0, maxLength) + "..."
      : cleanText;
  };

  return isMobile ? (
    <div
      {...handlers}
      className={`${bgColor} rounded-md ${
        isMobile ? "w-full" : "w-[688px] h-[280px]"
      } flex justify-around py-1 transition-all duration-300 ease-in-out transform ${
        animateSlide === "left"
          ? "translate-x-[-100%] opacity-0"
          : animateSlide === "right"
          ? "translate-x-[100%] opacity-0"
          : "translate-x-0 opacity-100"
      }`}
    >
      <Image
        src={Envriment.baseFileManager + "/" + image}
        alt="blog"
        width={isMobile ? 160 : 300}
        height={isMobile ? 150 : 230}
        className="flex justify-center items-center p-2"
      />

      <div className="flex flex-col justify-between w-[50%]">
        <div>
          <p className="text-[10px] text-gray-500">{date}</p>
          <h2 className="text-[11px] font-bold mb-2 text-[#333] leading-snug">
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

          <div className="flex gap-1">
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
  ) : (
    <div
      {...handlers}
      className={`${bgColor} rounded-md ${
        isMobile ? "w-full" : "w-[688px] h-[280px]"
      } flex justify-around py-1 transition-all duration-300 ease-in-out transform ${
        animateSlide === "left"
          ? "translate-x-[-100%] opacity-0"
          : animateSlide === "right"
          ? "translate-x-[100%] opacity-0"
          : "translate-x-0 opacity-100"
      }`}
    >
      <Image
        src={Envriment.baseFileManager + "/" + image}
        alt="blog"
        width={300}
        height={230}
        className="flex justify-center items-center p-5"
      />

      <div className="flex flex-col justify-between py-10 w-full">
        <div>
          <p className="text-sm text-gray-500">{date}</p>
          <h2 className="text-base font-semibold mt-2 mb-3 text-[#333] leading-snug w-72">
            {title}
          </h2>
          <p className="text-xs text-gray-600">
            {truncateDescription(description)}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex justify-center gap-3 items-start ">
            <button
              className={`${buttCol} text-[#6D9696] text-xs rounded-md w-[88px] h-[24px] flex items-center gap-2 px-2`}
            >
              <div className="w-5 h-3 bg-[#6D9696] rounded"></div>
              თემატიკა
            </button>
            <button
              className={`${buttCol} text-[#6D9696] w-[24px] h-[24px] rounded-md`}
            >
              <div className="w-3 h-3 bg-[#6D9696] rounded mx-auto"></div>
            </button>
          </div>

          <div className="flex gap-2 mr-10">
            {[...Array(totalBlogs)].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
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
