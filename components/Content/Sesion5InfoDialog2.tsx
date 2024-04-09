import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion5InfoDialog2 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
        Los callbacks son importantes en JavaScript por varias razones:
      </p>
      <ol className='list-decimal pl-6'>
        <li>
          <strong>Programación Asíncrona:</strong> {' '}
          En JavaScript, muchas operaciones, como las solicitudes HTTP, la lectura de archivos o las animaciones en el navegador, son asíncronas, lo que significa que no bloquean la ejecución del código. 
          Los callbacks permiten manejar estas operaciones asíncronas de manera eficiente al proporcionar una forma de especificar qué hacer cuando se completa una tarea.
        </li>
        <li>
          <strong>Manejo de Eventos:</strong> {' '}
          Los callbacks son fundamentales para manejar eventos en el navegador web, como clics de ratón, pulsaciones de teclas o cambios en el estado de un elemento. 
          Permite ejecutar código en respuesta a acciones del usuario o cambios en el entorno de ejecución.
        </li>
        <li>
          <strong>Flexibilidad y Modularidad:</strong> {' '}
          La capacidad de pasar funciones como argumentos a otras funciones permite crear código modular y reutilizable. 
          Los callbacks permiten escribir funciones genéricas que pueden aceptar diferentes comportamientos como argumentos, lo que facilita la creación de API flexibles y extensibles.
        </li>
        <li>
          <strong>Control de Flujo:</strong> {' '}
          Los callbacks proporcionan un mecanismo para controlar el flujo de ejecución en situaciones donde el orden de las operaciones no es determinado, como en la programación asíncrona. 
          Permiten especificar qué hacer después de que se complete una tarea, lo que facilita la escritura de código que se adapta dinámicamente a diferentes condiciones.
        </li>
      </ol>
    </article>
  );
};

export default Sesion5InfoDialog2;
