"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineSearch,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const today = new Date();
const options = { year: "numeric", month: "long", day: "2-digit" };
const formattedDate = today.toLocaleDateString("id-ID", options);

export default function Navbar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setQuery("");
  };

  return (
    <header className="container flex justify-between p-4 mx-auto">
      <div className="w-1/6 h-fit sm:hidden">
        <Link href="/">
          <Image
          priority
            src="/Logo Radar Pekalongan 1.webp"
            width={250}
            height={250}
            alt="Radar Pekalongan Logo 1"
            loading="eager"
          />
        </Link>
      </div>
      <div className="flex place-content-center w-1/3 sm:w-2/3">
        <input
          type="text"
          className="ps-6 text-lg rounded-l-lg border-2 border-slate-200 outline-none w-full bg-slate-300 focus:ring-slate-500 focus:border-slate-500 md:h-14 sm:h-8"
          placeholder="Cari berita..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link href={`/search?search=${query}`} onClick={handleSearch}>
          <AiOutlineSearch className="md:h-14 h-fit w-20 bg-slate-500 text-white rounded-r-lg p-2 sm:w-8" />
        </Link>
      </div>

      <button className="bg-red-600 rounded-md md:w-40 md:h-14 text-white p-2 sm:h-10 sm:mx-4">
        Network
      </button>
      <div className="sm:w-1/3">
        <span>{formattedDate}</span>
        <ul className="flex">
          <Link href={"https://web.facebook.com/radarpekalongan/"}>
            <li>
              <AiFillFacebook className="w-8 h-8 text-blue-400 sm:mx-1 sm:w-4" />
            </li>
          </Link>
          <li>
            <AiFillTwitterCircle className="w-8 h-8 text-blue-400 sm:mx-1 sm:w-4" />
          </li>
          <Link href={"https://www.instagram.com/radarpekalongan/"}>
            <li>
              <AiFillInstagram className="w-8 h-8 text-pink-600 sm:mx-1 sm:w-4" />
            </li>
          </Link>
          <Link href={"https://www.youtube.com/@Radarpekalonganonline"}>
            <li>
              <AiFillYoutube className="w-8 h-8 text-red-600 sm:mx-1 sm:w-4" />
            </li>
          </Link>
          <li>
            <AiOutlineWhatsApp className="w-8 h-8 text-green-500 sm:mx-1 sm:w-4" />
          </li>
        </ul>
      </div>
    </header>
  );
}
