import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Link from '@/components/Link';

export default function Intro() {
  return (
    <div className="flex flex-col gap-24">
      <section className="flex flex-wrap items-center gap-2 md:gap-8">
        <Card className="flex w-full flex-1 flex-col justify-end bg-intro-banner bg-contain bg-no-repeat md:min-h-[460px] xl:min-h-[620px]">
          <h2 className="text-2xl font-bold md:text-4xl">Sesión 3</h2>
          <h1 className="text-4xl md:text-6xl">Funciones fecha</h1>
        </Card>
        <Card
          variant="transparent"
          className="w-full flex-1 text-xl md:text-3xl"
        >
          <p>
            En esta sección, explorarás cómo utilizar funciones flecha o arrow functions para simplificar tu código y mejorar tu flujo de trabajo en el desarrollo web. 
          </p>
          <br />
          <ul className="list-disc pl-12">
            <li>¿Qué son?</li>
            <li>¿Cual es su uso?</li>
            <li>Particularidades</li>
          </ul>
        </Card>
      </section>
      <Footer className="flex flex-1">
        <Link
          href="./sesion-3-funciones-flecha/preparacion"
          className="text-3xl"
          target="_self"
        >
          →
        </Link>
      </Footer>
    </div>
  );
}
