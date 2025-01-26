import Image from "next/image";

export default function Home() {
  return (
    <>

   <nav className="container flex items-center justify-between mx-auto  h-14">
    <h1 className="font-bold text-xl">Home</h1>
    <div className="flex gap-5">
    <h1>Performance</h1>
    <h1>Reliability</h1>
    </div>
   </nav>
    </>
  );
}
