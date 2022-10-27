import React from "react";

function Timeline() {
  return (
    <html class="dark">
      <div className="bg-gray-900">

      <span class="font-semibold text-gray-400 uppercase">
            mes expériences
          </span>

        <ol class="mt-10 relative  border-l border-gray-200 dark:border-gray-700">
          <li class="ml-20 mb-20">
            <h3 class="block items-center mb-3 text-lg font-semibold text-white">
              Canal+ - Developpeur front-end{" "}
              <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                Stage
              </span>
            </h3>

            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Mars 2022 - Septembre 2022.
            </time>

            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            - Développement de features sur une IHM interne.<br/>
            - Développement d'une nouvelle version d'IHM de gestion d'accès client.<br/>
            - Mise en place d'un CI/CD avec GitLab.<br/><br/>

            <span class="font-bold">Compétences acquises :</span> React JS, script GitLab, Javascript.
            </p>
          </li>
          <li class="ml-20 mb-20">
            <h3 class="block items-center mb-3 text-lg font-semibold text-white">
              Cora - Developpeur front-end{" "}
              <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                Stage
              </span>
            </h3>

            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Septembre 2021 - Mars 2022.
            </time>

            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            - Développement sur le site ecommerce cora.fr <br/>
            - Développement de nouvelles features (blog, Google Maps) <br/>
            - Formation sur le VueJS (langage principalement utilisé) <br/><br/>

            <span class="font-bold">Compétences acquises :</span> VueJS.
            </p>
          </li>

          <li class="ml-20 mb-20">
            <h3 class="block items-center mb-3 text-lg font-semibold text-white">
              ECF Group - Chef de projet ecommerce{" "}
              <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-800 ml-3">
                Part time
              </span>
            </h3>

            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Avril 2020 - Juillet 2021.
            </time>

            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            - Gestion de la base de donnée des articles via Akeneo. <br/>
            - Gestion du site Chomette en utilisant Magento afin de mettre à jour l'ensemble du site.<br/>
            - Utilisation de google Analytics afin d'optimiser les recherches du site internet et la mise en avant des produits.<br/>
            - Optimisation du moteur de recherche du site Chomette via Algolia.<br/>
            - Création/Présentation d'une proposition de refont d'un site ecommerce du groupe en utilisant Shopify.<br/>
            - Benchmark des sites concurrents afin d'optimiser au mieux l'expérience utilisateur.<br/>
            - Travail en collaboration avec une agence SEO pour le blog.<br/>
            - Travail en collaboration avec une agence WEB pour la réalisation de l'ensemble des projets touchant le site chomette.<br/><br/>

            <span class="font-bold">Compétences acquises :</span> Gestion de projet, Akeneo, Magento, Shopify, Algolia.
            </p>
          </li>
        </ol>
      </div>
    </html>
  );
}

export default Timeline;
