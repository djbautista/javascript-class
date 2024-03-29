export const EsIgualJavaQueJavascript = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <iframe
        className="h-[200px] w-full md:h-[300px] md:w-2/3"
        src="https://www.youtube.com/embed/j4vjVetZPpM?si=MK8wRVS7JqEzgqRd&amp;start=15"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <hr className="h-[1px] w-full text-black" />

      <p className="flex flex-col gap-1">
        <b>No!</b>
        <span>
          La similitud en el nombre fue una decisión de marketing de Netscape y
          Sun Microsystems para capitalizar la popularidad de Java en ese
          momento. A nivel técnico, JavaScript es un lenguaje de programación
          interpretado y orientado a objetos, mientras que Java es un lenguaje
          de programación compilado y orientado a objetos.
        </span>
      </p>
      <p>
        JavaScript y Java son dos lenguajes de programación completamente
        diferentes. A pesar de la similitud en el nombre, JavaScript fue creado
        en 1995 por Brendan Eich mientras trabajaba en Netscape Communications
        Corporation, mientras que Java fue creado en 1991 por Sun Microsystems.
      </p>
    </div>
  );
};

export default EsIgualJavaQueJavascript;
