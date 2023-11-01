import Link from "next/link";
import Image from "next/image";
import coffee from "../public/assets/beans.jpg";

export default function Contact() {
  return (
    <main className="flex justify-center gap-10 p-10 md:p-20 border-t max-w-5xl mx-auto">

      <div className="flex flex-col w-1/2 gap-5">
        <h2 className="text-5xl font-semibold tracking-tight text-laurel-600">
          Contact Us
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          accusamus sint consequatur, iure quam harum beatae delectus
          necessitatibus incidunt repellat!
        </p>
      </div>

      <div className="flex flex-col">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-5">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="Email"
          required
          name="user_email"
        />
        <button>Submit</button>
      </div>
    </main>
  );
}
