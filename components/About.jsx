import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import bristolImage from "../public/assets/bristolCoffee.jpg"
import bathImage from "../public/assets/bathCoffee.jpg"
import londonImage from "../public/assets/londonCoffee.jpg"

import {
  faMapLocationDot, faMugHot,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <main className="bg-laurel-200">
      <section className="max-w-5xl py-20 mx-auto px-8">
        <div className="flex flex-col justify-center items-center space-y-3 mb-10 text-center">
        <FontAwesomeIcon
                    icon={faMugHot}
                    className="text-5xl text-laurel-700"
                  />
          <p className="sm:text-4xl text-2xl font-medium tracking-wide text-laurel-700 dark:text-slate-200">
            We love making coffee
          </p>
          <p className="font-light text-laurel-800 dark:text-gray-400">
            Here are some of the locations you can find us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="md:col-span-3 cursor-default flex flex-col items-start justify-start bg-laurel-800 rounded-xl shadow-md">
            <Image 
            src={bristolImage}
            alt="Bristol picture"
            width={1000}
            className="w-full rounded-t-lg"
            />
            <div className="flex flex-col items-start gap-3 p-6">
            <h4 className="text-green-400 text-lg font-semibold">Bristol</h4>
            <p className="text-laurel-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laborum?
            </p>
            <Link href="/">
            <FontAwesomeIcon
                    icon={faMapLocationDot}
                    className="text-2xl text-blue-500 hover:text-blue-700 duration-300"
                  />
            </Link>
            </div>
          </div>

          <div className="cursor-default flex flex-col items-start justify-start bg-laurel-800 rounded-xl shadow-md">
            <Image 
            src={bathImage}
            alt="Bath picture"
            width={1000}
            className="w-full rounded-t-lg"
            />
            <div className="flex flex-col items-start gap-3 p-6">
            <h4 className="text-laurel-300 text-lg font-semibold">Bath</h4>
            <p className="text-laurel-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laborum?
            </p>
            <Link href="/">
            <FontAwesomeIcon
                    icon={faMapLocationDot}
                    className="text-2xl text-blue-500 hover:text-blue-700 duration-300"
                  />
            </Link>
            </div>
          </div>

          <div className="lg:col-span-2 cursor-default flex flex-col items-start justify-start bg-laurel-800 rounded-xl shadow-md">
            <Image 
            src={londonImage}
            alt="London picture"
            width={1000}
            className="w-full rounded-t-lg"
            />
            <div className="flex flex-col items-start gap-3 p-6">
            <h4 className="text-laurel-300 text-lg font-semibold">London</h4>
            <p className="text-laurel-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, laborum?
            </p>
            <Link href="/">
            <FontAwesomeIcon
                    icon={faMapLocationDot}
                    className="text-2xl text-blue-500 hover:text-blue-700 duration-300"
                  />
            </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
