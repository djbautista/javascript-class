import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion3InfoDialog1 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
        Las funciones de flecha (arrow functions) en JavaScript son una forma más concisa de escribir funciones en comparación con las funciones regulares. Aquí hay algunas diferencias clave entre ellas:
      </p>
      <p>
        <strong>Sintaxis más corta:</strong> Las funciones de flecha tienen una sintaxis más corta y más limpia en comparación con las funciones regulares, lo que las hace más fáciles de leer y escribir.
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Bloque de código a ejecutar {'\n'}
        </InlineCode>
        <code className="text-gray-500">
          <pre>{`function sumar(a, b) {\n`}</pre>
        </code>
        <code className="text-gray-500">
            &nbsp;&nbsp;{'return a + b;\n'}
        </code>
        <code className="text-gray-500">{'}'}</code>
        <InlineCode variant="secondary">
          {'//'} Función de flecha {'\n'}
        </InlineCode>
        <code className="text-gray-500">
          <pre>{`const sumar = (a, b) => a + b;\n`}</pre>
        </code>
      </section>
      <p>
        <strong><code>this</code> vinculado léxicamente:</strong>{' '}
        En las funciones de flecha, el valor de <code>this</code> se establece en el valor del <code>this</code> léxico más cercano, 
        en lugar de ser determinado por la forma en que se llama la función. Esto significa que <code>this</code> en una función de flecha siempre se refiere al <code>this</code> del ámbito circundante.
      </p>
      <p>
        <strong>No tienen su propio <code>this</code>, <code>arguments</code>, <code>super</code>, o <code>new.target</code>:</strong>{' '}
        Las funciones de flecha no tienen sus propios objetos this, arguments, super, o new.target, lo que significa que no pueden ser utilizadas como constructores y no tienen acceso a estas propiedades internas.
      </p>
      <p>
        <strong>No pueden ser utilizadas como constructores:</strong>{' '}
        Las funciones de flecha no pueden ser utilizadas como constructores para crear nuevos objetos. Intentar hacerlo resultará en un error.
      </p>
      <p>
        <strong>No tienen el objeto <code>arguments</code>:</strong>{' '}
        Las funciones de flecha no tienen su propio objeto arguments, 
        por lo que si necesitas acceder a los argumentos pasados a la función, debes utilizar la sintaxis de desestructuración de argumentos o el operador de propagación (&quot;...&quot;).
      </p>
    </article>
  );
};

export default Sesion3InfoDialog1;
