import { Carousel } from "../components/Carousel";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-slate-900 relative overflow-y-scroll">
      <Carousel />
    </div>
  );
};
