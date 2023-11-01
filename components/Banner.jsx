import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-brands-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import coffeeUK from "../public/assets/coffeeUK.webp"




export default function Banner() {
    return (
        <main className="flex flex-col overflow-hidden justify-center items-center bg-laurel-500 text-slate-100 gap-10 p-20">
            <div className="flex flex-col gap-5 lg:flex-row max-w-5xl mx-auto">
            <div className="flex flex-col gap-5 justify-start items-start">
                <h1 className="text-4xl md:text-6xl uppercase tracking-tight font-bold text-green-400">Join the Coffee revolution</h1>
                <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores ut minima nisi provident possimus. Dolorem sed sint modi voluptas!</p>
                <span className="font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ullam.</span>
                <div className="flex gap-4 flex-col md:flex-row text-laurel-600 font-bold">
                    <Link 
                    href="/"
                    className="bg-laurel-200 hover:bg-laurel-300 duration-300 py-3 px-5 text-center"
                    >
                        Contact us
                    </Link>
                    <Link 
                    href="/"
                    className="bg-green-300 hover:bg-green-500 duration-300 py-3 px-5 text-center"
                    >
                        View our menu
                    </Link>
                </div>
            </div>
            <Image
            className="" 
            src={coffeeUK}
            alt="coffee uk logo"
            width={400}
            />
            {/* <FontAwesomeIcon
                    icon={faMugHot}
                    className="text-[200px] text-laurel-600"
                  /> */}
            </div>
            
        </main>
    )
}