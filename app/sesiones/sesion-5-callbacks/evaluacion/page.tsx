'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Link from '@/components/Link';
import { Disclosure, Transition } from '@headlessui/react';

const evaluationContent = [
  {
    icon: '⏲',
    question: '¿Que acción realiza la funcion setTimeout?',
    answer:
      'a función setTimeout es una función incorporada en JavaScript que se utiliza para programar una función para que se ejecute después de un cierto período de tiempo. Su sintaxis básica es la siguiente: setTimeout(funcion, tiempo);',
  },
  {
    icon: '⏳',
    question: '¿Qué significado tiene asíncrono en javascript?',
    answer:
      'Hace referencia a la capacidad de ejecutar operaciones de manera no secuencial, lo que significa que el código no se ejecuta en un orden estrictamente definido de principio a fin. En lugar de eso, las operaciones asíncronas pueden ocurrir en paralelo con otras operaciones o pueden esperar hasta que se cumpla cierta condición antes de ejecutarse.',
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
            Evaluemos un poco de lo que has aprendido en la sesion 5.
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
