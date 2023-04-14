import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="  max-w-[900px] mx-auto overflow-hidden ">
      <ul className="flex justify-between items-center h-10 text-white text-xl p-3  ">
        <li class="flex flex-row  gap-8 items-center ">
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/tag" style={{ textDecoration: "none" }}>
            Tags{" "}
          </Link>
        </li>
        <li>
          <Link to="/random" style={{ textDecoration: "none" }}>
            Quote
          </Link>
        </li>
        </li>
        <li>
          <Link to="/bookmark" style={{ textDecoration: "none" }}>
            Bookmark
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
