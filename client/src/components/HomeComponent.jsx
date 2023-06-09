import React from 'react'
import robotImage from '../assets/robot_image.png'
import { Link } from 'react-router-dom';


function HomeComponent() {
    return (
        <>
            <img src={robotImage} className="w-48 md:w-72 mb-4"></img>
            <h1 className="text-3xl md:text-7xl font-bold my-4 md:my-8">Bienvenido a Lectur-App</h1>
            <p className="text-base md:text-xl font-bold my-2 md:leading-relaxed">La app que encuentra tu próximo libro.</p>
            <p className="text-base md:text-xl my-2 md:leading-relaxed">Lectur-App utiliza inteligencia artificial para brindarte las mejores opciones de lectura basadas en tus gustos.</p>
            <p className="text-base md:text-xl my-2 md:leading-relaxed">Si sos un amante de los libros, esta app es para vos.</p>
            <p className="text-base md:text-xl my-2 md:leading-relaxed">El cuestionario solo toma 5 minutos, ¡más fácil imposible!</p>
            <Link to='/cuestionaryInit'>
                <button className="text-base md:text-lg font-bold border-2 border-orange-700 bg-orange-600 hover:border-orange-800 rounded-lg py-2 px-6 my-4 md:my-8 mx-16 shadow-lg hover:scale-105">¡Empecemos ya!</button>
            </Link>
        </>
    )
}

export default HomeComponent