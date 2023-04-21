import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../store/actions/action'
import CategorySelect from './SelectCategories'

function CuestionaryGenres() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold my-2 md:my-4">¡Hola, {user.name}! Acá Bookie.</h2>
      <div className='my-2'>
        <p className="text-base md:text-xl my-1 md:leading-relaxed">Para comenzar, necesito que me indiques qué categorías de libros te gustan.</p>
        <p className="text-base md:text-xl my-1 md:leading-relaxed">¡Entre más específico seas, mejores recomendaciones podré hacerte!</p>
        <p className="text-base md:text-xl my-1 md:leading-relaxed">Por ejemplo, si te encanta Harry Potter, podrías buscar recomendaciones en los géneros de Fantasía y Ciencia Ficción.</p>
        <p className="text-base md:text-xl my-1 md:leading-relaxed">Así que, ¡adelante! Decime qué te gusta y juntos encontraremos tu próxima gran lectura!</p>
      </div>
      <div className='text-black'>
        <CategorySelect />
      </div>
    </>
  )
}

export default CuestionaryGenres