import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Footer from "./dashboard/_components/Footer";

export default function Home() {
  return (<div>
    <div className=" p-5  flex justify-between items-center shadow-lg   ">
    <Link href={'/dashboard'}>
             <div className='flex gap-2 items-center'>
           
                <Image src={'/thinkzone.png'} width={40} height={40} alt='logo'/>
                <h2 className='font-bold text-lg'>AI Space Revamp</h2>
                
            </div></Link>

      <Link href="/dashboard">
        <Button className=" bg-primary px-8 font-semibold">Get Started</Button>
      </Link>
    </div>

    <div className=" h-[80vh] flex flex-col justify-center items-center gap-5 p-2">
      <div className=" flex flex-col items-center justify-center">
        <h1 className=" text-5xl font-sans italic font-bold text-wrap ">
        Elevate your spaces with captivating AI-driven redesigns
        </h1>
      </div>
      <p className=" text-lg text-gray-500 text-center">
      "Step into the future of interior design. Upload a photo of your room and receive personalized, stunning redesigns tailored to your unique style in seconds."
      </p>

      <Link href="/dashboard/">
        <Button
          variant="outline"
          className=" shadow-lg px-8 py-4 hover:bg-primary hover:text-white border-primary border-2
         hover:scale-105 animate-bounce duration-600 "
        >
          Get Started
        </Button>
      </Link>

      <div className=" flex w-[100px]  lg:w-full md:w-full items-center justify-center gap-8 ">
        <Image
          src={"/emptyroom.jpg"}
          height={450}
          width={450}
          alt="empty room image"
          className=" shadow-md shadow-primary rounded-3xl border border-primary"
        />
        <span className="font-bold text-5xl">→</span>
        <Image
          src={"/new kitchen.png"}
          height={450}
          width={450}
          alt="ai kitchen image"
          className=" shadow-md shadow-primary rounded-3xl border border-primary"
        />
      </div>
    </div>
    <Footer />
  </div>
  );
}
