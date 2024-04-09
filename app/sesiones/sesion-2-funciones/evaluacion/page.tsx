'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Link from '@/components/Link';
import { Disclosure, Transition } from '@headlessui/react';

const evaluationContent = [
  {
    icon: '🔠',
    question: 'Argumentos de una función',
    answer:
      'Los argumentos de una función son los valores que se pasan a la función cuando se invoca, y pueden ser accedidos dentro del cuerpo de la función a través de los argumentos.',
  },
  {
    icon: '◀',
    question: 'valores de retorno (return) en funciones',
    answer:
      'El valor de retorno en JavaScript es el valor devuelto por una función cuando se llama a la función. Este valor puede ser cualquier tipo de dato, y su uso es fundamental para obtener resultados de funciones y realizar operaciones adicionales basadas en esos resultados.',
  },
  {
    icon: '🏃‍♂️',
    question: '¿Que son "salidas tempranas" en funciones?',
    answer:
      'Las salidas tempranas en funciones son una técnica útil para mejorar la legibilidad, eficiencia y robustez del código al devolver un valor y salir de la función temprano basándose en condiciones específicas. Esto ayuda a evitar cálculos innecesarios y manejar casos especiales de manera clara y efectiva.',
  },
  {
    icon: '🏁',
    question: '¿Cómo se ejecutan las funciones?',
    answer:
      'Las funciones se ejecutan cuando son invocadas, es decir, cuando son llamadas desde otro lugar del código.',
  },
  {
    icon: '❓',
    question: 'Que es el operador "()" en una funcion?',
    answer:
      'El operador "()" en JavaScript se utiliza para invocar funciones. Cuando colocas paréntesis al lado de un nombre de función, estás indicando que deseas ejecutar esa función.',
  },
  {
    icon: '👶',
    question: '¿Una variable puede guardar una función?',
    answer:
      'Sí, en JavaScript, una variable puede almacenar una función. Las funciones en JavaScript son objetos de primera clase, lo que significa que pueden ser tratadas como cualquier otro tipo de datos, como números, cadenas o arrays.',
  },
  {
    icon: '🏠',
    question: '¿Que es Scope local?',
    answer:
      'El scope local se refiere al alcance de una variable, función o bloque de código dentro de una función. Las variables declaradas dentro de una función tienen un alcance local, lo que significa que solo pueden ser accedidas dentro de esa función y no están disponibles fuera de ella.',
  },
  {
    icon: '🌍',
    question: '¿Que es Scope global?',
    answer:
      'el scope global se refiere al alcance de una variable, función o bloque de código que está disponible en todo el programa, es decir, fuera de cualquier función o bloque específico. Las variables declaradas fuera de las funciones tienen un alcance global y pueden ser accedidas y modificadas desde cualquier parte del código.',
  },
  {
    icon: '🌟',
    question: '¿”var” qué es y por qué no se usa?',
    answer:
      'Aunque "var" todavía es válido en JavaScript, se recomienda evitar su uso en favor de "let" y "const" debido a sus comportamientos más predecibles y menos propensos a errores.',
  },
];

export default function IntroEvaluacion() {
  return (
    <div className="flex flex-col gap-24">
      <section className="flex w-full flex-wrap items-center justify-center gap-2 md:gap-8">
        <Card
          className="w-full max-w-3xl flex-1 md:min-h-[460px] xl:min-h-[620px]"
          variant="transparent"
        >
          <h1 className="text-2xl font-bold md:text-4xl">Evaluación</h1>
          <h2 className="pb-4 text-neutral-400 md:text-lg">
            Evaluemos un poco de lo que has aprendido en la sesion 2.
          </h2>

          <div className="text-md flex flex-wrap overflow-hidden py-4 md:p-12">
            <ul className="flex flex-col gap-4">
              {evaluationContent.map(({ icon, question, answer }, index) => (
                <div key={index}>
                  <Disclosure>
                    <Disclosure.Button className="flex w-full items-center justify-start gap-4 rounded-lg bg-gray-100 p-4 text-neutral-900 hover:bg-gray-200">
                      <span className="text-2xl">{icon}</span>
                      <span className="text-left">{question}</span>
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
                        {answer}
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              ))}
            </ul>
          </div>
        </Card>
      </section>
      <Footer className="flex flex-1 gap-8">
        <Link href="./preparacion" className="text-3xl" target="_self">
          ←
        </Link>
        <Link href="./clase" className="text-3xl" target="_self">
          →
        </Link>
      </Footer>
    </div>
  );
}
