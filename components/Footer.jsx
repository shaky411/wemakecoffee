import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import fairLogo from "../public/assets/fairTrade.png"
import coffeeUK from "../public/assets/coffeeUK.webp"

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHome, faX } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative text-slate-200">
      <div className="absolute top-0 left-0 w-full overflow-hidden bg-laurel-800">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block fill-laurel-200 dark:fill-gray-900 duration-500"
          ></path>
        </svg>
        <div className="container px-6 py-10 mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1 p-20">
            <div className="flex flex-col gap-5 text-slate-200">
              <h5 className="text-2xl text-green-400">Company</h5>
              <span>WeMakeCoffee™ &copy; 2023</span>
              <Link
                href="https://goo.gl/maps/pGoQGpQAoPzZ8FKQ7"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-sm hover:text-blue-500"
              >
                Bristol | London | Bath
              </Link>
              <div className="flex gap-5">
              <Image 
              src={fairLogo}
              alt="fair trade coffee logo"
              width={70}
              />
              <Image 
              src={coffeeUK}
              alt="Coffee association logo"
              width={70}
              />
              </div>
              
            </div>
            <div className="flex flex-col gap-5 text-slate-200">
              <h5 className="text-2xl text-green-400">About Us</h5>
              <p>We make amazing coffee!</p>
              <div className="flex flex-col gap-5 text-slate-200">
              <h5 className="text-2xl text-green-400">Links</h5>
              <div className="flex gap-5">
                <Link href="/">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="text-2xl hover:text-pink-500 hover:scale-110 duration-300"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-2xl hover:text-pink-500 hover:scale-110 duration-300"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/marcnorris1984"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-2xl hover:text-pink-500 hover:scale-110 duration-300"
                  />
                </Link>
                <Link
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-2xl hover:text-pink-500 hover:scale-110 duration-300"
                  />
                </Link>
                <Link
                  href="https://github.com/shaky411"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-2xl hover:text-pink-500 hover:scale-110 duration-300"
                  />
                </Link>
              </div>
              <Link
                  href="https://www.graygecko.co.uk"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="hover:text-blue-500"
                >
                  Website designed by GrayGecko
                </Link>
            </div>
            </div>
            <div className="flex flex-col gap-5 text-slate-200">
              <h5 className="text-2xl text-green-400">Contact</h5>
              <Link href="/Contact">
                <p className="hover:text-blue-500 duration-300">
                  Have a question? Send us a message, here.
                </p>
              </Link>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}