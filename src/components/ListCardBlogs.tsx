import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { fetchBlogs } from "@/redux/actions/blogActions";
import MainCardBlogs from "./MainCardBlog";
import SortByDate from "./FilterData/SortByDate";

export default function ListCardBlogs() {
  const blogs = useSelector((state: RootState) => state.blog.blogs);
  const loading = useSelector((state: RootState) => state.blog.loading);
  const error = useSelector((state: RootState) => state.blog.error);
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState<string>("DateDesc");

  useEffect(() => {
    dispatch(fetchBlogs({ sortBy }) as any);
  }, [sortBy]);

  return (
    <div className="flex flex-col bg-[#E1E1E1] ">
      <div className="flex justify-around"></div>
      <div className="bg-[#E1E1E1] w-full">
        {error && <p className="text-red-500">Error fetching blogs: {error}</p>}

        <div className="flex justify-center items-center flex-col w-full">
          <div className="flex mr-[63%]">
            <SortByDate />
          </div>
          <div className="flex flex-wrap justify-center w-[90%] px-4 mx-auto ">
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
              : !loading && (
                  <p className="w-full text-center text-lg  rounded-lg p-4 ">
                    😞 ბლოგები არ მოიძებნა
                  </p>
                )}
          </div>
        </div>
      </div>
    </div>
  );
}
