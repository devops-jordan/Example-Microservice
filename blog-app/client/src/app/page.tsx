import Image from "next/image";
import FormPost from "./_components/FormPost";

export default function Home() {
  return (
    <main className="bg-[#282c34] h-full text-white tracking-tighter text-[20px] p-6">
      <h1 className="text-sky-600">Create a Post      </h1>
      <FormPost />
    </main>
  );
}
