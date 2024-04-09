import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Link from '@/components/Link';

export default function Intro() {
  return (
    <div className="flex flex-col gap-24">
      <section className="flex flex-wrap items-center gap-2 md:gap-8">
        <Card className="flex w-full flex-1 flex-col justify-end bg-intro-banner bg-contain bg-no-repeat md:min-h-[460px] xl:min-h-[620px]">
          <h2 className="text-2xl font-bold md:text-4xl">Sesión 7</h2>
          <h1 className="text-4xl md:text-6xl">Prototypes y Métodos de String</h1>
        </Card>
        <Card
          variant="transparent"
          className="w-full flex-1 text-xl md:text-3xl"
        >
          <p>
            En esta sección, nos adentraremos en los Prototipos nos permiten extender las funcionalidades de los objetos predefinidos, como Arrays o Strings, 
            mientras que los Métodos de String nos brindan poderosas herramientas para manipular y trabajar con cadenas de texto. 
          </p>
          <br />
          <ul className="list-disc pl-12">
            <li>¿Qué son?</li>
            <li>Prototipos importantes</li>
            <li>Métodos de String</li>
          </ul>
        </Card>
      </section>
      <Footer className="flex flex-1">
        <Link
          href="./sesion-7-prototypes/preparacion"
          className="text-3xl"
          target="_self"
        >
          →
        </Link>
      </Footer>
    </div>
  );
}
