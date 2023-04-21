import React from 'react'
import { Link } from 'react-router-dom';
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
      <Link to='/recommendations'>
                <button className="text-base md:text-lg font-bold border-2 border-orange-700 bg-orange-600 hover:border-orange-800 rounded-lg py-2 px-6 my-4 md:my-8 mx-16 shadow-lg hover:scale-105">Buscar</button>
      </Link>
    </>
  )
}

export default CuestionaryGenres