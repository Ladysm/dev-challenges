import Img from './../../public/bg-cafe.webp'
import Image from "next/image";
import Hero from "./hero";
export default function Home() {
  return (
    <div className="flex flex-col  ">
      <header className=" flex flex-col ">
        <Image src={Img} alt='banner'/>
      </header>
      <div className=" relative flex flex-col bg-[#111315] w-full h-screen justify-center items-center  ">
      <Hero/>
      </div>
      </div>
  );
}
