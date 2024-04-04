import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion3InfoDialog2 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
        Las funciones de flecha (arrow functions) en JavaScript se utilizan principalmente por las siguientes razones
      </p>
      <p>
        <strong>Sintaxis más corta:</strong> mencioando en el anterior item.
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Función de flecha {'\n'}
        </InlineCode>
        <code className="text-gray-500">
          <pre>{`const sumar = (a, b) => a + b;\n`}</pre>
        </code>
      </section>
      <p>
        <strong>Mejor para funciones anónimas:</strong> {' '}
        Las arrow functions son ideales para funciones anónimas utilizadas como callbacks en métodos como <InlineCode variant="secondary">map</InlineCode>, 
        <InlineCode variant="secondary">filter</InlineCode>, y <InlineCode variant="secondary">reduce</InlineCode>, ya que su sintaxis más corta reduce el ruido en el código.
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <code className="text-gray-500">
          <pre>{`const numeros = [1, 2, 3, 4, 5];\n`}</pre>
        </code>
        <InlineCode variant="secondary">
          {'//'} Utilizando arrow function como callback {'\n'}
        </InlineCode>
        <code className="text-gray-500">
          <pre>{`const cuadrados = numeros.map(numero => numero * numero);\n`}</pre>
        </code>
      </section>
      <p>
        <strong>Contexto léxico más claro:</strong> {' '}
        Al usar arrow functions, el contexto léxico (es decir, el ámbito en el que la función fue definida) es más claro y predecible, lo que facilita la comprensión del código.
      </p>
      <p>
        <strong>Mejora la legibilidad:</strong> {' '}
        Las arrow functions pueden mejorar la legibilidad del código al reducir la cantidad de código necesario para definir funciones, lo que facilita la comprensión del flujo del programa.
      </p>
    </article>
  );
};

export default Sesion3InfoDialog2;
