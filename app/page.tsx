import Card from '@/components/Card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <header className="flex w-full flex-wrap-reverse justify-between gap-8">
        <div className="flex flex-1 flex-col gap-2">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-white md:text-5xl lg:text-6xl">
            Módulo de Javascript
          </h1>
          <h2 className="text-3xl font-extrabold text-white">
            Generación 33 y 32
          </h2>
        </div>
        <div className="flex w-full justify-end py-0 md:w-auto md:py-1">
          <Image
            className="h-8 w-fit object-contain md:h-12"
            src="/kodemia-logo.svg"
            alt="Kodemia Logo"
            width={300}
            height={83}
          />
        </div>
      </header>

      <section className="flex w-full flex-row-reverse items-start justify-evenly gap-24 py-12">
        <Image
          src="/js-banner.png"
          alt="Javascript Module Banner"
          className="hidden rounded-lg object-contain md:block"
          width={400}
          height={400}
          objectFit="fit"
        />
        <div className="flex w-full max-w-[600px] flex-1 flex-col gap-8">
          <Card className="flex flex-col gap-4">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/metodologia"
                  className="text-gray-300 underline transition duration-150 ease-in-out hover:text-gray-100"
                >
                  Metodología
                </Link>
              </li>
              <li>
                <Link
                  href="/sesiones/intro"
                  className="text-gray-300 underline transition duration-150 ease-in-out hover:text-gray-100"
                >
                  Sesión 1 - Introducción a JS
                </Link>
              </li>
              <li>Sesión 2 - Funciones y scopes</li>
              <li>Sesión 3 - Intro a Arreglos y loops</li>
              <li>Sesión 4 - Arrow functions y ejercicios</li>
              <li>Sesión 5 - Callbacks, Funciones como argumentos (HELP)</li>
            </ul>
          </Card>
          <Card variant="transparent">
            <ul className="flex flex-col gap-2">
              <li>Sesión 6 - Objetos</li>
              <li>Sesión 7 - Prototypes y Métodos de String</li>
              <li>Sesión 8 - Date, Math y conversiones</li>
              <li>Sesión 9 - Métodos de Array</li>
              <li>Sesión 10 - Métodos de Array Pt2</li>
            </ul>
          </Card>
          <Card>
            <ul className="flex flex-col gap-2">
              <li>Sesión 11 - Map, filter y reduce</li>
              <li>Sesión 12 - Linters, formatters</li>
              <li>Sesión 13- Introducción a JS en la web</li>
              <li>Sesión 14 - Creando elementos</li>
              <li>Sesión 15 - Módulos JS</li>
            </ul>
          </Card>
          <Card variant="transparent">
            <ul className="flex flex-col gap-2">
              <li>Sesión 16 - Eventos</li>
              <li>Sesión 17 - Formularios</li>
              <li>Sesión 18 - Enviando información</li>
              <li>Sesión 19 - Recibiendo información</li>
              <li>Sesión 20 - Memorias del navegador</li>
            </ul>
          </Card>
          <Card>
            <ul className="flex flex-col gap-2">
              <li>Sesión 21 - Practica formulario</li>
              <li>Sesión 22 - Entrega de formulario</li>
              <li>Sesión 23 - Explicación de reto de JS (DevTo)</li>
              <li>Sesión 24 - Reto en progreso</li>
              <li>Sesión 25 - Entrega de reto de JS</li>
              <li>Sesión 26 - JS en la Industria</li>
            </ul>
          </Card>
        </div>
      </section>
    </main>
  );
}
