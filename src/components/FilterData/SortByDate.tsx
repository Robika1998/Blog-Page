"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "@/redux/actions/blogActions";
import Image from "next/image";
import downLogo from "../../../public/assets/image/down.png";

const SORT_OPTIONS = [
  { label: "თარიღი ზრდადი", value: "DateAsc" },
  { label: "თარიღი კლებადი", value: "DateDesc" },
  { label: "კომენტარები ზრდადი", value: "CommentCountAsc" },
  { label: "კომენტარები კლებადი", value: "CommentCountDesc" },
  { label: "პოპულარობა ზრდადი", value: "PopularAsc" },
  { label: "პოპულარობა კლებადი", value: "PopularDesc" },
];

export default function SortByDate() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("DateDesc");
  const dispatch = useDispatch();

  const handleSortChange = (sortValue: string) => {
    setSelectedSort(sortValue);
    dispatch(fetchBlogs({ sortBy: sortValue }) as any);
    setIsOpen(false);
  };

  return (
    <div className="relative flex bg-[#E1E1E1] rounded-sm cursor-pointer hover:bg-gray-100 transition p-2">
      <p className="text-[#6D9696] font-sm" onClick={() => setIsOpen(!isOpen)}>
        დალაგება
      </p>
      <Image
        src={downLogo}
        alt="Sort Icon"
        width={18}
        height={18}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-md border rounded">
          {SORT_OPTIONS.map((option) => (
            <div
              key={option.value}
              className={`p-2 hover:bg-gray-100 cursor-pointer ${
                selectedSort === option.value ? "bg-gray-200" : ""
              }`}
              onClick={() => handleSortChange(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
