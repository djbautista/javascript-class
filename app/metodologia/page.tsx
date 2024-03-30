'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Link from '@/components/Link';
import { Disclosure, Transition } from '@headlessui/react';

const Highlight = ({ children }: React.HTMLAttributes<HTMLSpanElement>) => (
  <b className="text-green-500"> {children} </b>
);

const metodologiaContent = [
  {
    defaultOpen: true,
    icon: '🔄',
    question: 'Flipped Classroom',
    answer: (
      <p>
        La metodología de Flipped Classroom consiste en invertir el proceso de
        aprendizaje tradicional.
        <br />
        <br />
        Los alumnos estudian los contenidos en casa <Highlight>antes</Highlight>
        de la clase, y ya en clase solo repasamos lo aprendido, y reforzamos el
        conocimiento.
        <br />
        <br />
        Al iniciar cada sesión, su mentor hará tres a cinco preguntas al azar
        sobre la preparación previa, y los alumnos deberán responderlas. Podrá
        escoger a uno de ustedes al azar o realizar una pregunta abierta.
      </p>
    ),
  },
  {
    icon: '🤔',
    question:
      '¿Debo estudiar algo antes de la clase para aprovechar al máximo la sesión?',
    answer: (
      <p>
        Sí, cada sesión tendrá una preparación previa que te ayudará a entender
        mejor los conceptos que veremos en clase. Este contenido estará
        disponible en la plataforma justo al terminar la sesión anterior.
        <br />
        <br />
        Es importante que sepas que no hay penalización si no estudias antes de
        la clase, pero sí es altamente recomendado. No revisar la preparación
        previa puede hacer que te sientas perdido en la clase, y no aproveches
        al máximo el tiempo.
        <br />
        <br />
        Además, tendremos un espacio de preguntas y respuestas al inicio de cada
        sesión, donde podrás aclarar tus dudas sobre la preparación previa.
      </p>
    ),
  },
  {
    icon: '🥇',
    question: 'Ranking de participación',
    answer: (
      <p>
        Al final de cada semana, se publicará un ranking de participación en el
        que se tomará en cuenta la asistencia a las sesiones, la participación
        en clase y la entrega de tareas.
        <br />
        <br />
        Este raking se reinicia cada semana, y al final del módulo se tendrá en
        cuenta para la entrega de reconocimientos, y para la selección de
        alumnos destacados.
      </p>
    ),
  },
  {
    icon: '🫣',
    question: 'Sin cámara ==> Potencial víctima',
    answer:
      'Si no tienes tu cámara encendida, y no participas en clase, hay una muy alta probabilidad de que te escoja para responder preguntas. Así que si no quieres ser sorprendido, asegúrate de participar activamente en clase.',
  },
  {
    icon: '‼️',
    question: 'Revisión de actividades',
    answer: (
      <p>
        Por último, al final de cada semana, se escogerán a los Koders con menor
        puntuación en el Ranking, para revisar las actividades y tareas de dicha
        semana.
        <br />
        <br />
        En pocas palabras: si no participas, lo más probable es que te toque
        revisión de actividades.
      </p>
    ),
  },
  {
    icon: '🧙🏻‍♂️',
    question: 'Sin más preámbulos, ¡Bienvenidos, Koders!',
    answer: (
      <div>
        <iframe
          className="h-[200px] w-full md:h-[300px] md:w-2/3"
          src="https://www.youtube.com/embed/Gs069dndIYk?si=RDETLHjaxM_yKD_S"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    ),
  },
];

export default function Metodologia() {
  return (
    <div className="flex flex-col gap-24">
      <section className="flex w-full flex-wrap items-center justify-center gap-2 md:gap-8">
        <Card
          className="w-full max-w-3xl flex-1 md:min-h-[460px] xl:min-h-[620px]"
          variant="transparent"
        >
          <h1 className="text-2xl font-bold md:text-4xl">
            ¿Cómo será nuestra metodología?
          </h1>
          <h2 className="pb-4 text-neutral-400 md:text-lg">
            Esto aplicará para todas las sesiones de este módulo.
          </h2>

          <div className="text-md flex flex-wrap overflow-hidden py-4 md:p-12">
            <ul className="flex flex-col gap-4">
              {metodologiaContent.map(
                ({ icon, question, answer, defaultOpen }, index) => (
                  <div key={index}>
                    <Disclosure defaultOpen={defaultOpen}>
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
                ),
              )}
            </ul>
          </div>
        </Card>
      </section>
      <Footer className="flex flex-1 gap-8">
        <Link href="/" className="text-3xl" target="_self">
          ←
        </Link>
      </Footer>
    </div>
  );
}
