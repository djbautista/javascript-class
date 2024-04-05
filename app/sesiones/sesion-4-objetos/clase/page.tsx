'use client';

import Card from '@/components/Card';
import {
  EsIgualJavaQueJavascript,
  HistoriaJavascript,
  InstallCodeRunner,
  PrimerosPasos,
} from '@/components/Content';
import Footer from '@/components/Footer';
import Link from '@/components/Link';

import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { ReactNode, useMemo, useState } from 'react';
import { X } from 'react-feather';

const PreparationContent = [
  {
    icon: '🧙🏻‍♂️',
    title: 'Origen y usos de JavaScript',
    content: <HistoriaJavascript />,
  },
  {
    icon: '❓',
    title: 'JavaScript es lo mismo que Java?',
    content: <EsIgualJavaQueJavascript />,
  },
  {
    icon: '🏗️',
    title: 'Preparación del Entorno de Desarrollo',
    content: <InstallCodeRunner />,
  },
  {
    icon: '🚼',
    title: 'Primeros Pasos en JavaScript',
    content: <PrimerosPasos />,
  },
];

export default function IntroClase() {
  interface DialogContent {
    title: string;
    content: ReactNode;
  }

  const [content, setContent] = useState<DialogContent | null>(null);
  const { title, content: dialogContent } = useMemo(
    () => content ?? ({} as DialogContent),
    [content],
  );

  return (
    <div className="flex flex-col gap-24">
      <section className="flex w-full flex-wrap items-center justify-center gap-2 md:gap-8">
        <Card
          className="w-full max-w-2xl flex-1 md:min-h-[460px] xl:min-h-[620px]"
          variant="transparent"
        >
          <h1 className="text-2xl font-bold md:text-4xl">Clase</h1>
          <h2 className="pb-4 text-neutral-400 md:text-lg">
            Es hora de la clase. Ahora aplica todo lo que aprendiste sobre los objetos.
          </h2>

          <div className="p-4 md:p-12">
            <Image
              className="w-full rounded-2xl"
              src="/object.gif"
              alt="Teacher"
              width={600}
              height={600}
            />
          </div>
        </Card>
      </section>
      <Dialog
        open={content !== null}
        onClose={() => setContent(null)}
        className="shadow-zi-100 absolute top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
      >
        <Dialog.Panel className="!tw-text-zinc-500 relative max-h-[800px] w-full max-w-3xl transform overflow-y-scroll bg-white p-8 text-left align-middle shadow-xl transition-all md:h-auto md:rounded-2xl">
          <Dialog.Title
            as="div"
            className="flex justify-between text-lg font-bold leading-6"
          >
            <h3 className="font-bold">{title}</h3>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setContent(null)}
            >
              <X />
            </button>
          </Dialog.Title>
          <div className="overflow-y-scroll py-8">{dialogContent}</div>
        </Dialog.Panel>
      </Dialog>
      <Footer className="flex flex-1 gap-8">
        <Link href="./evaluacion" className="text-3xl" target="_self">
          ←
        </Link>
        <Link href="./actividad" className="text-3xl" target="_self">
          →
        </Link>
      </Footer>
    </div>
  );
}
