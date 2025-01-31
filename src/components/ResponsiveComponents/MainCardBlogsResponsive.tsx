import Image from "next/image";
import imageBlogsAuthor from "../../../public/assets/image/imageBlogs.png";
import { Envriment } from "@/api/ApiManager";
import { useState } from "react";

interface MainCardBlogsProps {
  date: string;
  title: string;
  image: string;
  description: string;
  bgColor?: string;
  buttCol?: string;
}

export default function MainCardBlogsResponsive({
  date,
  title,
  description,
  image,
  bgColor = "bg-[#BECBCB]",
  buttCol = "bg-white",
}: MainCardBlogsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const truncateDescription = (text: string) => {
    const cleanText = text.replace(/<[^>]+>/g, "").trim();
    const maxLength = 80;

    if (cleanText.length > maxLength) {
      return cleanText.substring(0, maxLength) + "...";
    }

    return cleanText;
  };
  return (
    <div className={`${bgColor} rounded-md w-[688px] h-[280px] flex `}>
      <Image
        src={Envriment.baseFileManager + "/" + image}
        alt="blog"
        width={300}
        height={230}
        className="flex justify-center items-center p-5"
      />

      <div className="flex flex-col justify-between py-10  w-full">
        <div>
          <p className="text-sm text-gray-500">{date}</p>
          <h2 className="text-base font-semibold mt-2 mb-3 text-[#333] leading-snug w-72">
            {title}
          </h2>
          <p className="text-xs text-gray-600">
            {truncateDescription(description)}
          </p>
        </div>

        <div className="flex justify-start items-center gap-3 mt-4">
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
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-[#6D9696]" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
