import Image from "next/image";
import { Envriment } from "@/api/ApiManager";

interface MainCardBlogsProps {
  date: string;
  title: string;
  image: string;
  bgColor?: string;
  buttCol?: string;
}

export default function MainCardBlogs({
  date,
  title,
  image,
  bgColor = "bg-[#BECBCB]",
  buttCol = "bg-white",
}: MainCardBlogsProps) {
  return (
    <div className={`${bgColor}  rounded-md w-[465px] h-[450px]`}>
      <div className="flex justify-center items-center p-6">
        <Image
          src={Envriment.baseFileManager + "/" + image}
          alt="blog"
          width={416}
          height={306}
        />
      </div>
      <div className="px-7 ">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h2 className="text-lg mb-5 h-12">{title}</h2>
        <div className="flex justify-start items-center gap-3 mt-4 ">
          <button
            className={`${buttCol} text-[#6D9696] text-xs rounded-md w-[88px] h-[24px] flex items-center gap-2 px-2`}
          >
            <div className="w-5 p-1 h-3 bg-[#6D9696] rounded"></div>
            თემატიკა
          </button>
          <button
            className={`${buttCol} text-[#6D9696] w-[24px] h-[24px] rounded-md`}
          >
            <div className="w-3 h-3 bg-[#6D9696] rounded ml-1.5"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
