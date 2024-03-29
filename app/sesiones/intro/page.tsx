import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Link from '@/components/Link';

export default function Intro() {
  return (
    <div className="flex flex-col gap-24">
      <section className="flex flex-wrap items-center gap-2 md:gap-8">
        <Card className="flex w-full flex-1 flex-col justify-end bg-intro-banner bg-contain bg-no-repeat md:min-h-[460px] xl:min-h-[620px]">
          <h2 className="text-2xl font-bold md:text-4xl">Sesión 1</h2>
          <h1 className="text-4xl md:text-6xl">Introducción a Javascript</h1>
        </Card>
        <Card
          variant="transparent"
          className="w-full flex-1 text-xl md:text-3xl"
        >
          <p>
            En esta sesión aprenderás los conceptos básicos de Javascript, y a
            dar los primeros pasos en la programación con este lenguaje.
          </p>
          <br />
          <ul className="list-disc pl-12">
            <li>¿Qué es Javascript?</li>
            <li>Sintaxis básica.</li>
            <li>Hola mundo!</li>
          </ul>
        </Card>
      </section>
      <Footer className="flex flex-1">
        <Link href="./intro/preparacion" className="text-3xl" target="_self">
          →
        </Link>
      </Footer>
    </div>
  );
}
