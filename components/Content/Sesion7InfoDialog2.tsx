import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion7InfoDialog2 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
        En JavaScript, hay varios prototipos importantes que son esenciales para comprender cómo funcionan los objetos y la herencia en el lenguaje. Algunos de los prototipos más importantes son:
      </p>
      <ol className='list-decimal pl-6'>
        <li>
          <strong>Object.prototype:</strong> {' '}
          Es el prototipo base de todos los objetos en JavaScript. Contiene métodos y propiedades comunes que son compartidos por todos los objetos, como &apos;toString&apos;, &apos;valueOf&apos; y &apos;hasOwnProperty&apos;.
        </li>
        <li>
          <strong>Array.prototype:</strong> {' '}
          Es el prototipo para todos los objetos de tipo array en JavaScript. Contiene métodos útiles para manipular y trabajar con arrays, como &apos;push&apos;, &apos;pop&apos;, &apos;forEach&apos; y &apos;map&apos;.
        </li>
        <li>
          <strong>Function.prototype:</strong> {' '}
          Es el prototipo para todas las funciones en JavaScript. Contiene métodos importantes que se pueden utilizar en todas las funciones, como &apos;call&apos;, &apos;apply&apos; y &apos;bind&apos;.
        </li>
        <li>
          <strong>Number.prototype:</strong> {' '}
          Los callbacks también se utilizan para manejar errores en operaciones asíncronas. 
          Generalmente, el primer parámetro de un callback en JavaScript es reservado para un error (si ocurre), permitiendo que el flujo del programa maneje adecuadamente las excepciones.
        </li>
        <li>
          <strong>Control de flujo:</strong> {' '}
          Es el prototipo para todos los números en JavaScript. Contiene métodos para trabajar con números, como &apos;toFixed&apos;, &apos;toPrecision&apos; y &apos;toString&apos;.
        </li>
        <li>
          <strong>Date.prototype:</strong> {' '}
          Es el prototipo para todos los objetos de tipo fecha en JavaScript. Contiene métodos para trabajar con fechas y horas, como &apos;getDate&apos;, &apos;getMonth&apos;, &apos;getFullYear&apos; y &apos;getTime&apos;.
        </li>
      </ol>
      <p className='leading-8 mt-4'>
        Estos son solo algunos de los prototipos más importantes en JavaScript, pero hay muchos más que se utilizan para varios tipos de objetos y funcionalidades en el lenguaje. 
        Comprender cómo funcionan estos prototipos y cómo se pueden extender y manipular es fundamental para dominar JavaScript y escribir código efectivo y eficiente.
      </p>
    </article>
  );
};

export default Sesion7InfoDialog2;
