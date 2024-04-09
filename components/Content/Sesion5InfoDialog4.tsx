import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion5InfoDialog4 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
        En JavaScript, puedes pasar funciones como argumentos a otras funciones de la misma manera que pasas cualquier otro tipo de datos, como números o cadenas. Aquí te muestro cómo hacerlo:
      </p>
      <ol className='list-decimal pl-6'>
        <li>
          <strong>Definición de la función que acepta funciones como argumentos:</strong> {' '}
          Primero, debes tener una función que acepte funciones como argumentos. Esta función puede ser cualquier función que definas en tu código.
        </li>
        <li>
          <strong>Pasando la función como argumento:</strong> {' '}
          Cuando llames a la función que acepta funciones como argumentos, simplemente proporciona el nombre de la función que deseas pasar como argumento, sin los paréntesis.
        </li>
        <li>
          <strong>Invocación de la función pasada como argumento:</strong> {' '}
          Dentro de la función que acepta funciones como argumentos, puedes invocar la función pasada como argumento utilizando el nombre de la variable que la contiene, seguido de los paréntesis (si es una función que acepta argumentos).
        </li>
      </ol>
      <p className='mt-4'>
        Veamos un ejemplo para entenderlo mejor:
      </p>

      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Función que acepta otra función como argumento
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            funcion <InlineCode>ejecutarFuncion</InlineCode>{`(funcion){`}
          </pre>
        </code>
        <code className="text-gray-500">
          &nbsp;&nbsp;{'//'} Invoca la función pasada como argumento
          <br />
          &nbsp;&nbsp;{`funcion();`}
        </code>
        <code className="text-gray-500">{'}'}</code>
        <br />

        <InlineCode variant="secondary">
          {'//'} FFunción que será pasada como argumento
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`function `}<InlineCode>saludar</InlineCode>{`() {`}
          </pre>
        </code>
        <code className="text-gray-500">
          &nbsp;&nbsp;{`console.log('¡Hola desde la función saludar!');`}
        </code>
        <code className="text-gray-500">{'}'}</code>
        <br />

        <InlineCode variant="secondary">
          {'//'}Llama a la función ejecutarFuncion y pasa la función saludar como argumento
        </InlineCode>
        <code className="text-gray-500">
          <pre>
          <InlineCode>ejecutarFuncion</InlineCode>{`(`}<InlineCode>saludar</InlineCode>{`);`}
          </pre>
        </code>
        
      </section>
      <p className='leading-8 mt-4'>
        En este ejemplo, la función <InlineCode>ejecutarFuncion</InlineCode> acepta una función como argumento (&apos;funcion&apos;). Cuando llamamos a <InlineCode>ejecutarFuncion(saludar)</InlineCode>, 
        estamos pasando la función <InlineCode>saludar</InlineCode> como argumento. Dentro de <InlineCode>ejecutarFuncion</InlineCode>, invocamos la función pasada (&apos;funcion&apos;) utilizando <InlineCode>funcion()</InlineCode>, lo que resulta en la ejecución de la función saludar.
      </p>
      <p className='leading-8 mt-4'>
        Este patrón de pasar funciones como argumentos es útil en situaciones como la programación asíncrona, el manejo de eventos y la implementación de patrones de diseño como el patrón de diseño de Estrategia.
      </p>
    </article>
  );
};

export default Sesion5InfoDialog4;
