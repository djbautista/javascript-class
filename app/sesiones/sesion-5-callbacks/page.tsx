import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Link from '@/components/Link';

export default function Intro() {
  return (
    <div className="flex flex-col gap-24">
      <section className="flex flex-wrap items-center gap-2 md:gap-8">
        <Card className="flex w-full flex-1 flex-col justify-end bg-intro-banner bg-contain bg-no-repeat md:min-h-[460px] xl:min-h-[620px]">
          <h2 className="text-2xl font-bold md:text-4xl">Sesión 5</h2>
          <h1 className="text-4xl md:text-6xl">Callbacks y Funciones como argumentos </h1>
        </Card>
        <Card
          variant="transparent"
          className="w-full flex-1 text-xl md:text-3xl"
        >
          <p>
            En esta sección, se destaca la importancia y la utilidad de los Callbacks y las Funciones como Argumentos, son conceptos fundamentales que permiten un manejo eficiente y flexible del flujo de ejecución en nuestro código. 
          </p>
          <br />
          <ul className="list-disc pl-12">
            <li>Importancia</li>
            <li>¿Como se usan?</li>
            <li>Ejemplos</li>
          </ul>
        </Card>
      </section>
      <Footer className="flex flex-1">
        <Link
          href="./sesion-5-callbacks/preparacion"
          className="text-3xl"
          target="_self"
        >
          →
        </Link>
      </Footer>
    </div>
  );
}
