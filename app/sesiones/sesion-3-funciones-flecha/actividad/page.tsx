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
            Pon en práctica lo que has aprendido en esta sesión 3.
          </h2>

          <div className="text-md flex flex-col items-center gap-8 overflow-hidden py-4 font-light md:p-12">
            <h3>Ejercicios practicos</h3>
            <h4>Ejercicio 1: Filtrado de Números Pares</h4>
            <p>
              Dado un array de números, crea una función que filtre y devuelva solo los números pares utilizando una arrow function.
            </p>
            <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800 w-full">
              <InlineCode variant="secondary">
                {'//'} Ejemplo de entrada
              </InlineCode>
              <code className="text-gray-500">
                <pre>{`const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n`}</pre>
              </code>
              <InlineCode variant="secondary">
                {'//'} Ejemplo de salida esperada 
                <br />
                {'//'} [2, 4, 6, 8, 10]
              </InlineCode>
            </section>
            <h4>Ejercicio 2: Cálculo del Área de un Círculo</h4>
            <p>
              Crea una función que calcule y devuelva el área de un círculo dado su radio utilizando una arrow function.
            </p>
            <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800 w-full">
              <InlineCode variant="secondary">
                {'//'} Ejemplo de uso
              </InlineCode>
              <code className="text-gray-500">
                <pre>{`console.log(calcularAreaCirculo(5));\n`}</pre>
              </code>
              <InlineCode variant="secondary">
                {'//'}  Salida esperada: 78.54
              </InlineCode>
            </section>

            <span className="font-medium">Bonus</span>
            <h4>Ejercicio 3: Concatenación de Nombres</h4>
            <p>
              Dado un array de nombres, crea una función que los concatene en una sola cadena separada por comas utilizando una arrow function.
            </p>
            <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800 w-full">
              <InlineCode variant="secondary">
                {'//'} Ejemplo de entrada
              </InlineCode>
              <code className="text-gray-500">
                <pre>{`const nombres = ['Juan', 'María', 'Carlos', 'Ana'];\n`}</pre>
              </code>
              <InlineCode variant="secondary">
                {'//'} Ejemplo de salida esperada 
                <br />
                {'//'} &quot;Juan, María, Carlos, Ana&quot;
              </InlineCode>
            </section>
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
                      <strong>Ejercicio 1:</strong>{' '}
                      Recuerda cómo usar <InlineCode>filter()</InlineCode>: Utiliza el método <InlineCode>filter()</InlineCode> para filtrar los números pares de la matriz. Investiga cómo se utiliza este método si no estás seguro.
                    </li>
                    <li>
                      <strong>Ejercicio 1:</strong>{' '}
                      Recuerda la fórmula del área del círculo: El área de un círculo se calcula mediante la fórmula <code>π * radio^2</code>. Puedes usar <InlineCode>Math.PI</InlineCode> para obtener el valor de π y 
                      <InlineCode>Math.pow()</InlineCode> o simplemente &quot;*&quot; para elevar el radio al cuadrado.
                    </li>
                    <li>
                      <strong>Ejercicio 2:</strong>{' '}
                      Recuerda la operación módulo (%): Para determinar si un número es par, puedes usar el operador <code>%</code>. Si <code>n % 2</code> es igual a <code>0</code>, entonces <code>n</code> es par.
                    </li>
                    <li>
                      <strong>Ejercicio 3:</strong>{' '}
                      Utiliza <InlineCode>join()</InlineCode> para concatenar los nombres: El método <InlineCode>join()</InlineCode> se utiliza para concatenar elementos de una matriz en una cadena, separados por un delimitador específico.
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
