import InlineCode from '../Code/InlineCode';

import Link from '@/components/Link';

export const HistoriaJavascript = () => {
  return (
    <article className="flex flex-col gap-4">
      <Link
        href="https://www.jetbrains.com/lp/javascript-25/"
        variant="secondary"
        className="underline"
      >
        JavaScript Turns 25 Years
      </Link>
      <p>
        En los 90s, Netscape, una compañía con ambiciones de dominar el naciente
        internet, le dio luz a JavaScript. Creado por Brendan Eich en apenas
        diez días (o eso dicen), este lenguaje estaba destinado a darle vida
        (interacción) a los sitios web que en ese momento eran estáticos, pero
        ni ellos sabían el monstruo que acababan de liberar.
      </p>
      <p>
        A medida que el internet se expandía, el papel de JavaScript se hacía
        cada vez más y más crucial, pasando de simples validaciones de
        formulario a la columna vertebral de aplicaciones web complejas. Luego,
        llegó el boom de los motores V8, SpiderMonkey, y Chakra. Estos motores,
        desarrollados por gigantes tecnológicos como Google, Mozilla y
        Microsoft, respectivamente, transformaron JavaScript de un lenguaje
        lento y pesado a una bestia de alta velocidad, capaz de ejecutar
        aplicaciones complejas en el navegador.
      </p>
      <p>
        Pero el verdadero giro en la trama llegó con Node.js en 2009, llevando
        JavaScript fuera del navegador y al servidor, una jugada que nadie vio
        venir. Con Node.js y el concepto de los módulos con{' '}
        <InlineCode variant="secondary">require(...)</InlineCode>, JavaScript se
        convirtió en un lenguaje de programación de espectro completo, dominando
        tanto el frontend como el backend, y marcando el inicio de la era de
        JavaScript en tiempo real y aplicaciones universales.
      </p>
      <p>
        Esta transformación no solo marcó la importancia de JavaScript en el
        desarrollo web sino que también impulsó el nacimiento de un ecosistema
        entero, desde frameworks como Angular, React, y Vue, hasta herramientas
        como Webpack y Babel, redefiniendo lo que es posible hacer en la web (
        <strong>todo!</strong>).
      </p>
      <p>
        La historia de JavaScript es una de constante evolución y sorpresas,
        demostrando que, en el mundo de la tecnología, lo único constante es el
        cambio.
      </p>
    </article>
  );
};

export default HistoriaJavascript;
