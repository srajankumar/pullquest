import Link from "next/link";
import React from "react";

const Navbar = () => {
  const closeMenu = () => {
    document
      .getElementById("menuToggle")
      .querySelector("input").checked = false;
  };

  return (
    <div>
      <header className="text-black backdrop-blur-sm body-font">
        <div className="md:flex hidden mx-auto flex-wrap p-5 flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-bold items-center text-gray-900 hover:text-purple-950 mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M212 158.06v-34.18a59.61 59.61 0 0 0-17.57-42.42L173 60h19a12 12 0 0 0 0-24h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0V77l21.46 21.46A35.76 35.76 0 0 1 188 123.88v34.18a36 36 0 1 0 24 0ZM200 204a12 12 0 1 1 12-12a12 12 0 0 1-12 12ZM108 64a36 36 0 1 0-48 33.94v60.12a36 36 0 1 0 24 0V97.94A36.07 36.07 0 0 0 108 64ZM72 204a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm0-128a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"
              />
            </svg>
          </Link>
          <nav className="md:flex hidden ml-auto font-bold mr-auto flex-wrap items-center text-base justify-center">
            <Link
              href="/instructions"
              className="mx-5 hover:underline underline-offset-4 hover:text-purple-950 "
            >
              Instructions
            </Link>
            <Link
              href="/explanation"
              className="mx-5 hover:underline underline-offset-4 hover:text-purple-950 "
            >
              Explanation
            </Link>
            <Link
              href="/submissions"
              className="mx-5 hover:underline underline-offset-4 hover:text-purple-950 "
            >
              Submissions
            </Link>
          </nav>
          <div className="md:flex hidden">
            <a href="https://github.com/srajankumar/pullquest" target="_blank">
              <svg
                className="hover:hover:text-purple-950"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.563 4.938c.363.312.676.912.676 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>
      <div className="z-50 backdrop-blur-sm md:hidden grid">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu" className="w-full">
              <Link
                href="/"
                className="my-5 text-xl hover:underline underline-offset-4 hover:text-purple-950 "
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="instructions"
                className="my-5 text-xl hover:underline underline-offset-4 hover:text-purple-950 "
                onClick={closeMenu}
              >
                Instructions
              </Link>
              <Link
                href="explanation"
                className="my-5 text-xl hover:underline underline-offset-4 hover:text-purple-950 "
                onClick={closeMenu}
              >
                Explanation
              </Link>
              <Link
                href="submissions"
                className="my-5 text-xl hover:underline underline-offset-4 hover:text-purple-950 "
                onClick={closeMenu}
              >
                Submissions
              </Link>
              <Link
                href="https://github.com/srajankumar/pullquest"
                target="_blank"
                className="list"
                onClick={closeMenu}
              >
                <svg
                  className="hover:hover:text-purple-950"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.563 4.938c.363.312.676.912.676 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
                  />
                </svg>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
