import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Recommendations() {
  const recommendation = useSelector(state => state.recommendation.recommendations);
  const isLoading = useSelector(state => state.recommendation.isLoading);
  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate('/cuestionaryGenres');
  }

  return (
    <div>
      <button onClick={handleOnclick} className="text-base md:text-lg font-bold border-2 border-orange-700 bg-orange-600 hover:border-orange-800 rounded-lg py-2 px-6 my-4 md:my-8 mx-16 shadow-lg hover:scale-105">Volver</button>

      {isLoading ? (
        <div className="text-center font-bold text-xl my-8">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-4 mx-4">
          {recommendation &&
            recommendation.map(recom => (
              <div
                key={recom?.idGoogle}
                className="bg-slate-600 bg-opacity-30 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer w-44"
              >
                <img
                  src={recom?.coverImage} alt={recom?.title}
                  className="w-full object-cover"
                />
                <div className="px-4 py-2">
                  <h3 className="font-bold text-lg mb-2">{recom?.title}</h3>
                  <p className="text-gray-200">{recom?.authors.join(" ")}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Recommendations;
