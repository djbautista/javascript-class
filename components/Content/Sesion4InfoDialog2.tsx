import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion4InfoDialog2 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
      En JavaScript, la sintaxis de los objetos se basa en la notación de objeto literal, que es una colección de pares de clave-valor encerrados entre llaves <InlineCode>&quot;{'{}'}&quot;</InlineCode>. 
      Aquí tienes una descripción de la sintaxis de los objetos en JavaScript:
      </p>
      <p>
        <strong>Sintaxis Básica:</strong>
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Declaracion de objeto
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const `}<InlineCode>objeto</InlineCode>{` = {\n`}
          </pre>
        </code>
        <code className="text-gray-500">
            &nbsp;&nbsp;{`clave1: valor1,`}
            <br />
            &nbsp;&nbsp;{`clave2: valor2,`}
            <br />
            &nbsp;&nbsp;{`clave3: valor3,`}
        </code>
        <InlineCode variant="secondary">
        &nbsp;{'//'} ...pares de clave-valor adicionales
        </InlineCode>
        <code className="text-gray-500">{'}'}</code>
      </section>
      <p>
        <strong>Claves</strong> {' '}
        Las claves son cadenas de texto (strings) que actúan como identificadores para acceder a los valores del objeto. 
        Las claves pueden ser cualquier cadena de texto válida, incluidos nombres de propiedades y números, pero se recomienda que sean descriptivas y legibles.
      </p>
      <p>
        <strong>Valores</strong> {' '}
        Los valores pueden ser de cualquier tipo de datos válido en JavaScript, incluyendo números, cadenas, booleanos, arrays, objetos y funciones.
      </p>
    </article>
  );
};

export default Sesion4InfoDialog2;
