import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion4InfoDialog3 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
        En JavaScript, los objetos pueden contener tanto propiedades como
        métodos. Las propiedades son simplemente variables asociadas al objeto,
        mientras que los métodos son funciones asociadas al objeto que pueden
        realizar ciertas acciones o cálculos. Aquí tienes una explicación sobre
        cómo se definen y utilizan los métodos y propiedades en objetos:
      </p>
      <p>
        <strong>Propiedades:</strong> Las propiedades en un objeto son pares de
        clave-valor que describen las características del objeto. Pueden ser de
        cualquier tipo de datos válido en JavaScript, como números, cadenas,
        booleanos, arrays, objetos u otras funciones. Aquí hay un ejemplo de
        cómo definir propiedades en un objeto:
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Declaracion de objeto
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const `}
            <InlineCode>persona</InlineCode>
            {` = {\n`}
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
          {'//'} En este ejemplo, nombre, edad y ciudad son propiedades del
          objeto persona
        </InlineCode>
      </section>
      <p>
        <strong>Métodos:</strong> Los métodos son funciones asociadas a un
        objeto que pueden realizar ciertas acciones o cálculos basados en las
        propiedades del objeto. Pueden ser utilizados para manipular los datos
        del objeto o realizar operaciones relacionadas con el objeto. Aquí hay
        un ejemplo de cómo definir un método en un objeto:
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Declaracion de objeto
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`const `}
            <InlineCode>persona</InlineCode>
            {` = {\n`}
          </pre>
        </code>
        <code className="text-gray-500">
          &nbsp;&nbsp;{`nombre: 'Juan',`}
          <br />
          &nbsp;&nbsp;{`edad: 30,`}
          <br />
          &nbsp;&nbsp;{`ciudad: 'Madrid',`}
        </code>
        <code className="text-gray-500">
          &nbsp;&nbsp;{`saludar: function() {`}
          <br />
          &nbsp;&nbsp;&nbsp;{`console.log('Hola, soy ' + `}
          <InlineCode variant="secondary">this</InlineCode>
          {`.nombre + ' y tengo ' + `}
          <InlineCode variant="secondary">this</InlineCode>
          {`.edad + ' años.');`}
          <br />
          &nbsp;&nbsp;{`}`}
        </code>
        <code className="text-gray-500">{'}'}</code>
        <InlineCode variant="secondary">
          {'/*'} En este ejemplo, &quot;saludar&quot; es un método del objeto{' '}
          <InlineCode>persona</InlineCode> que imprime un saludo utilizando las
          propiedades &quot;nombre&quot; y &quot;edad&quot; del objeto. {'*/'}
        </InlineCode>
      </section>
      <Link
        href="https://www.youtube.com/watch?v=5lXwdTJScK8"
        target="_blank"
        variant="secondary"
        className="underline"
      >
        Ver Contexto this
      </Link>
      <p>
        <strong>Acceso a Propiedades y Métodos:</strong> Para acceder a las
        propiedades y métodos de un objeto, puedes utilizar la notación de punto
        (&quot;.&quot;) o la notación de corchetes (&quot;[]&quot;). Por
        ejemplo:
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">{'//'} Acceso a propiedades</InlineCode>
        <code className="text-gray-500">
          <pre>
            {`console.log(`}
            <InlineCode>persona</InlineCode>
            {`.nombre); // Salida: Juan`}
          </pre>
        </code>
        <InlineCode variant="secondary">{'//'} Acceso a métodos</InlineCode>
        <code className="text-gray-500">
          <pre>
            <InlineCode>persona</InlineCode>
            {`.saludar(); // Salida: Hola, soy Juan y tengo 30 años.`}
          </pre>
        </code>
      </section>
    </article>
  );
};

export default Sesion4InfoDialog3;
