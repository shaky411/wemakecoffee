"use client"

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/free-brands-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import coffeeUK from "../public/assets/coffeeUK.webp"


export default function Banner() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    return (
        <main className="flex flex-col overflow-hidden justify-center items-center bg-laurel-500 text-slate-100 gap-10 p-20">
            <div className="flex flex-col gap-5 lg:flex-row max-w-5xl mx-auto">
            <div className="flex flex-col gap-5 justify-start items-start">
                <h1 className="text-4xl md:text-6xl uppercase tracking-tight font-bold text-green-400">Join the Coffee revolution</h1>
                <p className="font-semibold md:w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores ut minima nisi provident possimus. Dolorem sed sint modi voluptas!</p>
                <span className="font-light md:w-2/3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ullam.</span>
                <div className="flex gap-4 flex-col md:flex-row text-laurel-600 font-bold">
                    <Link 
                    href="#contact-page"
                    className="bg-laurel-200 hover:bg-laurel-300 duration-300 py-3 px-5 text-center"
                    >
                        Contact us
                    </Link>

                    <button className="bg-green-300 hover:bg-green-500 duration-300 py-3 px-5 text-center" onClick={onOpen}>View our menu</button>
      <Modal
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
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