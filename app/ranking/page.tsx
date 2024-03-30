'use client';
import Koder from '@/models/Koder';
import { database } from '@/utils/firebaseConfig';
import { useEffect, useState } from 'react';

interface KodersMap {
  [key: string]: Koder;
}

export default function Ranking() {
  const [koders, setKoders] = useState<KodersMap>({});

  useEffect(() => {
    const kodersRef = database.ref('koders');
    kodersRef.on('value', (snapshot) => {
      const val = snapshot.val();
      setKoders(val);
    });
    return () => kodersRef.off();
  }, []);

  return (
    <div className="mx-auto grid w-3/4 grid-cols-2 gap-4">
      <ul className="rounded-lg border border-white p-4 text-white shadow-lg">
        {Object.keys(koders).map((key) => {
          const { name, lastname, score } = koders[key];
          return (
            <li
              key={key}
              className="border-b border-white py-4 first:pt-0 last:border-b-0 last:pb-0"
            >
              {name} {lastname} : {score}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
