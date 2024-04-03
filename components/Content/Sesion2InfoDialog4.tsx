import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion2InfoDialog4 = () => {
  return (
    <article className="flex flex-col gap-4 leading-8">
      <p>Los scopes en JavaScript son cruciales por varias razones:</p>
      <ul className="my-4">
        <li>
          <strong>Evitan colisiones de nombres:</strong> Los scopes permiten
          definir variables y funciones con los mismos nombres en diferentes
          partes del código sin que interfieran entre sí. Esto ayuda a mantener
          el código organizado y reduce la posibilidad de errores.
        </li>
        <li>
          <strong>Control de acceso:</strong> Los scopes determinan qué
          variables y funciones pueden ser accedidas desde diferentes partes del
          código. Esto asegura que las variables sensibles o específicas de
          ciertas funciones no sean modificadas o accedidas accidentalmente
          desde otros lugares.
        </li>
        <li>
          <strong>Previenen fugas de información (information leakage):</strong>{' '}
          Al limitar el alcance de las variables y funciones, los scopes ayudan
          a prevenir la fuga de información sensible a partes del programa donde
          no debería ser accesible.
        </li>
        <li>
          <strong>Mejoran la legibilidad y mantenibilidad:</strong> Utilizar
          scopes de manera efectiva puede hacer que el código sea más legible y
          fácil de entender, ya que proporciona contexto sobre dónde se definen
          y utilizan las variables y funciones.
        </li>
      </ul>
      <p>
        En resumen, los scopes en JavaScript son herramientas esenciales para
        organizar y estructurar el código, así como para controlar el acceso a
        variables y funciones, lo que contribuye a un desarrollo más eficiente y
        menos propenso a errores.
      </p>
    </article>
  );
};

export default Sesion2InfoDialog4;
