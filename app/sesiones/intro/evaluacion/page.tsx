'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Link from '@/components/Link';
import { Disclosure, Transition } from '@headlessui/react';

const evaluationContent = [
  {
    icon: '🌐',
    question: '¿JavaScript y Java son lo mismo?',
    answer:
      'No, JavaScript y Java son completamente diferentes en términos de sintaxis, usos y conceptos.',
  },
  {
    icon: '✅',
    question:
      '¿Cuál es el propósito principal de JavaScript en el desarrollo web?',
    answer:
      'JavaScript se utiliza principalmente para crear páginas web interactivas y dinámicas.',
  },
  {
    icon: '#️⃣',
    question: 'El operador `#` sirve para...',
    answer: 'En realidad no existe el operador `#` en JavaScript',
  },
  {
    icon: '❓',
    question: '¿Cuántos tipos de datos primitivos existen en JavaScript?',
    answer:
      'Existen 7 tipos de datos primitivos en JavaScript: string, number, bigint, boolean, null, undefined, symbol',
  },
  {
    icon: '🧮',
    question: '¿Qué operador se utiliza para la asignación en JavaScript?',
    answer: 'El operador `=` se utiliza para la asignación.',
  },
  {
    icon: '➕',
    question: '¿Qué operador se utiliza para la adición en JavaScript?',
    answer: 'El operador `+` se utiliza para la adición.',
  },
  {
    icon: '🔀',
    question:
      '¿Cuál operador lógico representa la operación "Y" en JavaScript?',
    answer: 'El operador `&&` representa la operación "Y".',
  },
  {
    icon: '🚦',
    question:
      '¿Qué estructura de control se utiliza para ejecutar bloques de código basados en condiciones específicas?',
    answer:
      'La estructura `if` se utiliza para ejecutar bloques de código basados en condiciones específicas.',
  },
  {
    icon: '⚖️',
    question:
      '¿Qué símbolo se utiliza para la comparación estricta en JavaScript?',
    answer:
      'El operador `===` se utiliza para la comparación estricta, comparando tanto el valor como el tipo.',
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
            Evaluemos un poco de lo que has aprendido.
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
