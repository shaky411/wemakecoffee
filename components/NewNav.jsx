"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import coffeeUK from "../public/assets/coffeeUK.webp";
import fairTrade from "../public/assets/fairTrade.png";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-brands-svg-icons";

// Components

// Icons
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

export default function NewNav() {
  const [navbar, setNavbar] = useState(false);

  return (
    <main>
      <div className="fixed shadow-lg bg-opacity-90 dark:bg-opacity-90  mx-auto top-0 left-0 right-0 z-30 bg-laurel-200 dark:bg-slate-900 duration-500">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:block">
              {/* LOGO */}
              <div>
                <Link href="/" className="flex items-center py-4 px-2">
                 
                  <span className="font-semibold text-laurel-700 dark:text-slate-200 text-2xl">
                    WeMakeCoffee™
                  </span>
                </Link>
              </div>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-500 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FontAwesomeIcon
                      className="text-xl text-rose-500"
                      icon={faXmark}
                    />
                  ) : (
                    <FontAwesomeIcon className="text-xl" icon={faBars} />
                  )}
                </button>
              </div>
            </div>
          </div>

          
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="text-lg mx-3 sm:text-slate-600 sm:dark:text-slate-400 hover:text-slate-100 md:hover:text-slate-800 md:hover:dark:text-slate-200 text-center md:hover:border-b rounded md:rounded-none hover:bg-indigo-500 md:border-green-400 py-4 md:py-0 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="text-lg mx-3 sm:text-slate-600 sm:dark:text-slate-400 hover:text-slate-100 md:hover:text-slate-800 md:hover:dark:text-slate-200 text-center md:hover:border-b rounded md:rounded-none hover:bg-indigo-500 md:border-green-400 py-4 md:py-0 md:hover:bg-transparent">
                  <Link href="#about-section" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="text-lg mx-3 sm:text-slate-600 sm:dark:text-slate-400 hover:text-slate-100 md:hover:text-slate-800 md:hover:dark:text-slate-200 text-center md:hover:border-b rounded md:rounded-none hover:bg-indigo-500 md:border-green-400 py-4 md:py-0 md:hover:bg-transparent">
                  <Link href="#contact-page" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>

                {/* Mobile Menu Items */}

                {/* <div className="flex space-x-3 justify-center md:hidden mt-10"></div> */}

                <div className="flex flex-col justify-center items-center space-y-4 my-5 md:hidden">
                  {/* <Image src={geckoLogo} alt="" width={50} /> */}
                  <span>WeMakeCoffee™ &copy; 2023</span>
                  <div className="flex gap-5">
                    <Image src={fairTrade} alt="" width={50} />
                    <Image src={coffeeUK} alt="" width={50} />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
