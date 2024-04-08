import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion5InfoDialog1 = () => {
  return (
    <article className="flex flex-col gap-4">
      <section className='w-full flex justify-center'>
        <iframe 
          className="h-[200px] w-full md:h-[300px] md:w-2/3"
          src="https://www.youtube.com/embed/zQVnDW8SaA0?si=KgHGzKjTHdT1AeVx" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        >
        </iframe>
      </section>
      <hr className="h-1 w-full" />
      <p className="leading-8">
        los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se completa una tarea. 
        Los callbacks son fundamentales en la programación, donde se necesita realizar operaciones que toman un tiempo desconocido para completarse, como la carga de datos desde un servidor o la lectura de un archivo.
      </p>
      <p>
        La ventaja principal de los callbacks es que permiten que el código continúe ejecutándose sin esperar la finalización de una tarea.
        Cuando la tarea se completa, se llama al callback para manejar el resultado o realizar acciones adicionales.
      </p>
      <p>
        Por ejemplo, en el contexto de la programación web, se pueden utilizar callbacks para manejar las respuestas de las solicitudes HTTP.
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Función que simula la carga de un mensaje después de un tiempo
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`function  `}<InlineCode>cargarMensaje</InlineCode>{`(callback) {`}
          </pre>
          <br />
          &nbsp;&nbsp;{`setTimeout(function() { `}
        </code>
        <code className="text-gray-500">
          &nbsp;&nbsp;&nbsp;&nbsp;{`const mensaje = "¡Hola desde el servidor!";`}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;{`callback(mensaje);`}
          {'//'} Llamada al callback con el mensaje cargado
        </code>
        <code className="text-gray-500">
          &nbsp;&nbsp;{'}, 2000);'}
          {'//'} Simulación de un tiempo de carga de 2 segundos
        </code>
        <code className="text-gray-500">{'}'}</code>
        <br />

        <InlineCode variant="secondary">
          {'//'} Función de callback para manejar el mensaje cargado
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {`function `}<InlineCode>mostrarMensaje</InlineCode>{`(mensaje) {`}
          </pre>
        </code>
        <code className="text-gray-500">
          &nbsp;&nbsp;{`console.log("Mensaje recibido:", mensaje);`}
        </code>
        <code className="text-gray-500">{'}'}</code>
        <br />

        <InlineCode variant="secondary">
          {'//'} Llamada a la función cargarMensaje con el callback mostrarMensaje
        </InlineCode>
        <code className="text-gray-500">
          <pre>
          <InlineCode>cargarMensaje</InlineCode>{`(`}<InlineCode>mostrarMensaje</InlineCode>{`);`}
          </pre>
        </code>
        
      </section>
      <ul className='list-disc pl-6'>
        <li>La función <InlineCode>cargarMensaje</InlineCode> simula la carga de un mensaje después de un tiempo (2 segundos en este caso) utilizando setTimeout.</li>
        <li>La función toma un callback como argumento y lo llama con el mensaje cargado una vez que está listo.</li>
        <li>La función <InlineCode>mostrarMensaje</InlineCode> es el callback que se pasa a <InlineCode>cargarMensaje</InlineCode>. Se ejecutará cuando se complete la carga del mensaje y recibirá el mensaje como argumento.</li>
        <li>Finalmente, llamamos a <InlineCode>cargarMensaje</InlineCode> y pasamos <InlineCode>mostrarMensaje</InlineCode> como callback.</li>
      </ul>
      <p>
        Después de 2 segundos, verás el mensaje "¡Hola desde el servidor!" impreso en la consola, demostrando cómo los callbacks nos permiten manejar operaciones asíncronas de manera efectiva en JavaScript.
      </p>
    </article>
  );
};

export default Sesion5InfoDialog1;
