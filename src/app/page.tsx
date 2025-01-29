import Filter from "@/components/Filter";
import Headers from "@/components/Headers";
import ListCardBlogs from "@/components/ListCardBlogs";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Headers />
      <Filter />
      <ListCardBlogs />
    </div>
  );
}
