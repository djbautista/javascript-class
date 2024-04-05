import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion4InfoDialog1 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
        En JavaScript, puedes declarar un objeto de varias formas. Aquí tienes algunas de las formas más comunes de declarar un objeto:
      </p>
      <p>
        <strong>Notación de Objeto Literal:</strong>{' '}
        La forma más común y sencilla de declarar un objeto es utilizando la notación de objeto literal, donde defines las propiedades y sus valores dentro de llaves <InlineCode>&quot;{'{}'}&quot;</InlineCode>.
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Declaracion de objeto
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const `}<InlineCode>persona</InlineCode>{` = {\n`}
          </pre>
        </code>
        <code className="text-gray-500">
            &nbsp;&nbsp;{`nombre: 'Juan',`}
            <br />
            &nbsp;&nbsp;{`edad: 30,`}
            <br />
            &nbsp;&nbsp;{`ciudad: 'Madrid',`}
        </code>
        <code className="text-gray-500">{'}'}</code>
      </section>
      <p>
        <strong>Constructor de Objeto:</strong>{' '}
        También puedes crear un objeto utilizando el constructor <InlineCode>Object()</InlineCode> y luego asignar propiedades al objeto utilizando la notación de punto (&quot;.&quot;) o corchetes (&quot;[]&quot;).
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Declaracion de objeto
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const `}<InlineCode>persona</InlineCode>{` = new Object()`}
          </pre>
        </code>
        <code className="text-gray-500">
            <InlineCode>persona</InlineCode>{`.nombre = 'Juan';`}
            <br />
            <InlineCode>persona</InlineCode>{`.edad = 30;`}
            <br />
            <InlineCode>persona</InlineCode>{`.ciudad = 'Madrid';`}
        </code>
      </section>
      <p>
        <strong>Función Constructora:</strong>{' '}
        Las funciones de flecha no tienen sus propios objetos this, arguments, super, o new.target, lo que significa que no pueden ser utilizadas como constructores y no tienen acceso a estas propiedades internas.
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Declaracion de function
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`function `}<InlineCode>persona</InlineCode>{` (nombre, edad, ciudad) {`}
          </pre>
        </code>
        <code className="text-gray-500">
            &nbsp;&nbsp;<InlineCode variant='secondary'>this</InlineCode>{`.nombre = nombre;`}
            <br />
            &nbsp;&nbsp;<InlineCode variant='secondary'>this</InlineCode>{`.edad = edad;`}
            <br />
            &nbsp;&nbsp;<InlineCode variant='secondary'>this</InlineCode>{`.ciudad = ciudad`}
        </code>
        <code className="text-gray-500">{'}'}</code>
        <InlineCode variant="secondary">
          {'//'} Incializar objeto {'\n'}
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const juan = new `}<InlineCode>persona</InlineCode>{`('Juan', 30, 'Madrid');`}
          </pre>
        </code>
      </section>
      <p>
        <strong>Clases (ES6+):</strong>{' '}
        En ECMAScript 6 (ES6) y versiones posteriores, puedes utilizar la sintaxis de clase para definir un objeto.
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Declaracion de function
        </InlineCode>
        <code className="text-gray-500">
          <pre>
          {`class `}<InlineCode>persona</InlineCode>{` {`}
          </pre>
        </code>
        <code className="text-gray-500">
          <pre>
          &nbsp;<InlineCode variant='secondary'>constructor</InlineCode>{` (nombre, edad, ciudad) {`}
          </pre>
        </code>
        <code className="text-gray-500">
            &nbsp;&nbsp;<InlineCode variant='secondary'>this</InlineCode>{`.nombre= nombre;`}
            <br />
            &nbsp;&nbsp;<InlineCode variant='secondary'>this</InlineCode>{`.edad = edad;`}
            <br />
            &nbsp;&nbsp;<InlineCode variant='secondary'>this</InlineCode>{`.ciudad = ciudad`}
        </code>
        <code className="text-gray-500">&nbsp;{'}'}</code>
        <code className="text-gray-500">{'}'}</code>
        <InlineCode variant="secondary">
          {'//'} Incializar objeto {'\n'}
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const juan = new `}<InlineCode>persona</InlineCode>{`('Juan', 30, 'Madrid');`}
          </pre>
        </code>
      </section>
      <p>
        Estas son algunas de las formas más comunes de declarar un objeto en JavaScript. La notación de objeto literal es la más utilizada debido a su simplicidad y claridad. 
        Sin embargo, las otras formas también son útiles en diferentes contextos, como la creación de objetos dinámicamente o la creación de clases para la programación orientada a objetos.
      </p>
    </article>
  );
};

export default Sesion4InfoDialog1;
