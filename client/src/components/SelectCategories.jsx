import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SlClose } from "react-icons/sl";

const CategorySelect = () => {
    const categories = useSelector(state => state.books.categories);
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState('');
    const [subcategories, setSubcategories] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState([]);

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        const subcategories = categories.filter((category) => category[0] === selectedCategory);
        setSubcategories(subcategories[0].slice(1));
        setSelectedCategory(selectedCategory);
    };

    const handleSubcategoryChange = (e) => {
        const value = selectedSubcategory.find(cat => cat === e.target.value);
        if (e.target.value.length < 1) return;
        if (value) return;
        else {
            setSelectedSubcategory([...selectedSubcategory, e.target.value]);
        }
    };

    const handleDeleteSubcategory = (el) => {
        setSelectedSubcategory(selectedSubcategory.filter(s => s !== el));
    };

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
                        value={selectedSubcategory}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-4 w-full">
                {selectedSubcategory.map((category) => (
                    <div key={category} className="bg-white rounded-lg shadow-lg flex flex-col">
                        <div className="flex justify-between items-center p-4">
                            <p className="text-base font-medium w-full text-center truncate">{category}</p>
                            <button onClick={() => handleDeleteSubcategory(category)}>
                                <SlClose className="text-red-500 hover:text-red-600 w-6 h-6 pl-2" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>


        </div>

    );
};

export default CategorySelect;
