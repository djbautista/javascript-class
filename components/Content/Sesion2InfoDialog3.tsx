import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion2InfoDialog3 = () => {
  return (
    <article className="flex flex-col gap-4">
      <section className="mb-6">
        <p className='mb-1'>
          Los scopes (o ámbitos) determinan la accesibilidad y visibilidad de variables y funciones dentro de un programa. Un scope puede ser global o local.
        </p>
        <ul className='my-4'>
          <li><strong>Global Scope:</strong> Las variables y funciones definidas fuera de cualquier función tienen un alcance global, lo que significa que son accesibles desde cualquier parte del programa.</li>
          <li><strong>Local Scope:</strong> Las variables y funciones definidas dentro de una función tienen un alcance local, lo que significa que solo son accesibles dentro de esa función.</li>
        </ul>
        <p>
          JavaScript utiliza un mecanismo llamado <InlineCode variant='secondary'>"lexical scoping"</InlineCode>, lo que significa que los scopes se definen en 
          función de la ubicación física de las variables y funciones en el código fuente. Esto puede causar efectos como el <InlineCode>"closure"</InlineCode>, 
          donde una función interior conserva acceso a las variables de su ámbito externo incluso después de que la función externa haya terminado de ejecutarse.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Ejemplo</h2>
        <div className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
          <code className="text-gray-500">
            {'//'}Variable global<br/>
            let <InlineCode>globalVariable</InlineCode> = "Soy global";
          </code>
          <code className="text-gray-500">
            <pre>
              {`function miFuncion() {\n `}
              {'\t//'}Variable local<br/>
              {`\t`}let <InlineCode>localVariable</InlineCode> = "Soy local";<br/><br/>
              
              {`\t`}console.log(<InlineCode>globalVariable</InlineCode>); {'//'} Accediendo a la variable global desde el scope local<br/>
              {`\t`}console.log(<InlineCode>localVariable</InlineCode>);  {'//'} Accediendo a la variable local<br/>
              
              {`\t//`} Función interna<br/>
              {`\tfunction funcionInterna() {`}<br/>
                  {`\t\t//`} Puedo acceder a la variable local y global, y a otras funciones del scope externo<br/>
                  {`\t\t`}console.log("Función interna:", <InlineCode>globalVariable</InlineCode>);<br/>
                  {`\t\t`}console.log("Función interna:", <InlineCode>globalVariable</InlineCode>);<br/>
              {`\t}`}<br/>
              
              {`\t`}funcionInterna(); {'//'} Llamando a la función interna
              {`\n}`}
            </pre>
          </code>
          <code className="text-gray-500">
            miFuncion(); {'//'} Llamando a la función principal<br/>
            console.log(<InlineCode>globalVariable</InlineCode>); {'//'} Accediendo a la variable global fuera de la función<br/>
            console.log(<InlineCode>localVariable</InlineCode>);  {'//'} Esto daría un error, ya que localVariable solo está definida dentro de la función miFuncion<br/>
          </code>
        </div>
        <p className='mt-4'>
          En este ejemplo, <InlineCode>globalVariable</InlineCode> es una variable global que se puede acceder desde cualquier parte del código. 
          <InlineCode>localVariable</InlineCode> es una variable local que solo se puede acceder dentro de la función <InlineCode variant='secondary'>miFuncion()</InlineCode>. 
          La función interna <InlineCode variant='secondary'>funcionInterna()</InlineCode> puede acceder tanto a <InlineCode>globalVariable</InlineCode> como a <InlineCode>localVariable</InlineCode>, 
          ya que está dentro del scope de <InlineCode variant='secondary'>miFuncion()</InlineCode>.<br/>
          Sin embargo, intentar acceder a <InlineCode>localVariable</InlineCode> fuera de <InlineCode variant='secondary'>miFuncion()</InlineCode> generaría un error, ya que no está definida en ese scope.
        </p>
      </section>
    </article>
  );
};

export default Sesion2InfoDialog3;
