import React from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import Image from "next/image";
import Navitems from "./Navitems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="Logo" width={50} height={50} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <Navitems />
        <p>Sign In</p>
      </div>
    </nav>
  );
};

export default Navbar;
