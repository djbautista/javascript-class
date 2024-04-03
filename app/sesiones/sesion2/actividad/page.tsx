'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Link from '@/components/Link';
import { Disclosure, Transition } from '@headlessui/react';
import { Key } from 'react-feather';

export default function IntroActividad() {
  return (
    <div className="flex flex-col gap-12">
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
              El Índice de Masa Corporal (IMC) es una medida que se utiliza para determinar si una persona tiene un peso saludable para su altura.
              Ayuda a evaluar si una persona está en riesgo de sufrir problemas de salud relacionados con el peso, como enfermedades cardiovasculares, diabetes tipo 2, presión arterial alta, etc.
              Se calcula dividiendo el peso (en kilogramos) por el cuadrado de la altura (en metros).
            </p>
            <p>
              Desarrolla una aplicación web que permita a los usuarios calcular su IMC ingresando su peso (en kilogramos) y su altura (en metros). 
              La aplicación debe mostrar el resultado del cálculo del IMC y proporcionar una interpretación del resultado basada en la siguiente tabla:
            </p>
            <table className='w-full border border-white'>
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

            <h4>Instrucciones:</h4>
            <ol className="list-decimal">
              <li>Crea una función llamada "calcularIMC" que tome dos parámetros: peso (en kilogramos) y altura (en metros).</li>
              <li>Dentro de la función, calcula el IMC utilizando la fórmula: IMC = peso / (altura * altura).</li>
              <li>Devuelve el valor del IMC calculado.</li>
              <li>Crea una función llamada "interpretarIMC" que tome un parámetro IMC.</li>
              <li>Dentro de la función, utiliza una serie de condicionales para interpretar el IMC y mostrar un mensaje correspondiente con la categoría del IMC (por ejemplo: "Bajo peso", "Peso saludable", "Sobrepeso", etc.).</li>
              <li>Utiliza ambas funciones para calcular e interpretar el IMC de al menos tres personas diferentes, muestra los resultados en la consola del navegador.</li>
            </ol>
            <span className="font-medium">Bonus</span>
            <p>
              Asegúrate de que los usuarios ingresen valores válidos para el peso y la altura (números positivos).
              Muestra mensajes de error o alertas si los datos ingresados no son válidos.
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
                      Comprender el Problema:Asegúrate de comprender qué es el IMC y cómo se calcula. IMC = peso / (altura * altura). 
                    </li>
                    <li> 
                      Validación de Entrada: Asegurarte de que el usuario ingrese valores válidos para el peso y la altura.. 
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
    </div>
  );
}
