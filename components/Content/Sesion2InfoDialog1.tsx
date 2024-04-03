import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion2InfoDialog1 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p>
        Las funciones en JavaScript sirven principalmente para encapsular bloques de código reutilizable y modular, lo que promueve la organización 
        y la eficiencia en el desarrollo de aplicaciones web. Permiten definir acciones específicas que pueden ser invocadas en cualquier momento durante 
        la ejecución del programa. Además, las funciones pueden aceptar <InlineCode variant="secondary">parámetros</InlineCode> y devolver <InlineCode variant="secondary">resultados</InlineCode>, lo que las hace flexibles y poderosas para manipular 
        datos y realizar operaciones complejas. En resumen, las funciones son fundamentales para <strong>estructurar</strong> y <strong>mantener</strong> el código en JavaScript.
      </p>
    </article>
  );
};

export default Sesion2InfoDialog1;
