'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Link from '@/components/Link';
import InlineCode from '@/components/Code/InlineCode';
import { Disclosure, Transition } from '@headlessui/react';
import { Key } from 'react-feather';

export default function IntroActividad() {
  return (
    <article className="flex flex-col gap-12">
      <section className="flex w-full flex-wrap items-center justify-center gap-2 md:gap-8">
        <Card
          className="w-full max-w-3xl flex-1 md:min-h-[460px] xl:min-h-[620px]"
          variant="transparent"
        >
          <h1 className="text-2xl font-bold md:text-4xl">Actividad</h1>
          <h2 className="pb-4 text-neutral-400 md:text-lg">
            Pon en práctica lo que has aprendido en esta sesión 4.
          </h2>

          <div className="text-md flex flex-col items-center gap-8 overflow-hidden py-4 font-light md:p-12">
            <h3>Sistema de gestión de libros</h3>
            <p>
              Estás desarrollando un sistema de gestión de libros para una
              biblioteca. Como parte de este proyecto, necesitas crear una
              estructura de datos que represente un libro y su información
              asociada. El objeto libro debe tener las siguientes propiedades:
            </p>
            <table className="w-full border border-white">
              <thead>
                <th>
                  <td>Campo</td>
                  <td>Descripcion</td>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>Título del Libro</td>
                  <td>
                    El título del libro, que identifica de manera única el libro
                    dentro de la biblioteca
                  </td>
                </tr>
                <tr>
                  <td>Autor del Libro</td>
                  <td>El nombre del autor que escribió el libro</td>
                </tr>
                <tr>
                  <td>Género del Libro</td>
                  <td>
                    El género literario al que pertenece el libro, como ficción,
                    no ficción, misterio, ciencia ficción, etc
                  </td>
                </tr>
                <tr>
                  <td>Año de Publicación</td>
                  <td>El año en que el libro fue publicado por primera vez</td>
                </tr>
                <tr>
                  <td>Editorial</td>
                  <td>La editorial donde se publico</td>
                </tr>
              </tbody>
            </table>
            <p>
              Además de estas propiedades, necesitas implementar un método en el
              objeto del libro que permita imprimir la información completa del
              libro en la consola en un formato legible. Esta información debe
              incluir el título del libro, el autor, el año de publicación y el
              género del libro.
            </p>

            <span className="font-medium">Bonus</span>
            <p>Crea una función para filtrar los libros por autor.</p>
          </div>
          <div>
            <Disclosure>
              <Disclosure.Button className="flex w-full items-center justify-start gap-4 rounded-lg bg-gray-100 p-4 text-neutral-900 hover:bg-gray-200">
                <span className="text-2xl">
                  <Key />
                </span>
                <span className="text-left">Tips</span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="p-4 text-neutral-100">
                  <ol className="flex list-inside list-decimal flex-col gap-8">
                    <li>
                      <strong>Comprender la Estructura de un Objeto:</strong>{' '}
                      Antes de empezar a escribir código, asegúrate de entender
                      cómo se estructura el objeto Libro. Recuerda que un objeto
                      está formado por pares de{' '}
                      <InlineCode>clave-valor</InlineCode>, donde las claves son
                      las propiedades y los valores son los datos asociados a
                      esas propiedades.
                    </li>
                    <li>
                      <strong>Identificar las Propiedades Necesarias:</strong>{' '}
                      Revisa los requisitos del problema y determina qué
                      propiedades son necesarias para representar un libro
                      correctamente. Asegúrate de incluir propiedades como el
                      título, autor, año de publicación, editorial y género del
                      libro en tu objeto.
                    </li>
                  </ol>
                </Disclosure.Panel>
              </Transition>
            </Disclosure>
          </div>
        </Card>
      </section>
      <Footer className="flex flex-1 gap-8">
        <Link href="./clase" className="text-3xl" target="_self">
          ←
        </Link>
      </Footer>
    </article>
  );
}
