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
            Pon en práctica lo que has aprendido en esta sesión 5.
          </h2>

          <div className="text-md flex flex-col gap-8 overflow-hidden py-4 font-light md:p-12">
            <h3 className='text-center'>Ejemplos propuestos dentro de la clase</h3>
            <p>
              Crea una función que reciba 3 funciones diferentes y las ejecute en orden
            </p>
            <p>
              Crea un ejecutor de funciones:
            </p>
            <ol className='list-decimal pl-6'>
              <li>Crea una función llamada &apos;sayHi&apos; que recibe como parámetro un nombre y te salude.</li>
              <li>Crea una función llamada &apos;executor&apos; que reciba como primer parámetro una función y como segundo parámetro un string y que en su cuerpo ejecute la función recibida y pase como parámetro el segundo parámetro recibido en esta función.</li>
              <li>Ejecuta la función &apos;executor&apos; anterior pasando como primer parámetro la función &apos;sayHi&apos; y como segundo parámetro un string con tu nombre.</li>
            </ol>
            <p>
              Crea una función que se te salude cada 2 segundos
            </p>
            <p>
              Crea una función que te salude y haz que se ejecute después de 10 segundos de espera
            </p>

            {/* <span className="font-medium">Bonus</span> */}
            {/* <p>Crea una función para filtrar los libros por autor.</p> */}
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
                      <strong>Ten encuenta las recomendaciones de la clase:</strong>{' '}
                      Puedes tomar guia de los ejemplos vistos en la pagina de preparación.
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
