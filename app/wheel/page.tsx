'use client';

import randomColor from 'randomcolor';
import { useEffect, useMemo, useRef, useState } from 'react';

import Card from '@/components/Card';
import WheelComponent from '@/components/Wheel';
import useCookie from '@/hooks/useCookie';

export default function Wheel() {
  const [wheelSize, setWheelSize] = useState(0);
  const { value: inputValue, updateCookie: updateInputValue } = useCookie({
    name: 'name',
    defaultValue: 'John',
  });

  const names = useMemo(() => {
    const names = inputValue.split(/\n/);
    return names.filter((name) => name.length > 0);
  }, [inputValue]);

  const colors = useMemo(() => {
    return names.map((name, index) =>
      randomColor({ seed: `${name}-${index}` }),
    );
  }, [names]);

  const wheelContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wheelContainer.current) {
      const containerWidth = wheelContainer.current?.clientWidth;
      setWheelSize(containerWidth / 3);
    }
  }, [wheelContainer.current]);

  const handleNamesInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    event.preventDefault();
    updateInputValue({ newValue: event.target.value });
  };

  return (
    <section className="flex h-screen min-h-[200px] flex-wrap-reverse gap-4 p-4 md:min-h-[600px]">
      <Card className="h-full w-full flex-1">
        <div
          className="flex h-full w-full items-center justify-center"
          ref={wheelContainer}
        >
          {Boolean(wheelSize) && Boolean(names.length) && (
            <WheelComponent
              key={inputValue}
              segments={names}
              segColors={colors}
              winningSegment="won 10"
              onFinished={(winner) => console.log(winner)}
              size={wheelSize}
              isOnlyOnce={false}
              upDuration={100}
              downDuration={100}
            />
          )}
        </div>
      </Card>

      <textarea
        className="flex-1/6 h-full w-1/6 resize-none rounded border border-gray-600 bg-gray-800 p-4 text-white"
        value={inputValue}
        onChange={handleNamesInputChange}
        placeholder="Type names separated by new lines..."
      />
    </section>
  );
}
