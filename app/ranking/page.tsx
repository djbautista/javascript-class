'use client'
import { useEffect, useState } from 'react';
import { database } from "../../utils/firebaseConfig";

import {useForm} from 'react-hook-form'

export default function Ranking() {
  const [koders, setKoders] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    const kodersRef = database.ref("koders");
    kodersRef.push(data)
        .then((newKoderRef)=>{
            console.log('Koder añadido con éxito! ID:', newKoderRef.key); //Brings the key of the new koder
    })
    .catch((error)=> {
        console.error('Error al añadir koder:', error);
    })
    
}

  useEffect(() => {
    const kodersRef = database.ref("koders");
    kodersRef.on('value', (snapshot) => {
      const val = snapshot.val();
      setKoders(val);
    });
    return () => kodersRef.off();
  }, []);

  return (
    <div className='grid grid-cols-2 gap-4 w-3/4 mx-auto'>
      <ul className='border border-white shadow-lg rounded-lg p-4 text-white'>
        {
            Object.keys(koders).map( koder => {
                const {name,lastname,score} = koders[koder]
                return(
                    <li key={koder} className='border-b border-white last:border-b-0 py-4 first:pt-0 last:pb-0'>{name} {lastname} : {score}</li>
                )
            })
        }
      </ul>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className='border rounded-lg p-4 flex flex-col gap-4'>
            <div className='flex flex-col'>
                <label htmlFor="" className='text-white'>Nombre:</label>
                <input type="text" className='px-4 py-2 rounded-lg' {...register("name",{required:true})}/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='text-white'>Apellidos:</label>
                <input type="text" className='px-4 py-2 rounded-lg' {...register("lastname",{required:true})}/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='text-white'>Generación:</label>
                <input type="text" className='px-4 py-2 rounded-lg' {...register("gen",{required:true})}/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="" className='text-white'>Score:</label>
                <input type="text" className='px-4 py-2 rounded-lg' {...register("score",{required:true})}/>
            </div>
            <button type="submit" className='px-4 py-2 bg-cyan-800 rounded-lg'>Guardar</button>
        </form>
      </div>
    </div>
  );
}