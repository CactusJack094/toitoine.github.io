import React from "react";
import photo from "./../photo.jpg";

const Navbar = () => {
  return (
    <html class="dark">
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a
            href="https://www.linkedin.com/in/antoine-levy-342559140/"
            class="flex items-center"
          >
            <img class="mr-3   inline-block h-12 w-12 rounded-full " 
            src="https://media-exp1.licdn.com/dms/image/D4D35AQEbd-DQuxbL4g/profile-framedphoto-shrink_200_200/0/1659371046517?e=1667253600&v=beta&t=AzJYflCNtvJWw91lGrnsg1b2JHMfa6U8varbPnb9zbA" alt="photo"/>
            {/* <img src={logo} class="mr-3 h-6 sm:h-9" alt=" Logo" /> */}


            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Antoine L.
            </span>
          </a>
          <div class="flex md:order-2">
            <a href="mailto:antlev.pro@gmail.com">
            <button
              type="button"
              class="
                 block py-2 pr-4 pl-3 block w-full 
                 rounded-full border-0
                 text-sm font-semibold
                 bg-blue-700 text-slate-50 transition ease-in-out
                 transition ease-in-out delay-150  
                 hover:-translate-y-1 
                 hover:scale-110 
                 hover:bg-violet-700 
                 hover:text-slate-100
                 duration-500 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              
              Contactez moi !
            </button>
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Expériences
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Formations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </html>
  );
};

export default Navbar;
