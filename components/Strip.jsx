import Image from "next/image";
import coffeeCup from "../public/assets/coffeeCup.jpg";
import Link from "next/link";

export default function Strip() {
  return (
    <main className="flex flex-col lg:flex-row justify-center gap-10 p-10 md:p-20 max-w-5xl mx-auto">
      <Image className="rounded-md shadow-md" src={coffeeCup} alt="coffee cup image" width={400} />
      <div className="space-y-5">
        <h2 className="text-5xl font-semibold tracking-tight text-laurel-600">
          Coffee is Life
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quae
          ratione earum excepturi sed illum ut beatae! Reiciendis dolore quidem
          aut nihil ullam impedit! Harum minus veniam delectus quos debitis?
        </p>
        <div>
        <Link
          className="bg-laurel-500 text-slate-100 py-2 px-4 rounded"
          href="/"
        >
          SignUp
        </Link>
        </div>
        
      </div>
    </main>
  );
}
