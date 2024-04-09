import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion7InfoDialog3 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
        Los métodos de String en JavaScript son funciones predefinidas que están disponibles en todos los objetos de tipo cadena (String). 
        Estos métodos permiten realizar diversas operaciones útiles, como la manipulación, búsqueda, extracción y transformación de cadenas de texto. Aquí tienes algunos de los métodos de String más comunes en JavaScript:
      </p>
      <ol className='list-decimal pl-6'>
        <li>
          <strong>length:</strong> {' '}
          Retorna la longitud (cantidad de caracteres) de una cadena de texto.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const mensaje = "Hola mundo";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(mensaje.`}<InlineCode>length</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'//'} Salida: 10
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>toUpperCase()</strong> {' '}
          Convierte todos los caracteres de una cadena a mayúsculas.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const nombre = "Juan";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(nombre.`}<InlineCode>toUpperCase()</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'//'} Salida: JUAN
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>toLowerCase():</strong> {' '}
          Convierte todos los caracteres de una cadena a minúsculas.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const apellido = "PÉREZ";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(apellido.`}<InlineCode>toLowerCase()</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'//'} Salida: pérez
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>charAt(index)</strong> {' '}
          Retorna el carácter en la posición especificada de la cadena (indexado desde 0).
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const texto = "JavaScript";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(texto.`}<InlineCode>charAt(4)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'//'} Salida: S
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>indexOf(substring):</strong> {' '}
          Retorna la posición del primer índice donde se encuentra una subcadena dentro de la cadena, o &quot;-1&quot; si no se encuentra.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const frase = "La vida es bella";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(frase.`}<InlineCode>indexOf(&quot;vida&quot;)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'//'} Salida: 3
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>lastIndexOf(substring):</strong> {' '}
          Retorna la posición del primer índice donde se encuentra una subcadena dentro de la cadena, o &quot;-1&quot; si no se encuentra.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`frase = 'La vida es bella y también es corta';`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(frase.`}<InlineCode>lastIndexOf(&quot;es&quot;)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'//'} Salida: 19
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>substring(startIndex, endIndex):</strong> {' '}
          Retorna una subcadena de la cadena, comenzando desde el índice startIndex hasta endIndex (sin incluir).
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const texto = "JavaScript";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(texto.`}<InlineCode>substring(0, 4)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'//'} Salida: Java
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>split(separator):</strong> {' '}
          Divide una cadena en un array de subcadenas utilizando el separador especificado.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const palabras = "Hola, cómo, estás";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(palabras.`}<InlineCode>split(&quot;, &quot;)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'// Salida: ["Hola", "cómo", "estás"]'}
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>replace(oldValue, newValue):</strong> {' '}
          Reemplaza la primera de las apariciones de oldValue con newValue en la cadena.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const mensaje = "Hola mundo";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(mensaje.`}<InlineCode>replace(&quot;mundo&quot;, &quot;amigo&quot;)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'// Salida: Hola amigo'}
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>replaceAll(oldValue, newValue):</strong> {' '}
          Reemplaza todas las apariciones de oldValue con newValue en la cadena.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const mensaje = "Hola mundo";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(mensaje.`}<InlineCode>replace(&quot;mundo&quot;, &quot;amigo&quot;)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'// Salida: Hola amigo'}
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>trim():</strong> {' '}
          Elimina los espacios en blanco (espacios, tabulaciones, saltos de línea, etc.) desde ambos extremos de una cadena de texto y devuelve la cadena resultante.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const textoConEspacios = "   Hola mundo   ";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(textoConEspacios.`}<InlineCode>trim()</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'// Salida: "Hola mundo"'}
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>includes(substring):</strong> {' '}
          Este método determina si una cadena de texto contiene otra cadena de texto dada como substring. Retorna &apos;true&apos; si la cadena contiene el substring, y &apos;false&apos; en caso contrario.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const mensaje = "Hola mundo";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(mensaje.`}<InlineCode>includes(&quot;mundo&quot;)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'// Salida: true'}
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>concat(...strings):</strong> {' '}
          Este método determina si una cadena de texto contiene otra cadena de texto dada como substring. Retorna &apos;true&apos; si la cadena contiene el substring, y &apos;false&apos; en caso contrario.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const saludo = "Hola";`}
                <br />
                {`const nombre = "Juan";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(saludo.`}<InlineCode>concat(&quot;, &quot;, nombre)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'// Salida: "Hola, Juan"'}
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>padStart(targetLength, padString):</strong> {' '}
          Rellena la cadena con un string dado (&apos;padString&apos;) desde el principio hasta que la longitud de la cadena sea igual o mayor que &apos;targetLength&apos;. Útil para alinear cadenas.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const numero = "123";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(numero.`}<InlineCode>padStart(5, &quot;0&quot;)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'// Salida: "00123"'}
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>padEnd(targetLength, padString):</strong> {' '}
          Rellena la cadena con un string dado (&apos;padString&apos;) desde el principio hasta que la longitud de la cadena sea igual o mayor que &apos;targetLength&apos;. Útil para alinear cadenas.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const texto = "abc";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(texto.`}<InlineCode>padEnd(5, &quot;*&quot;)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'// Salida: "abc**"'}
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>slice(startIndex, endIndex):</strong> {' '}
          Retorna una porción (subcadena) de la cadena, comenzando desde el índice &apos;startIndex&apos; hasta &apos;endIndex&apos; (sin incluir). Si &apos;endIndex&apos; no se especifica, se devuelve la subcadena hasta el final de la cadena.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const frase = "La vida es bella";`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(frase.`}<InlineCode>slice(3, 7)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'// Salida: "vida"'}
            </InlineCode>
          </section>
        </li>
        <li>
          <strong>test(cadena):</strong> {' '}
          En JavaScript, el método &apos;test()&apos; se utiliza en objetos RegExp para probar si una cadena coincide con una expresión regular. Devuelve true si encuentra una coincidencia, y false si no la encuentra.
          <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
            <code className="text-gray-500">
              <pre>
                {`const expresionRegular = /hola/;`}
                <br />
                {`const cadena1 = 'Hola mundo';`}
              </pre>
            </code>
            <code className="text-gray-500">
              {`console.log(expresionRegular.`}<InlineCode>test(cadena1)</InlineCode>{`);`}
            </code>
            <InlineCode variant="secondary">
              {'// Salida: true'}
            </InlineCode>
          </section>
        </li>
      </ol>
      <p className='leading-8 mt-4'>
        Estos son solo algunos ejemplos de los métodos de String en JavaScript. Existen muchos más que pueden ser utilizados para diversas tareas de manipulación de cadenas. 
        Es importante familiarizarse con ellos para poder trabajar eficientemente con cadenas de texto en JavaScript.
      </p>
    </article>
  );
};

export default Sesion7InfoDialog3;
