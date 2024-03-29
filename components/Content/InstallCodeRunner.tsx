import Link from '@/components/Link';

export const InstallCodeRunner = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Para ejecutar y probar tu código JavaScript rápidamente, puedes usar una
        extensión de editor de código llamada Code Runner. Aquí te explicamos
        cómo instalarla y usarla en Visual Studio Code:
      </p>
      <ul className="flex list-decimal flex-col gap-4 pl-6 md:pl-12 md:pr-4">
        <li>Abre Visual Studio Code.</li>
        <li>Ve a Extensions (Ctrl+Shift+X) y busca "Code Runner".</li>
        <li>Instala la extensión.</li>
        <li>
          Ahora, puedes ejecutar tu código JavaScript directamente en Visual
          Studio Code usando el botón "Run Code" o presionando Ctrl+Alt+N.
        </li>
      </ul>
      <p>
        También puedes seguir esta guia oficial de la extensión:{' '}
        <Link
          href="https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner"
          variant="secondary"
          className="underline"
        >
          CodeRunner VSCode Extension
        </Link>
        .
      </p>
    </div>
  );
};

export default InstallCodeRunner;
