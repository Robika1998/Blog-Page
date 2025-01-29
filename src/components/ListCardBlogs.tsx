import MainCardBlogs from "./MainCardBlog";
import downLogo from "../../public/assets/image/down.png";
import Image from "next/image";

export default function ListCardBlogs() {
  const blogData = [
    { date: "2024-01-10", title: "ბლოგის პირველი სტატია" },
    { date: "2024-01-15", title: "ეკონომიკური ანალიზი და პროგნოზები" },
    { date: "2024-01-20", title: "ტექნოლოგიური ინოვაციები საბანკო " },
    { date: "2024-01-10", title: "ბლოგის პირველი სტატია" },
    { date: "2024-01-15", title: "ეკონომიკური ანალიზი და პროგნოზები" },
    { date: "2024-01-20", title: "ტექნოლოგიური ინოვაციები საბანკო " },
    { date: "2024-01-10", title: "ბლოგის პირველი სტატია" },
    { date: "2024-01-15", title: "ეკონომიკური ანალიზი და პროგნოზები" },
    { date: "2024-01-20", title: "ტექნოლოგიური ინოვაციები საბანკო  " },
  ];

  return (
    <div className="flex flex-col items-start gap-4 p-8 bg-[#E1E1E1]">
      <div className="flex items-center text-[#6D9696] gap-1 pl-56">
        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-red-500"></div>
        <p>დალაგება</p>
        <Image src={downLogo} alt="Logo" width={18} height={18} />
      </div>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {blogData.map((blog, index) => (
          <MainCardBlogs
            key={index}
            date={blog.date}
            title={blog.title}
            bgColor="bg-[#E1E1E1]"
            buttCol="bg-gray-100"
          />
        ))}
      </div>
    </div>
  );
}
