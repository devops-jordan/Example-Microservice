import Image from "next/image";
import FormPost from "./_components/FormPost";
import Posts from "./_components/post/Posts";
import { getAllPostAndComents } from "@/action/query";

export default async function Home() {
  const { data } = await getAllPostAndComents();
  return (
    <main className="bg-[#282c34] h-full text-white tracking-tighter text-[20px] p-6">
      <div className="">
        <h1 className="text-sky-600 font-bold text-base md:text-[25px] transition-all duration-150">Create a Posts:</h1>
        <FormPost />
        <Posts confitData={data} />
      </div>
    </main>
  );
}
