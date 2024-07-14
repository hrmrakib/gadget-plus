import React from "react";
import TopBar from "./TopBar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <TopBar />

      <div>
        <div>
          <Link href='/'>gadgetPlus</Link>
        </div>

        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
