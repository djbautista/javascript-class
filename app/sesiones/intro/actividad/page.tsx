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
            Pon en práctica lo que has aprendido en esta sesión.
          </h2>

          <div className="text-md flex flex-col items-center gap-8 overflow-hidden py-4 font-light md:p-12">
            <p>
              Carlos es un señor mayor que maneja un restaurante muy antiguo de
              la ciudad, y busca poder manejar el número de órdenes que tiene
              diariamente.
            </p>
            <p>
              Por ello, te contrató para realizar un pequeño programa que le
              permita guardar el número de órdenes, y que el programa determine
              y le diga si las órdenes superaron el monto previsto, para así
              incrementar su capacidad en el siguiente día; o si por el
              contrario la cantidad de órdenes fue menor, para así reducir su
              capacidad del siguiente día y ahorrar gastos.
            </p>
            <p>
              Adicionalmente, tiene la sospecha de que la demanda es mayor en
              los días pares del mes, pero le cuesta a veces saber con exactitud
              cuándo es un día par y cuándo es uno impar, por lo que quiere
              guardar el día del mes en el programa, y que este lo ayude con
              esta tarea tan difícil para él.
            </p>
            <p>
              Por último, Carlos quiere que el programa le avise aquellas veces
              en que el día es impar y la demanda esperada fue mayor a la
              prevista, ya que con total seguridad el siguiente día la demanda
              será mayor.
            </p>
            <span className="font-medium">Bonus</span>
            <p>
              Carlos está interesado en saber la proporción de órdenes cumplidas
              respecto al total previsto, para tener una idea clara del
              rendimiento del día.
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
                <Disclosure.Panel className="p-12 p-4 text-neutral-100">
                  <ul className="flex list-inside list-decimal flex-col gap-8">
                    <li>
                      Guardar el Número de Órdenes y el Día del Mes: Declarar
                      variables para almacenar el número total de órdenes
                      recibidas en un día y el día del mes actual.
                    </li>
                    <li>
                      Determinar si el Día es Par o Impar: Utilizar operadores y
                      estructuras de control para verificar si el día del mes es
                      par o impar, ayudando a Carlos a confirmar sus sospechas
                      sobre la demanda.
                    </li>
                    <li>
                      Comparar la Demanda con las Expectativas: Carlos te
                      proporcionará un número previsto de órdenes. El programa
                      debe comparar el número real de órdenes con este número
                      previsto.
                    </li>
                    <li>
                      Ajuste de Capacidad del Restaurante: Basándose en la
                      comparación, el programa decidirá si es necesario
                      incrementar o reducir la capacidad del restaurante para el
                      siguiente día.
                    </li>
                    <li>
                      Alertas Específicas para Días Impares con Alta Demanda: En
                      caso de que el día sea impar y la cantidad de órdenes
                      supere la prevista, el programa deberá alertar a Carlos,
                      indicando que es probable una mayor demanda al día
                      siguiente.
                    </li>
                    <li>
                      Bonus - Cálculo de Proporción de Órdenes Cumplidas: Por
                      último, el programa calculará y mostrará la proporción del
                      número de órdenes cumplidas respecto al número previsto,
                      utilizando operadores aritméticos.
                    </li>
                  </ul>
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
