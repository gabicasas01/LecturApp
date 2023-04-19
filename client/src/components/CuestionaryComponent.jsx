import React, { useState, useEffect } from 'react';
import BookieCuestionary from '../assets/BookieCuestionary.png'

function CuestionaryComponent() {
  const initialState = {
    name: '',
}
  const [input, setInput] = useState(initialState)

  console.log(input.name)

  let handleOnChange = (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
}

  return (
    <>
      <img src={BookieCuestionary} className="w-48 md:w-72"></img>
      <h2 className="text-3xl md:text-5xl font-bold my-4 md:my-8">¡Hola, soy Bookie!</h2>
      <p className="text-base md:text-xl my-2 md:leading-relaxed"> Estoy programado para ayudarte y darte las mejores recomendaciones de lectura.</p>
      <p className="text-base md:text-xl my-2 md:leading-relaxed">Dime, ¿cómo te llamas?</p>
      <input type='text' name='name' value={input.name} placeholder='Tu nombre de pila' onChange={handleOnChange} className='text-black border-2 rounded-lg py-2 px-6 my-4 md:my-8 mx-16 shadow-lg'></input>
      <button className="text-base md:text-lg font-bold border-2 border-orange-700 bg-orange-600 hover:border-orange-800 rounded-lg py-2 px-6 my-4 md:my-8 mx-16 shadow-lg hover:scale-105">¡Vayamos!</button>
    </>
  )
}

export default CuestionaryComponent