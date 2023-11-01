import Image from "next/image";
import beans from "../public/assets/beans.jpg";
import Link from "next/link";

export default function BottomStrip() {
  return (
    <main className="flex flex-col lg:flex-row justify-center gap-10 p-10 md:p-20 border-t max-w-5xl mx-auto">
      <div className="space-y-5">
        <h2 className="text-5xl font-semibold tracking-tight text-laurel-600">
          Perfect Beans
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus sint consequatur, iure quam harum beatae delectus necessitatibus incidunt repellat!
        </p>
        <div>
        <Link
          className="bg-laurel-500 text-slate-100 py-2 px-4 rounded"
          href="/"
        >
          More info
        </Link>
        </div>
      </div>
      <Image className="rounded-md shadow-md" src={beans} alt="coffee cup image" width={400} />
    </main>
  );
}
