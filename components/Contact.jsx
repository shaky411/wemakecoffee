import Link from "next/link";
import Image from "next/image";
import coffee from "../public/assets/beans.jpg"

export default function Contact() {
    return (
        <main className="flex flex-col lg:flex-row justify-center gap-10 p-10 md:p-20 border-t max-w-5xl mx-auto">
          <div className="space-y-5">
            <h2 className="text-5xl font-semibold tracking-tight text-laurel-600">
              Contact Us
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus sint consequatur, iure quam harum beatae delectus necessitatibus incidunt repellat!
            </p>
            <div>
            
            </div>
          </div>
          
        </main>
      );
}