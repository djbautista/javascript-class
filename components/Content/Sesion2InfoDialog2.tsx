import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion2InfoDialog2 = () => {
  return (
    <article className="flex flex-col gap-4 leading-8">
      <section className="mb-6">
        <p>
          Las funciones sirven para encapsular{' '}
          <InlineCode variant="secondary">bloques de código</InlineCode> que
          pueden ser reutilizados y ejecutados en cualquier parte de un
          programa. Esto promueve la modularidad y la organización del código,
          lo que facilita el mantenimiento y la escalabilidad de las
          aplicaciones. <br />
          Además, las funciones permiten aceptar{' '}
          <InlineCode variant="secondary">parámetros</InlineCode> de entrada y
          devolver resultados, lo que las hace flexibles y adaptables a
          diferentes situaciones. En resumen, las funciones en JavaScript son
          herramientas fundamentales para estructurar y modularizar el código,
          facilitando la creación de programas más legibles, mantenibles y
          eficientes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Ejemplo</h2>
        <div className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
          <code className="text-gray-500">
            <pre>{`function sumar(a, b) {\n  return a + b;\n}`}</pre>
          </code>
          <code className="text-gray-500">
            {'//'} Llamada a la función sumar let{' '}
            <InlineCode>resultado</InlineCode> = sumar(3, 5); console.log(
            <InlineCode>resultado</InlineCode>); {'//'} Output: 8
          </code>
        </div>
      </section>
    </article>
  );
};

export default Sesion2InfoDialog2;
