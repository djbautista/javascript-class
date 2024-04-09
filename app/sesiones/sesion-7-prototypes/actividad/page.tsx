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
            Pon en práctica lo que has aprendido en esta sesión 7.
          </h2>

          <div className="text-md flex flex-col items-center gap-8 overflow-hidden py-4 font-light md:p-12">
            <h3>Ejercicio: Validación de Correo Electrónico</h3>
            <p>
              Escribe una función llamada &apos;validarCorreoElectronico&apos; que reciba un correo electrónico como argumento y verifique si es una dirección de correo electrónico válida. 
              La función debe seguir los siguientes criterios de validación:
            </p>
            <ul className="list-disc pl-6">
              <li>Debe contener un solo símbolo &quot;@&quot;.</li>
              <li>Debe tener al menos un carácter antes del &quot;@&quot; y después del &quot;@&quot;.</li>
              <li>Debe tener al menos un punto (&quot;.&quot;) después del &quot;@&quot; y debe haber al menos un carácter después del punto.</li>
            </ul>
            <p>
              La función debe retornar &apos;true&apos; si el correo electrónico es válido y &apos;false&apos; en caso contrario, imprimir por consola si el resultado es valido.
            </p>

            <span className="font-medium">Bonus</span>
            <p>
              Modifica la función validarCorreoElectronico para que también verifique si el nombre de usuario (la parte antes del &quot;@&quot; en la dirección de correo electrónico) contiene solo caracteres alfanuméricos (letras y números) 
              y los caracteres especiales permitidos en las direcciones de correo electrónico (como &quot;.&quot;, &quot;-&quot;, &quot;_&quot;). 
              Si el nombre de usuario contiene algún otro carácter especial, la función debe retornar false.
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
                      <strong>Divide y vencerás:</strong>{' '}
                      Siempre que te enfrentes a un problema complejo, intenta dividirlo en partes más pequeñas y manejables. 
                      En el caso de la validación de correos electrónicos, puedes dividir la tarea en subproblemas más simples, como verificar la presencia del símbolo &quot;@&quot;.
                    </li>
                    <li>
                      <strong>Utiliza recursos de aprendizaje</strong>{' '}
                      En la pagina de preparación de la sesion 7 existen varios metodos que te podrian ayudar con esta labor, en esta caso podrias revisar los metodos <InlineCode>indexOf</InlineCode> y <InlineCode>lastIndexOf</InlineCode>.
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
