import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion2InfoDialog1 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
        Las funciones en JavaScript son bloques de código diseñados para
        realizar una tarea específica. Se pueden considerar como una manera de
        agrupar instrucciones que desempeñan una operación particular,
        permitiendo que este conjunto de instrucciones se pueda ejecutar cada
        vez que se llama a la función. Esto ayuda a reducir la repetición de
        código y a organizar el programa de manera más eficiente. Desde el punto
        de vista de la sintaxis, una función en JavaScript se puede definir de
        varias maneras, pero la forma más básica es la siguiente:
      </p>
      <div className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <code className="text-gray-500">
          <pre>{`function nombreDeLaFuncion(parametro1, parametro2, ...parametroN) {\n`}</pre>
        </code>
        <code className="text-gray-500">
          <InlineCode variant="secondary">
            &nbsp;&nbsp;{'//'} Bloque de código a ejecutar {'\n'}
          </InlineCode>
        </code>
        <code className="text-gray-500">{'}'}</code>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <p>
          Una función en JavaScript se compone de varios elementos clave,
          incluyendo:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>
              Palabra clave <code>function</code>:
            </strong>{' '}
            Indica el inicio de la declaración de la función.
          </li>
          <li>
            <strong>Nombre de la función:</strong> Identifica la función y
            permite su llamada.
          </li>
          <li>
            <strong>Parámetros:</strong> Variables listadas entre paréntesis que
            la función puede aceptar para trabajar con ellas.
          </li>
          <li>
            <strong>Bloque de código:</strong> Delimitado por llaves, contiene
            las instrucciones que se ejecutan al llamar a la función.
          </li>
          <li>
            <strong>
              Valor de retorno (<code>return</code>):
            </strong>{' '}
            La función puede devolver un valor al punto del programa donde fue
            llamada, utilizando la palabra clave <code>return</code>.
          </li>
        </ul>
        <p>
          Veamos un ejemplo de cómo se ve una función con todos estos
          componentes, incluido el valor de retorno:
        </p>
        <div className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
          <code className="text-gray-500">
            <pre>{`function suma(a, b) {\n`}</pre>
          </code>
          <code className="text-gray-500">
            <InlineCode variant="secondary">
              &nbsp;&nbsp;{'return a + b; // Retorna la suma de a y b\n'}
            </InlineCode>
          </code>
          <code className="text-gray-500">{'}'}</code>
        </div>
        <p>
          Este ejemplo muestra una función llamada <code>suma</code>, que toma
          dos parámetros <code>a</code> y <code>b</code>, y retorna su suma. El
          valor retornado puede ser utilizado en el punto del programa donde se
          llama a la función.
        </p>
      </div>
    </article>
  );
};

export default Sesion2InfoDialog1;
