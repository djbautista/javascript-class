import InlineCode from '@/components/Code/InlineCode';
import Link from '@/components/Link';

export const PrimerosPasos = () => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-6">
      <h1 className="mb-4 text-center text-xl font-bold">
        Primeros Pasos en JavaScript
      </h1>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Hola Mundo</h2>
        <p className="mb-2">
          Para comenzar con JavaScript, veamos cómo se ve un simple &quot;Hola
          Mundo&quot;:
        </p>
        <pre className="rounded bg-gray-100 p-3 text-gray-800">
          console.log(
          <InlineCode variant="secondary">&quot;Hola Mundo&quot;</InlineCode>
          );
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Declaración de Variables</h2>
        <p className="mb-2">
          En JavaScript, puedes declarar variables usando <code>let</code>,{' '}
          <code>const</code>, o <code>var</code>:
        </p>
        <div className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
          <code className="text-gray-500">{'//'} Usando let</code>
          <code>
            let <InlineCode>message</InlineCode> = &quot;¡Hola Mundo!&quot;;
          </code>
          <code className="text-gray-500">{'//'} Usando const</code>
          <code>
            const <InlineCode>pi</InlineCode> = 3.14;
          </code>
          <code className="text-gray-500">
            {'//'} Usando var (
            <span className="text-red-400">No recomendado</span>)
          </code>
          <code>
            var <InlineCode>oldSchool</InlineCode> = &quot;Esto es
            JavaScript&quot;;
          </code>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">
          Tipos de Datos Primitivos
        </h2>
        <p className="mb-2">
          JavaScript tiene varios tipos de datos primitivos:
        </p>
        <ul className="flex list-disc flex-col gap-4 pl-6">
          <li>
            <InlineCode>Number</InlineCode> - para números.
          </li>
          <li>
            <InlineCode>String</InlineCode> - para cadenas de texto.
          </li>
          <li>
            <InlineCode>Boolean</InlineCode> - para verdadero (true) o falso
            (false).
          </li>
          <li>
            <InlineCode>null</InlineCode> - un valor especial que representa
            &quot;ningún valor&quot;.
          </li>
          <li>
            <InlineCode>undefined</InlineCode> - un valor especial que indica
            que una variable no ha sido asignada.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">
          Restricciones de Nombrado para Variables
        </h2>
        <p className="mb-2">
          Cuando nombras variables en JavaScript, hay ciertas reglas y
          restricciones que debes seguir:
        </p>
        <ul className="mb-4 list-disc pl-8">
          <li>
            Pueden contener letras, dígitos, guiones bajos (
            <InlineCode variant="secondary">_</InlineCode>) y signos de dólar (
            <InlineCode variant="secondary">$</InlineCode>).
          </li>
          <li>
            Deben comenzar con una letra, <InlineCode>$</InlineCode> o{' '}
            <InlineCode>_</InlineCode>.
          </li>
          <li>
            Son sensibles a mayúsculas y minúsculas (por ejemplo,{' '}
            <InlineCode>y</InlineCode> y <InlineCode>Y</InlineCode> son
            diferentes variables).
          </li>
          <li>
            Palabras reservadas (como las palabras clave de JavaScript) no
            pueden ser utilizadas como nombres.
          </li>
        </ul>
        <p className="mb-4">
          Estas reglas ayudan a evitar errores en tu código y aseguran que tus
          variables sean interpretadas correctamente por el motor de JavaScript.
        </p>

        <h2 className="mb-2 text-lg font-semibold">
          Mejores Prácticas de Nombrado
        </h2>
        <p className="mb-2">
          Para mejorar la legibilidad y mantenibilidad de tu código, considera
          estas mejores prácticas para nombrar tus variables:
        </p>
        <ul className="list-disc pl-8">
          <li>
            Usa nombres descriptivos que reflejen el propósito de la variable.
          </li>
          <li>
            Adopta el estilo <InlineCode>lowerCamelCase</InlineCode> para
            nombrar tus variables.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Operadores</h2>
        <p className="mb-2">
          Los operadores te permiten realizar operaciones con tus variables y
          valores. Aquí están los tipos principales:
        </p>

        <div className="mb-4 rounded bg-gray-100 p-3 text-gray-800">
          <p className="mb-1">
            <strong>Asignación:</strong> <InlineCode>=</InlineCode>
          </p>
          <p>Asigna un valor a una variable.</p>
        </div>

        <div className="mb-4 rounded bg-gray-100 p-3 text-gray-800">
          <p className="mb-1">
            <strong>Aritméticos:</strong> Realizan operaciones matemáticas como:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-8">
            <li>
              <InlineCode>+</InlineCode> Adición
            </li>
            <li>
              <InlineCode>-</InlineCode> Sustracción
            </li>
            <li>
              <InlineCode>*</InlineCode> Multiplicación
            </li>
            <li>
              <InlineCode>/</InlineCode> División
            </li>
            <li>
              <InlineCode>**</InlineCode> Exponenciación
            </li>
            <li>
              <InlineCode>%</InlineCode> Módulo
            </li>
            <li>
              <InlineCode>++</InlineCode> Incremento
            </li>
            <li>
              <InlineCode>--</InlineCode> Decremento
            </li>
          </ul>
        </div>

        <div className="rounded bg-gray-100 p-3 text-gray-800">
          <p className="mb-1">
            <strong>Lógicos:</strong> Utilizados para evaluar condiciones:
          </p>
          <ul className="flex list-disc flex-col gap-2 pl-8">
            <li>
              <InlineCode>&&</InlineCode> AND
            </li>
            <li>
              <InlineCode>||</InlineCode> OR
            </li>
            <li>
              <InlineCode>!</InlineCode> NOT
            </li>
            <li>
              Comparaciones como <InlineCode>==</InlineCode>,{' '}
              <InlineCode>===</InlineCode>, <InlineCode>&gt;</InlineCode>,{' '}
              <InlineCode>&lt;</InlineCode>, <InlineCode>&gt;=</InlineCode>, y{' '}
              <InlineCode>&lt;=</InlineCode>.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Estructuras de Control</h2>
        <p className="mb-2">
          Controla el flujo de tu programa usando estas estructuras:
        </p>
        <div className="mb-4 rounded bg-gray-100 p-3 text-gray-800">
          <p className="mb-1">
            <InlineCode>if</InlineCode> y <InlineCode>if-else</InlineCode> te
            permiten ejecutar bloques de código basados en condiciones
            específicas.
          </p>
          <p className="mb-4">
            Por ejemplo, usar <InlineCode>if</InlineCode> para verificar si un
            usuario es mayor de edad:
          </p>
          <pre>{`if (edad >= 18) {\n  console.log('Eres mayor de edad.');\n} else {\n  console.log('No eres mayor de edad.');\n}`}</pre>
        </div>

        <div className="rounded bg-gray-100 p-3 text-gray-800">
          <p className="mb-1">
            <InlineCode>switch</InlineCode> te permite realizar diferentes
            acciones basadas en distintos casos.
          </p>
          <p>Es útil cuando tienes múltiples condiciones que comparar.</p>
        </div>
      </section>
      <hr />
      <section>
        <Link
          href="https://lab.reaal.me/jsrobot"
          className="underline"
          variant="secondary"
          target="_blank"
          replace
        >
          RobotJS
        </Link>
        <p>
          Si quieres probar estos conceptos en acción, puedes jugar un poco con
          RobotJS.
        </p>
      </section>
    </div>
  );
};

export default PrimerosPasos;
