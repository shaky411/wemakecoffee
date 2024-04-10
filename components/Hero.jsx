import Link from "next/link";

export default function Hero() {
  return (
    <main className=" gap-5 w-full h-full mx-auto mt-16 ">
      <div className="bg-[url('../public/assets/coffeebg.jpg')] bg-no-repeat h-[600px] bg-cover">
        <div className="bg-gray-500 bg-opacity-40 w-full h-[600px]">
          <div className="mb-16 flex flex-col gap-5 items-center p-10 md:p-20 justify-center">
            <h1 className="font-semibold text-4xl sm:text-6xl md:text-7xl text-laurel-900 rounded tracking-tight">
              WeMakeCoffee™
            </h1>
            <h5 className="text-2xl sm:font-light tracking-tight sm:text-5xl sm:leading-none text-gray-200">
              Making great coffee since 1984.
            </h5>
            <p className="w-1/1 md:w-1/2 text-slate-200 md:text-lg text-center">
              This is a simple brochure site and is a great way to advertise your business and get your core message across.
            </p>
            <Link
              href="/"
              className="text-center py-3 w-full sm:w-1/3 px-4 text-sm font-semibold uppercase hover:bg-slate-500 hover:bg-opacity-30 border-2 shadow-lg text-slate-200 duration-500 rounded"
            >
              more info
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
