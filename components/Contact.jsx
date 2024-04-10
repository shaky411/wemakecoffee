"use client"

import { Input, Textarea } from "@nextui-org/react";

import Link from "next/link";
import Image from "next/image";
import coffee from "../public/assets/beans.jpg";
import { useState } from "react";

export default function Contact() {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    setEmail("")
    setMessage("")

    alert("message sent")
    
  }

  return (
    <main
      className="flex flex-col md:flex-row justify-center items-center gap-10 p-10 md:p-20 border-t max-w-5xl mx-auto"
      id="contact-page"
    >
      <div className="flex flex-col w-1/2 gap-5">
        <h2 className="text-5xl font-semibold tracking-tight text-laurel-600">
          Contact Us
        </h2>
        <p>
          This is a basic message form and is a great first point of contact with your business. This form can be customised to capture valuable information from potential clients.
        </p>

        <div>
        <h3 className="text-blue-500 text-2xl">wemakecoffee@coffee.com</h3>
      </div>
      </div>

    <div className="md:w-1/2 bg-laurel-200 p-10 rounded-lg w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
    <Input isRequired type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <Textarea
    isRequired
      label="Message"
      placeholder="Enter your message..."
      className=""
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
    <button className="bg-laurel-500 text-white px-4 py-2 hover:opacity-50 duration-500" type="submit">Submit</button>
      </form>
    </div>
      
    </main>
  );
}
