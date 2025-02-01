"use client";
import {
  fetchBlogCategories,
  fetchBlogAuthors,
} from "@/redux/actions/referenceActions";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCardBlogs from "./ListCardBlogs";

export default function Filter() {
  const dispatch = useDispatch();
  const { categories, authors, loading, error } = useSelector(
    (state: RootState) => state.reference
  );

  useEffect(() => {
    dispatch(fetchBlogCategories() as any);
    dispatch(fetchBlogAuthors() as any);
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
  <div>
      <form className="flex flex-wrap justify-center items-center gap-4 p-10 bg-[#E1E1E1] rounded-lg">
      <label className="border bg-[#E1E1E1] border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px] flex items-center">
        <input
          type="text"
          name="type"
          className=" outline-none bg-transparent placeholder-black"
          placeholder="საძიებო სიტყვა"
        />
      </label>

      <select
        name="city"
        className="border bg-[#E1E1E1] border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px]"
      >
        <option value="">თემატიკა</option>
        {categories.map((category: any) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <select
        name="actor"
        className="border bg-[#E1E1E1] border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px]"
      >
        <option value="">ავტორი</option>
        {authors.map((author: any) => (
          <option key={author.id} value={author.id}>
            {author.slug}
          </option>
        ))}
      </select>

      <select
        name="time"
        className="border bg-[#E1E1E1] border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px]"
      >
        <option value="">თარიღი</option>
      </select>

      <label className="border border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px] flex justify-between items-center gap-2">
        <span>რედაქტორის რჩეული</span>
        <input type="checkbox" name="type" className="w-4 h-4" />
      </label>

      <button
        type="submit"
        className="col-span-1 bg-[#6D9696] text-white rounded-lg p-2 w-[600px] md:w-[467px] h-[50px]"
      >
        ძებნა
      </button>
    </form>
    <ListCardBlogs/>
  </div>
  );
}
