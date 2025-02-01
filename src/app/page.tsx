import Filter from "@/components/Filter";
import HeaderResponsive from "@/components/ResponsiveComponents/HeaderResponsive";
import Headers from "@/components/Headers";
import ListCardBlogs from "@/components/ListCardBlogs";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <Headers />
      </div>
      <div className="block md:hidden">
        <HeaderResponsive />
      </div>
      <Filter />
      {/* <ListCardBlogs /> */}
    </div>
  );
}
