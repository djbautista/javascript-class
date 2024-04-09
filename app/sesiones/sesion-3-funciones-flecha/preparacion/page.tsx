'use client';

import Card from '@/components/Card';
import {
  Sesion3InfoDialog1,
  Sesion3InfoDialog2,
} from '@/components/Content';
import Footer from '@/components/Footer';
import Link from '@/components/Link';

import { Dialog } from '@headlessui/react';
import { ReactNode, useMemo, useState } from 'react';
import { X } from 'react-feather';

const preparationContent = [
  {
    icon: '💪',
    title: '¿En que se diferencian de las funciones regulares?',
    content: <Sesion3InfoDialog1 />,
  },
  {
    icon: '❓',
    title: '¿Para que usan?',
    content: <Sesion3InfoDialog2 />,
  }
];

export default function IntroPreparacion() {
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
        <Card className="w-full max-w-xl flex-1 md:min-h-[460px] xl:min-h-[620px]">
          <h1 className="text-2xl font-bold md:text-4xl">Preparación</h1>
          <h2 className="pb-4 text-neutral-400 md:text-lg">
            Debes repasar este contenido antes de la sesión 3.
          </h2>

          <div className="text-md flex flex-wrap py-4 md:p-12 md:text-3xl">
            <ul className="flex flex-col gap-8">
              {preparationContent.map(({ icon, title, content }, index) => (
                <button
                  key={index}
                  className="flex items-center justify-start gap-2 text-left text-lg text-neutral-300 hover:text-white md:gap-4 md:text-3xl"
                  onClick={() => setContent({ title, content })}
                >
                  <span>{icon}</span>
                  <span>{title}</span>
                </button>
              ))}
            </ul>
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
          <div className="py-8">{dialogContent}</div>
        </Dialog.Panel>
      </Dialog>
      <Footer className="flex flex-1 gap-8">
        <Link href="../sesion-3-funciones-flecha" className="text-3xl" target="_self">
          ←
        </Link>
        <Link href="./evaluacion" className="text-3xl" target="_self">
          →
        </Link>
      </Footer>
    </div>
  );
}
