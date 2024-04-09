import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const Sesion7InfoDialog1 = () => {
  return (
    <article className="flex flex-col gap-4">
      <p className="leading-8">
        En JavaScript, los &quot;prototipos&quot; son un mecanismo fundamental que permite a los objetos compartir propiedades y métodos entre sí a través de una relación de prototipo. 
        Cada objeto en JavaScript tiene un prototipo asociado, que es esencialmente una referencia a otro objeto. 
        Cuando intentas acceder a una propiedad o método en un objeto y este no lo tiene, JavaScript busca en su prototipo para ver si el prototipo tiene la propiedad o el método.
      </p>
      <p className="leading-8">
        Los prototipos en JavaScript están vinculados a la herencia prototipal, un paradigma de programación en el que los objetos heredan propiedades y métodos de otros objetos. 
        A diferencia de la herencia basada en clases que se encuentra en algunos otros lenguajes de programación, 
        donde las clases definen la estructura y el comportamiento de los objetos, en JavaScript los objetos simplemente heredan directamente de otros objetos.
      </p>
      <p className="leading-8">
        El prototipo de un objeto se puede acceder utilizando la propiedad especial &apos;prototype&apos;, y puedes agregar nuevas propiedades y métodos al prototipo de un objeto utilizando esta propiedad.
      </p>
      <p className="leading-8">
        Aquí tienes un ejemplo básico que demuestra cómo funcionan los prototipos en JavaScript:
      </p>
      <section className="flex flex-col gap-2 rounded bg-gray-100 p-3 text-gray-800">
        <InlineCode variant="secondary">
          {'//'} Definir un constructor de objetos
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            funcion <InlineCode>Persona</InlineCode>{`(nombre, edad) {`}
          </pre>
        </code>
        <code className="text-gray-500">
          &nbsp;&nbsp;{'this.nombre = nombre;'}
          <br />
          &nbsp;&nbsp;{`this.edad = edad;`}
        </code>
        <code className="text-gray-500">{'}'}</code>
        <br />

        <InlineCode variant="secondary">
          {'//'} Agregar un método al prototipo de Persona
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            <InlineCode>Persona</InlineCode>{`.prototype.saludar = function() {`}
          </pre>
        </code>
        <code className="text-gray-500">
          &nbsp;&nbsp;{`console.log('¡Hola, soy ' + this.nombre + '!');`}
        </code>
        <code className="text-gray-500">{'}'}</code>
        <br />

        <InlineCode variant="secondary">
          {'//'} Crear un objeto usando el constructor Persona
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            {'const '}<InlineCode>persona1</InlineCode>{` = new `}<InlineCode>Persona</InlineCode>{`('Juan', 30);`}
          </pre>
        </code>
        <br />

        <InlineCode variant="secondary">
          {'//'} Llamar al método del prototipo
        </InlineCode>
        <code className="text-gray-500">
          <pre>
            <InlineCode>persona1</InlineCode>{`.saludar();`}
          </pre>
          {'//'} Salida: ¡Hola, soy Juan!
        </code>
        
      </section>
      <p className='mt-4'>
        En este ejemplo:
      </p>
      
      <ul className='list-disc pl-6'>
        <li>
          Definimos un constructor de objetos <InlineCode>Persona</InlineCode> que acepta un nombre y una edad como parámetros y los asigna a las propiedades &apos;nombre&apos; y &apos;edad&apos; del objeto creado.
        </li>
        <li>
          Luego, agregamos un método &apos;saludar&apos; al prototipo de <InlineCode>Persona</InlineCode>, que imprime un saludo con el nombre de la persona.
        </li>
        <li>
          Finalmente, creamos un objeto <InlineCode>persona1</InlineCode> utilizando el constructor <InlineCode>Persona</InlineCode> y llamamos al método &apos;saludar&apos; del prototipo del objeto.
        </li>
      </ul>
      <p className='leading-8 mt-4'>
        Los prototipos son una parte esencial de JavaScript y son fundamentales para entender cómo funcionan los objetos y la herencia en el lenguaje.
      </p>
    </article>
  );
};

export default Sesion7InfoDialog1;
