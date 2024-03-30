'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { database } from '../../../utils/firebaseConfig';

import Card from '@/components/Card';

export default function RankingGenPage() {
  const [koders, setKoders] = useState(null);
  const [nameFilterResult, setNameFilterResult] = useState(null);
  const [queryValue, setQueryValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedKoder, setEditedKoder] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { gen } = useParams();

  useEffect(() => {
    const kodersRef = database.ref('koders');
    kodersRef.on('value', (snapshot) => {
      const val = snapshot.val();
      const dataArr = Object.keys(val).reduce((accum, current) => {
        return val[current].gen === gen
          ? [...accum, { ...val[current], key: current }]
          : accum;
      }, []);
      console.log(val);
      console.log(dataArr);
      setKoders(dataArr);
    });

    return () => kodersRef.off();
  }, []);

  const handleFilterByName = (event) => {
    setQueryValue(event.target.value);
    const result = koders.filter((koder) =>
      `${koder.name} ${koder.lastname}`
        .toLowerCase()
        .includes(queryValue.toLowerCase()),
    );
    setNameFilterResult(result);
  };

  const handleEditButton = (koderKey) => {
    const selectedKoder = koders.find((koder) => koder.key === koderKey);
    setIsEditing(true);
    setEditedKoder(selectedKoder);
    reset({
      name: selectedKoder.name,
      lastname: selectedKoder.lastname,
      gen: selectedKoder.gen,
      score: selectedKoder.score,
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    const kodersRef = database.ref(`koders/${editedKoder.key}`);

    kodersRef
      .set(data)
      .then(() => {
        console.log('Reemplazo exitoso');
        setIsEditing(false);
      })
      .catch((error) => console.error('Error en el reemplazo:', error));
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
      {queryValue && !nameFilterResult.length && (
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
                <Card>
                  <h2 className="text-xl">
                    {name} {lastname}
                  </h2>
                  <p>Score:{score}</p>
                  <button
                    onClick={() => handleEditButton(key)}
                    className="w-full rounded-lg border bg-cyan-300 px-4 py-2"
                  >
                    Editar
                  </button>
                </Card>
              );
            })}
          {nameFilterResult &&
            nameFilterResult.map((koder) => {
              const { name, lastname, score, key } = koder;
              return (
                <Card>
                  <h2 className="text-xl">
                    {name} {lastname}
                  </h2>
                  <p>Score:{score}</p>
                  <button
                    onClick={() => handleEditButton(key)}
                    className="w-full rounded-lg border bg-cyan-300 px-4 py-2"
                  >
                    Editar
                  </button>
                </Card>
              );
            })}
        </div>
        {isEditing && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-lg border border-white p-4"
          >
            <div className="mb-4 flex w-full flex-col">
              <label className="text-white">Nombre:</label>
              <input
                {...register('name')}
                className="rounded-lg bg-white px-4 py-2"
              />
            </div>
            <div className="mb-4 flex w-full flex-col">
              <label className="text-white">Apellidos:</label>
              <input
                {...register('lastname')}
                className="rounded-lg bg-white px-4 py-2"
              />
            </div>
            <div className="mb-4 flex w-full flex-col">
              <label className="text-white">Generación:</label>
              <input
                {...register('gen')}
                className="rounded-lg bg-white px-4 py-2"
              />
            </div>
            <div className="mb-4 flex w-full flex-col">
              <label className="text-white">Score:</label>
              <input
                {...register('score')}
                type="number"
                className="rounded-lg bg-white px-4 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg border bg-cyan-300 px-4 py-2"
            >
              Guardar Cambios
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
