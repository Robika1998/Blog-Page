"use client";
import {
  fetchBlogCategories,
  fetchBlogAuthors,
} from "@/redux/actions/referenceActions";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/redux/actions/blogActions";
import ListCardBlogs from "../ListCardBlogs";

export default function Filter() {
  const dispatch = useDispatch();
  const { categories, authors, loading, error } = useSelector(
    (state: RootState) => state.reference
  );
  const [filters, setFilters] = useState({
    q: "",
    authorId: "",
    categoryId: "",
    IsFavourite: false,
    start: "",
    end: "",
  });

  useEffect(() => {
    dispatch(fetchBlogCategories() as any);
    dispatch(fetchBlogAuthors() as any);
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(
      fetchBlogs({
        q: filters.q,
        authorId: filters.authorId ? parseInt(filters.authorId) : undefined,
        categoryId: filters.categoryId
          ? parseInt(filters.categoryId)
          : undefined,
        IsFavourite: filters.IsFavourite,
        start: filters.start,
        end: filters.end,
      }) as any
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center items-center gap-4 p-10 bg-[#E1E1E1]"
      >
        <label className="border bg-[#E1E1E1] border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px] flex items-center">
          <input
            type="text"
            name="q"
            className="outline-none bg-transparent placeholder-black"
            placeholder="საძიებო სიტყვა"
            value={filters.q}
            onChange={(e) => setFilters({ ...filters, q: e.target.value })}
          />
        </label>

        <select
          name="categoryId"
          className="border bg-[#E1E1E1] border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px]"
          value={filters.categoryId}
          onChange={(e) =>
            setFilters({ ...filters, categoryId: e.target.value })
          }
        >
          <option value="">თემატიკა</option>
          {categories.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.name || "Unnamed Category"}
            </option>
          ))}
        </select>

        <select
          name="authorId"
          className="border bg-[#E1E1E1] border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px]"
          value={filters.authorId}
          onChange={(e) => setFilters({ ...filters, authorId: e.target.value })}
        >
          <option value="">ავტორი</option>
          {authors.length > 0 ? (
            authors.map((author: any) => (
              <option key={author.id} value={author.id}>
                {author.slug || "Unnamed Author"}
              </option>
            ))
          ) : (
            <option disabled>ავტორები არ მოიძებნა</option>
          )}
        </select>

        <div className="border bg-[#E1E1E1] border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px] flex justify-between items-center">
          <span>თარიღი</span>
          <div className="flex gap-2">
            <label>
              <input
                type="date"
                name="start"
                value={filters.start}
                className="bg-[#E1E1E1] w-24"
                onChange={(e) =>
                  setFilters({ ...filters, start: e.target.value })
                }
              />
            </label>
            <label>
              <input
                type="date"
                name="end"
                value={filters.end}
                className="bg-[#E1E1E1] w-24"
                onChange={(e) =>
                  setFilters({ ...filters, end: e.target.value })
                }
              />
            </label>
          </div>
        </div>

        <label className="border border-gray-400 rounded-lg p-2 w-[600px] md:w-[467px] h-[50px] flex justify-between items-center gap-2">
          <span>რედაქტორის რჩეული</span>
          <input
            type="checkbox"
            name="IsFavourite"
            checked={filters.IsFavourite}
            onChange={(e) =>
              setFilters({ ...filters, IsFavourite: e.target.checked })
            }
          />
        </label>

        <button
          type="submit"
          className="col-span-1 bg-[#6D9696] text-white rounded-lg p-2 w-[600px] md:w-[467px] h-[50px]"
        >
          ძებნა
        </button>
      </form>

      <ListCardBlogs />
    </div>
  );
}
