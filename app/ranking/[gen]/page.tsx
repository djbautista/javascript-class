'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Card from '@/components/Card';
import Koder from '@/models/Koder';
import { database } from '@/utils/firebaseConfig';

export default function RankingGenPage() {
  const [koders, setKoders] = useState<Koder[]>([]);
  const [nameFilterResult, setNameFilterResult] = useState<Koder[] | null>(
    null,
  );
  const [queryValue, setQueryValue] = useState('');

  const { gen } = useParams();

  useEffect(() => {
    const kodersRef = database.ref('koders');
    kodersRef.on('value', (snapshot) => {
      const val = snapshot.val();

      const dataArr = Object.keys(val).reduce((accum, current) => {
        return val[current].gen === gen
          ? [...accum, { ...val[current], key: current }]
          : accum;
      }, [] as Koder[]);

      setKoders(dataArr);
    });

    return () => kodersRef.off();
  }, [gen]);

  const handleFilterByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryValue(event.target.value);
    const result = koders.filter((koder) =>
      `${koder.name} ${koder.lastname}`
        .toLowerCase()
        .includes(queryValue.toLowerCase()),
    );
    setNameFilterResult(result);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 rounded-lg border border-white p-4 ">
        <label htmlFor="" className="text-white">
          Buscar por nombre:
        </label>
        <input
          type="text"
          className="w-full rounded-lg bg-white px-4 py-2"
          onChange={handleFilterByName}
        />
      </div>
      {Boolean(queryValue) && !nameFilterResult?.length && (
        <div className="w-full rounded-lg border border-red-800 bg-red-200 p-4 text-center text-red-800">
          No hay resultados
        </div>
      )}

      <div className="flex gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {koders &&
            !nameFilterResult &&
            koders.map((koder) => {
              const { name, lastname, score, key } = koder;
              return (
                <Card key={key}>
                  <h2 className="text-xl">
                    {name} {lastname}
                  </h2>
                  <p>Score:{score}</p>
                </Card>
              );
            })}
          {nameFilterResult &&
            nameFilterResult.map((koder) => {
              const { name, lastname, score, key } = koder;
              return (
                <Card key={key}>
                  <h2 className="text-xl">
                    {name} {lastname}
                  </h2>
                  <p>Score:{score}</p>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}
