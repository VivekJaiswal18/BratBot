
import Link from "next/link";


export default function Home() {

  return (
    <div>
      <div className="mt-60 min-h-screen font-luckiest-guy-regular  flex-col justify-center items-center text-white">
        <div className="flex justify-center text-7xl items-center">Hello, This is <p className="text-red-700 ml-3">BratBot</p></div>
        <div className="flex justify-center text-4xl mt-5 items-center">You can ask your doubts but there will be a twist...</div>
         <Link href={"/chat"}>
      <div className="flex justify-center mx-auto items-center border-gray-400 border-4 w-1/4 rounded-xl text-2xl mt-20 cursor-pointer p-4">
        {/* Let's Go */}
        Let&apos;s Go
      </div>
    </Link>
      </div>
    </div>
  );
}
