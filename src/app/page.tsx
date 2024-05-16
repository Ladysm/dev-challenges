
import Hero from "./hero";
export default function Home() {
  return (
    <div className="flex flex-col  ">
      <header className=" flex flex-col   w-full lg:bg-header-background-laptop sm:bg-header-background bg-cover bg-no-repeat bg-center  h-[300px]"></header>
      <div className="flex flex-col bg-[#111315] w-full h-screen justify-center items-center">
      <Hero/>
      </div>
      </div>
  );
}
