import Link from "next/link";

export default function Hero() {
  return (
    <main className=" gap-5 w-full h-full mx-auto mt-16 ">
      <div className="bg-[url('../public/assets/coffeebg.jpg')] bg-no-repeat bg-cover">
        <div className="bg-gray-500 bg-opacity-50 w-full p-10">
          <div className="mb-16 flex flex-col gap-5 items-center justify-center text-center ">
            <h1 className="font-semibold text-4xl md:text-7xl text-laurel-200 tracking-tight">
              WEMAKECOFFEE™
            </h1>
            <h5 className="text-2xl sm:font-extralight tracking-tight sm:text-5xl sm:leading-none text-gray-200">
              Making great coffee since 1984.
            </h5>
            <p className="w-1/1 md:w-1/2 text-slate-200 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              maxime!s
            </p>
            <Link
              href="/"
              className="py-3 w-full sm:w-1/3 px-4 text-sm font-semibold uppercase hover:bg-slate-500 hover:bg-opacity-30 border-2 shadow-lg text-slate-200 duration-500 rounded"
            >
              more info
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
