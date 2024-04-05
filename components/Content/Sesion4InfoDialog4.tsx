import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion4InfoDialog4 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
        En JavaScript, los objetos son colecciones de pares de clave-valor, lo que significa que cada propiedad de un objeto tiene una clave (nombre) y un valor asociado. 
        Aquí tienes una explicación sobre cómo funcionan los pares de clave-valor en los objetos:
      </p>
      <p>
        <strong>Clave (Key):</strong> {' '}
        Es el identificador único asociado a cada propiedad del objeto. Las claves son cadenas de texto (strings) o símbolos (a partir de ES6). Cada clave dentro de un objeto debe ser única.
      </p>
      <p>
        <strong>Valor (Value):</strong> {' '}
        Es el valor asociado a la propiedad del objeto. Los valores pueden ser de cualquier tipo de datos válido en JavaScript, como números, cadenas, booleanos, arrays, objetos u otras funciones.
      </p>
      <p>
        <strong>Definición de Propiedades:</strong> {' '}
        Puedes definir propiedades en un objeto utilizando la sintaxis de notación de objeto literal. 
        Cada propiedad se define como un par de clave-valor separado por dos puntos (&quot;:&quot;), y las propiedades se separan por comas (&quot;,&quot;). 
        Aquí tienes un ejemplo:
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
        <InlineCode variant="secondary">
          {'/*'} En este ejemplo, nombre, edad y ciudad son claves, y &quot;Juan&quot;, 30 y &quot;Madrid&quot; son los valores asociados a esas claves, respectivamente. {'*/'}
        </InlineCode>
      </section>
      <p>
        Al nombrar las claves (keys) en objetos en JavaScript, es importante seguir algunas buenas prácticas para garantizar la claridad, consistencia y mantenibilidad del código. Aquí tienes algunas recomendaciones:
      </p>
      <p>
        <strong>Utiliza nombres descriptivos:</strong> {' '}
        Elige nombres descriptivos y significativos para las claves que reflejen claramente el propósito de la propiedad. Esto hace que el código sea más comprensible para otros desarrolladores que lean tu código en el futuro.
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Ejemplo
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const `}<InlineCode>usuario</InlineCode>{` = {\n`}
          </pre>
        </code>
        <code className="text-gray-500">
            &nbsp;&nbsp;{`nombre: 'Juan',`}
            <br />
            &nbsp;&nbsp;{`edad: 30,`}
            <br />
            &nbsp;&nbsp;{`correoElectronico: 'juan@example.com',`}
        </code>
        <code className="text-gray-500">{'}'}</code>
      </section>
      <p>
        <strong>Utiliza camelCase o snake_case:</strong> {' '}
        Prefiere el estilo camelCase o snake_case para nombrar las claves en objetos, según las convenciones de codificación de tu equipo o proyecto. Mantén la consistencia en el estilo de nombramiento dentro de tu código base.
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Ejemplo con camelCase
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const `}<InlineCode>persona</InlineCode>{` = {\n`}
          </pre>
        </code>
        <code className="text-gray-500">
            &nbsp;&nbsp;{`nombreCompleto: 'Juan Pérez',`}
            <br />
            &nbsp;&nbsp;{`fechaDeNacimiento: '1990-01-01',`}
        </code>
        <code className="text-gray-500">{'};'}</code>
        <InlineCode variant="secondary">
          {'//'} Ejemplo con snake_case
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const `}<InlineCode>direccionDeEnvio </InlineCode>{` = {\n`}
          </pre>
        </code>
        <code className="text-gray-500">
            &nbsp;&nbsp;{`calle_principal: 'Calle 123',`}
            <br />
            &nbsp;&nbsp;{`ciudad_de_residencia: 'Ciudad Ejemplo',`}
        </code>
        <code className="text-gray-500">{'};'}</code>
      </section>
      <p>
        <strong>Evita abreviaturas ambiguas:</strong> {' '}
        Evita abreviaturas ambiguas o poco claras que puedan confundir a otros desarrolladores. Es mejor optar por la claridad y la legibilidad en lugar de la concisión extrema.
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Evitar abreviaturas poco claras
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const `}<InlineCode>producto</InlineCode>{` = {\n`}
          </pre>
        </code>
        <code className="text-gray-500">
            &nbsp;&nbsp;{`prod_nombre: 'Camisa',`}
            <InlineCode variant="secondary">
              {'//'} ¿Qué significa &apos;prod&apos;?
            </InlineCode>
            <br />
            &nbsp;&nbsp;{`prod_precio: 29.99,`}
        </code>
        <code className="text-gray-500">{'};'}</code>
        <InlineCode variant="secondary">
          {'//'} Preferir nombres descriptivos
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const `}<InlineCode>producto</InlineCode>{` = {\n`}
          </pre>
        </code>
        <code className="text-gray-500">
            &nbsp;&nbsp;{`nombre: 'Camisa',`}
            <br />
            &nbsp;&nbsp;{`precio: 29.99,`}
        </code>
        <code className="text-gray-500">{'};'}</code>
      </section>
      <p>
        <strong>Sé consistente:</strong> {' '}
        Mantén la consistencia en la nomenclatura de las claves en todo tu código. Esto facilita la lectura y comprensión del código para ti y para otros desarrolladores que trabajen en el proyecto.
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Inconsistente
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const `}<InlineCode>usuario</InlineCode>{` = {\n`}
          </pre>
        </code>
        <code className="text-gray-500">
            &nbsp;&nbsp;{`nombre_usuario: 'Juan',`}
            <br />
            &nbsp;&nbsp;{`correoElectronico: 'juan@example.com',`}
        </code>
        <code className="text-gray-500">{'};'}</code>
        <InlineCode variant="secondary">
          {'//'} Consistente
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const `}<InlineCode>usuario</InlineCode>{` = {\n`}
          </pre>
        </code>
        <code className="text-gray-500">
            &nbsp;&nbsp;{`nombre: 'Juan',`}
            <br />
            &nbsp;&nbsp;{`correoElectronico: 'juan@example.com',`}
        </code>
        <code className="text-gray-500">{'};'}</code>
      </section>
    </article>
  );
};

export default Sesion4InfoDialog4;
