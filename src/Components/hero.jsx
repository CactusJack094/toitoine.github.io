import React from "react";
import logoReact from "./../logo.svg";
import logoTL from "./../tlogo2.svg";
import dockerLogo from "./../docker-3.svg";

const hero = () => {
  return (
    <section id="#hero" class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="mailto:antlev.pro@gmail.com"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span class="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 mr-3">
            Disponible
          </span>{" "}
          {/* <span class="text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3">
            Pas disponible
          </span>{" "} */}
          
          <span class="text-sm font-medium">
            Ouvert pour proposition de poste et/ou projet !
          </span>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          GRAND TITRE A DEFINIR
        </h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Bienvenu sur mon site internet. Scrollez pour en savoir plus sur mes
          expériences, mes projets ou tout simplement moi.
        </p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <svg
              class="ml-2 -mr-1 w-5 h-5 md:animate-bounce"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        
        </div>
        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span class="font-semibold text-gray-400 uppercase">
            MES COMPETENCES
          </span>
          <div class="flex flex-wrap justify-center items-center mt-8  sm:justify-between">
              <img class="h-20" alt="logo" src={logoReact}></img>
              <img class="h-10" alt="logo" src={logoTL}></img>
              <img class="h-10 " alt="logo" src={dockerLogo}></img>
              
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default hero;
