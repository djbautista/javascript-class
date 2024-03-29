import React, { useState, useRef, useEffect } from 'react';

const JSRunner: React.FC = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const runCode = () => {
    if (!iframeRef.current) return;
    const iframe: HTMLIFrameElement = iframeRef.current;

    // Reset output
    setOutput([]);

    try {
      // Here we are using Blob to create a script that will be executed inside the iframe
      const blob = new Blob(
        [
          `
        try {
          const userScript = ${JSON.stringify(code)};
          const originalConsoleLog = console.log;
          console.log = (...args) => {
            originalConsoleLog(...args);
            window.parent.postMessage(JSON.stringify(args), '*');
          };
          eval(userScript);
        } catch (error) {
          window.parent.postMessage(JSON.stringify({ error: error.message }), '*');
        }
      `,
        ],
        { type: 'application/javascript' },
      );

      const scriptURL = URL.createObjectURL(blob);
      iframe.contentWindow?.location.replace(scriptURL);
    } catch (error: any) {
      setOutput((prev) => [...prev, `Error: ${error.message}`]);
    }
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent<any>) => {
      try {
        const data = JSON.parse(event.data);
        if (data.error) {
          setOutput((prev) => [...prev, `Error: ${data.error}`]);
        } else {
          setOutput((prev) => [
            ...prev,
            ...data.map((item: any) => item.toString()),
          ]);
        }
      } catch (error) {
        // Handle message parse error
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        fontFamily: 'Monaco, monospace',
      }}
    >
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: '100%',
          height: '150px',
          backgroundColor: '#555',
          color: '#fff',
          border: 'none',
          padding: '10px',
          fontFamily: 'Monaco, monospace',
        }}
      />
      <button
        onClick={runCode}
        style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Run Code
      </button>
      <div style={{ marginTop: '20px', maxHeight: '300px', overflowY: 'auto' }}>
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <iframe
        ref={iframeRef}
        style={{ display: 'none' }}
        sandbox="allow-scripts"
      ></iframe>
    </div>
  );
};

export default JSRunner;
