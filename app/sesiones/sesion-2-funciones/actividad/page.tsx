'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Link from '@/components/Link';
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
            Pon en práctica lo que has aprendido en esta sesión 2.
          </h2>

          <div className="text-md flex flex-col items-center gap-8 overflow-hidden py-4 font-light md:p-12">
            <h3>Calculadora de IMC (Índice de Masa Corporal)</h3>
            <p>
              El Índice de Masa Corporal (IMC) es una medida que se utiliza para
              determinar si una persona tiene un peso saludable para su altura.
              Ayuda a evaluar si una persona está en riesgo de sufrir problemas
              de salud relacionados con el peso, como enfermedades
              cardiovasculares, diabetes tipo 2, presión arterial alta, etc. Se
              calcula dividiendo el peso (en kilogramos) por el cuadrado de la
              altura (en metros).
            </p>
            <p>
              Desarrolla un programa simple que permita a los usuarios calcular
              su IMC a partir de las variables peso (en kilogramos) y altura (en
              metros). El programa realizar el cálculo del IMC y proporcionar en
              consola uno de estos resultados basándose en la siguiente tabla:
            </p>
            <table className="w-full border border-white">
              <tr>
                <td>{' IMC < 18.5 '}</td>
                <td>Bajo peso</td>
              </tr>
              <tr>
                <td>{' 18.5 ≤ IMC < 24.9'}</td>
                <td>Peso saludable</td>
              </tr>
              <tr>
                <td>{' 25 ≤ IMC < 29.9'}</td>
                <td>Sobrepeso</td>
              </tr>
              <tr>
                <td>{' 30 ≤ IMC'}</td>
                <td>Obesidad</td>
              </tr>
            </table>

            <span className="font-medium">Bonus</span>
            <p>
              Evalua el caso cuando el valor IMC calculado no sea válido (NaN),
              y muestra en consola un mensaje de error alertando que los valores
              iniciales no son válidos.
            </p>
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
                      Debes crear y usar correctamente al menos dos funciones
                      para este programa.
                    </li>
                    <li>
                      Calcula el IMC utilizando la fórmula: IMC = peso / (altura
                      * altura).
                    </li>
                    <li>
                      Debes utilizar una serie de condicionales para interpretar
                      el IMC y mostrar un mensaje correspondiente con la
                      categoría del IMC (por ejemplo: &quot;Bajo peso&quot;,
                      &quot;Peso saludable&quot;, &quot;Sobrepeso&quot;, etc.).
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
