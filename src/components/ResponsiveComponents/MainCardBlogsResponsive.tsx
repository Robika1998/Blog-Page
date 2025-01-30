import Image from "next/image";
import imageBlogsAuthor from "../../../public/assets/image/imageBlogs.png";

interface MainCardBlogsProps {
  date: string;
  title: string;
  bgColor?: string;
  buttCol?: string;
}

export default function MainCardBlogsResponsive({
  date,
  title,
  bgColor = "bg-[#BECBCB]",
  buttCol = "bg-white",
}: MainCardBlogsProps) {
  return (
    <div className={`${bgColor} rounded-md w-[688px] h-[280px] flex `}>
      <Image
        src={imageBlogsAuthor}
        alt="blog"
        width={300}
        height={230}
        className="flex justify-center items-center p-5"
      />

      <div className="flex flex-col justify-between py-10  w-full">
        <div>
          <p className="text-sm text-gray-500">{date}</p>
          <h2 className="text-xl font-semibold mt-2 mb-3 text-[#333] leading-snug">
            {title}
          </h2>
          <p className="text-sm text-gray-600">
            ორიგინალ ბანქოს პროდუქცია დღის სესიებისთვის მითითებული...
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
        </div>
      </div>
    </div>
  );
}
