import React, { useState } from 'react';
import BookieCuestionary from '../assets/BookieCuestionary.png'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserName } from '../store/actions/userActions';

function CuestionaryInit() {
  const initialState = {
    name: '',
  }

  const [input, setInput] = useState(initialState)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })  
  }

  const handleOnclick = () => {
    dispatch(setUserName(input))
    navigate('/cuestionaryGenres');
    setInput({ ...initialState })
  }

  return (
    <>
      <img src={BookieCuestionary} className="w-48 md:w-72"></img>
      <h2 className="text-3xl md:text-5xl font-bold my-4 md:my-8">¡Hola, soy Bookie!</h2>
      <p className="text-base md:text-xl my-2 md:leading-relaxed"> Estoy programado para ayudarte y darte las mejores recomendaciones de lectura.</p>
      <p className="text-base md:text-xl my-2 md:leading-relaxed">Dime, ¿cómo te llamas?</p>
      <input type='text' name='name' value={input.name} placeholder='Tu nombre de pila' onChange={handleOnChange} className='text-black border-2 rounded-lg py-2 px-6 my-4 md:my-8 mx-16 shadow-lg'></input>
      <button onClick={handleOnclick} className="text-base md:text-lg font-bold border-2 border-orange-700 bg-orange-600 hover:border-orange-800 rounded-lg py-2 px-6 my-4 md:my-8 mx-16 shadow-lg hover:scale-105">¡Vayamos!</button>
    </>
  )
}

export default CuestionaryInit