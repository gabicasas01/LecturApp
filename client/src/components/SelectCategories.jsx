import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SlClose } from "react-icons/sl";
import { postUserPreferences } from '../store/actions/action';

const CategorySelect = () => {
    const categories = useSelector(state => state.books.categories);
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState('');
    const [subcategories, setSubcategories] = useState([]);


    const [state, setState] = useState({
        preferences: {
          genres: []
        }
      });
      

    const [selectedSubcategory, setSelectedSubcategory] = useState([]);

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        const subcategories = categories.filter((category) => category[0] === selectedCategory);
        setSubcategories(subcategories[0].slice(1));
        setSelectedCategory(selectedCategory);
    };

    const handleSubcategoryChange = (e) => {        
        const value = state.preferences.genres.find(cat => cat === e.target.value);
        if (e.target.value.length < 1) return;
        if (value) return;
        if(state.preferences.genres.length > 4) return;
        else {
            setState({
                ...state,
                preferences: {
                    genres: [...state.preferences.genres, e.target.value]
                }
            })
        }
    };

    const handleDeleteSubcategory = (el) => {
        setState({
            ...state,
            preferences: {
                genres: state.preferences.genres.filter(g => g !== el)
            }
        });
    };

    const handleSearch = (e) => {
        dispatch(postUserPreferences(state))
    }

    return (
        <div className="flex flex-col items-center">
            <div className="mt-4 w-64">
                {categories && categories.length > 0 && (
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center"
                    >
                        <option value="">Selecciona una categoría</option>
                        {categories.map((category) => (
                            <option value={category[0]} key={category[0]}>
                                {category[0]}
                            </option>
                        ))}
                    </select>
                )}
                {subcategories.length > 0 && (
                    <select
                        value={state.preferences.genres}
                        multiple={true}
                        onChange={handleSubcategoryChange}
                        className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center"
                    >
                        <option value="">Selecciona una subcategoría</option>
                        {subcategories.map((subcategory) => (
                            <option value={subcategory} key={subcategory}>
                                {subcategory}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4 w-full">
                {state.preferences.genres.map((genre) => (
                    <div key={genre} className="bg-white rounded-lg shadow-lg flex flex-col">
                        <div className="flex justify-between items-center p-4">
                            <p className="text-base font-medium w-full text-center truncate">{genre}</p>
                            <button onClick={() => handleDeleteSubcategory(genre)}>
                                <SlClose className="text-red-500 hover:text-red-600 w-6 h-6 pl-2" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
            <Link to='/recommendations'>
                <button onClick={handleSearch} className="text-base md:text-lg font-bold border-2 text-white border-orange-700 bg-orange-600 hover:border-orange-800 rounded-lg py-2 px-6 my-4 md:my-8 mx-16 shadow-lg hover:scale-105">Buscar</button>
            </Link>
            </div>


        </div>

    );
};

export default CategorySelect;
