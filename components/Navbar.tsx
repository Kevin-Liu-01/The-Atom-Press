import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";

const sidebarBelow = [
  { name: "About Us", href: "/" },
  { name: "Submit Here", href: "/" },
];

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="py-4 border-b-4 border-bordermaroon px-8 mx-auto max-w-[100rem] mb-8">
      <div className="grid grid-cols-3 md:mx-0 ">
        {/*tab logo */}
        <button
          className="my-auto relative"
          onClick={() => setSidebar(!sidebar)}
        >
          <svg
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[35px] md:h-10  w-auto hover:scale-105 duration-200 ease-in-out"
          >
            <path
              d="M25.375 6.625H6.625V50.375H25.375V6.625ZM31.625 6.625V50.375H50.375V6.625H31.625ZM3.5 0.375H53.5C54.3288 0.375 55.1237 0.70424 55.7097 1.29029C56.2958 1.87634 56.625 2.6712 56.625 3.5V53.5C56.625 54.3288 56.2958 55.1237 55.7097 55.7097C55.1237 56.2958 54.3288 56.625 53.5 56.625H3.5C2.6712 56.625 1.87634 56.2958 1.29029 55.7097C0.70424 55.1237 0.375 54.3288 0.375 53.5V3.5C0.375 2.6712 0.70424 1.87634 1.29029 1.29029C1.87634 0.70424 2.6712 0.375 3.5 0.375V0.375Z"
              fill="#97266D"
            />
          </svg>
        </button>

        <Sidebar showSidebar={sidebar} closeBar={setSidebar} />

        {/*browser logo begin*/}
        <div className="flex justify-center ">
          <a href="/">
            <img
              src="/Atom_Logo.png"
              className=" flex my-auto h-20  hover:scale-105  duration-200 ease-in-out"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
