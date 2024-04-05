'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Link from '@/components/Link';
import { Disclosure, Transition } from '@headlessui/react';

const evaluationContent = [
  {
    icon: '1️⃣',
    question: 'Sintaxis más concisa con un solo argumento',
    answer:
      'Cuando una arrow function tiene un solo argumento, puedes omitir los paréntesis alrededor del argumento.',
  },
  {
    icon: '◀',
    question: 'Return implícito',
    answer:
      'Si el cuerpo de una arrow function consiste en una única expresión, puedes omitir la palabra clave "return" y la llave "{}". El valor de esa expresión se convierte automáticamente en el valor de retorno de la función.',
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
            Evaluemos un poco de lo que has aprendido en la sesion 3.
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
