'use client'
import Headercomp from "@/components/HeaderComp";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const {data: session} = useSession()

  if(session && session?.user) {
    redirect("/dashboard")
  }
  
  return (
    <div className="bg-black bg-grid-gray-100/[0.1]">
    <Navbar/>
    <div className="h-[50rem] w-full  -z-0 relative flex items-center justify-center ">
      <div className="absolute pointer-events-none inset-0 z-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Headercomp/>
  </div>
</div>
  );
}
