import Filter from "@/components/FilterData/Filter";
import HeaderResponsive from "@/components/ResponsiveComponents/HeaderResponsive";
import Headers from "@/components/Headers";

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
    </div>
  );
}
