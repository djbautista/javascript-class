import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion2InfoDialog3 = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <iframe
        className="h-[200px] w-full md:h-[300px] md:w-2/3"
        src="https://www.youtube.com/embed/s-7C09ymzK8?si=FyuZPKWRnJi-KjTO"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <hr className="h-1 w-full" />
      <article className="w-full text-wrap">
        <p className="mb-1">
          Los scopes determinan la accesibilidad y visibilidad de variables y
          funciones dentro de un programa. Un scope puede ser global o local.
        </p>
        <ul className="my-4">
          <li>
            <strong>Global Scope:</strong> Las variables y funciones definidas
            fuera de cualquier función tienen un alcance global, lo que
            significa que son accesibles desde cualquier parte del programa.
          </li>
          <li>
            <strong>Local Scope:</strong> Las variables y funciones definidas
            dentro de una función tienen un alcance local, lo que significa que
            solo son accesibles dentro de esa función.
          </li>
        </ul>
        <p>
          JavaScript utiliza un mecanismo llamado{' '}
          <InlineCode variant="secondary">
            &quot;lexical scoping&quot;
          </InlineCode>
          , lo que significa que los scopes se definen en función de la
          ubicación física de las variables y funciones en el código fuente.
          Esto puede causar efectos como el{' '}
          <InlineCode>&quot;closure&quot;</InlineCode>, donde una función
          interior conserva acceso a las variables de su ámbito externo incluso
          después de que la función externa haya terminado de ejecutarse.
        </p>
        <h2 className="mb-2 text-lg font-semibold">Ejemplo</h2>
        <div className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
          <code className="text-gray-500">
            {'//'}Variable global
            <br />
            let <InlineCode>globalVariable</InlineCode> = &quot;Soy
            global&quot;;
          </code>
          <code className="w-full overflow-x-scroll text-wrap text-gray-500">
            <pre className="leading-8 text-gray-500">
              {`function miFuncion() {\n `}
              {'\t//'}Variable local
              <br />
              {`\t`}let <InlineCode>localVariable</InlineCode> = &quot;Soy
              local&quot;;
              <br />
              <br />
              {`\t`}console.log(<InlineCode>globalVariable</InlineCode>); {'//'}{' '}
              Accediendo a la variable global desde el scope local
              <br />
              {`\t`}console.log(<InlineCode>localVariable</InlineCode>); {'//'}{' '}
              Accediendo a la variable local
              <br />
              {`\t//`} Función interna
              <br />
              {`\tfunction funcionInterna() {`}
              <br />
              {`\t\t//`} Puedo acceder a la variable local y global, y a otras
              funciones del scope externo
              <br />
              {`\t\t`}console.log(&quot;Función interna:&quot;,{' '}
              <InlineCode>globalVariable</InlineCode>);
              <br />
              {`\t\t`}console.log(&quot;Función interna:&quot;,{' '}
              <InlineCode>globalVariable</InlineCode>);
              <br />
              {`\t}`}
              <br />
              {`\t`}funcionInterna(); {'//'} Llamando a la función interna
              {`\n}`}
            </pre>
            miFuncion(); {'//'} Llamando a la función principal
            <br />
            console.log(<InlineCode>globalVariable</InlineCode>); {'//'}{' '}
            Accediendo a la variable global fuera de la función
            <br />
            console.log(<InlineCode>localVariable</InlineCode>); {'//'} Esto
            daría un error, ya que localVariable solo está definida dentro de la
            función miFuncion
            <br />
          </code>
        </div>
        <p className="mt-4">
          En este ejemplo, <InlineCode>globalVariable</InlineCode> es una
          variable global que se puede acceder desde cualquier parte del código.
          <InlineCode>localVariable</InlineCode> es una variable local que solo
          se puede acceder dentro de la función{' '}
          <InlineCode variant="secondary">miFuncion()</InlineCode>. La función
          interna <InlineCode variant="secondary">funcionInterna()</InlineCode>{' '}
          puede acceder tanto a <InlineCode>globalVariable</InlineCode> como a{' '}
          <InlineCode>localVariable</InlineCode>, ya que está dentro del scope
          de <InlineCode variant="secondary">miFuncion()</InlineCode>.<br />
          Sin embargo, intentar acceder a <InlineCode>
            localVariable
          </InlineCode>{' '}
          fuera de <InlineCode variant="secondary">miFuncion()</InlineCode>{' '}
          generaría un error, ya que no está definida en ese scope.
        </p>
      </article>
    </div>
  );
};

export default Sesion2InfoDialog3;
