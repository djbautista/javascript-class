import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion5InfoDialog3 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
        Los callbacks son una característica fundamental en JavaScript y se utilizan por varias razones, especialmente en entornos asíncronos. 
        Aquí hay algunas situaciones comunes en las que se usan los callbacks en JavaScript:
      </p>
      <ol className='list-decimal pl-6'>
        <li>
          <strong>Operaciones asíncronas:</strong> {' '}
          JavaScript es un lenguaje de programación orientado a eventos y no bloqueante. 
          Esto significa que muchas operaciones, como las solicitudes de red, las lecturas de archivos o las operaciones de temporización, se realizan de manera asíncrona para evitar bloquear la ejecución del código. 
          Los callbacks se utilizan para manejar los resultados de estas operaciones asíncronas una vez que están disponibles.
        </li>
        <li>
          <strong>Eventos de usuario:</strong> {' '}
          En aplicaciones web, los eventos de usuario como hacer clic en un botón o enviar un formulario desencadenan acciones que a menudo requieren manejo asíncrono. 
          Los callbacks se pueden usar para especificar qué debe suceder cuando ocurre un evento en particular.
        </li>
        <li>
          <strong>Iteraciones y procesamiento de datos:</strong> {' '}
          Los callbacks son útiles en situaciones donde se necesita iterar sobre una colección de datos y aplicar una función a cada elemento. 
          Por ejemplo, el método Array.prototype.forEach() en JavaScript acepta un callback que se ejecuta para cada elemento del array.
        </li>
        <li>
          <strong>Manejo de errores:</strong> {' '}
          Los callbacks también se utilizan para manejar errores en operaciones asíncronas. 
          Generalmente, el primer parámetro de un callback en JavaScript es reservado para un error (si ocurre), permitiendo que el flujo del programa maneje adecuadamente las excepciones.
        </li>
        <li>
          <strong>Control de flujo:</strong> {' '}
          Los callbacks también se utilizan para controlar el flujo de ejecución del código, especialmente en situaciones donde se requiere ejecutar una operación después de que otra haya finalizado. 
          Esto es común en el manejo de múltiples operaciones asíncronas en secuencia.
        </li>
        <p className='mt-4'>
          Es importante tener en cuenta que con la introducción de promesas y async/await en JavaScript, hay alternativas más modernas y poderosas para manejar operaciones asíncronas. 
          Sin embargo, los callbacks siguen siendo una parte importante del ecosistema JavaScript y son ampliamente utilizados en muchas bibliotecas y frameworks.
        </p>
      </ol>
    </article>
  );
};

export default Sesion5InfoDialog3;
