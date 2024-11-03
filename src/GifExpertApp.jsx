import React, { useState } from 'react'; // Importa React y el hook useState
import { AddCategory,GifGrid } from './components'; // Importa el componente AddCategory

// Componente principal GifExpertApp
export const GifExpertApp = () => {
  // Define el estado inicial con un array de categorías
  const [categories, setCategories] = useState([]);

  // Función para agregar una nueva categoría
  const onAddCategory = (newCategory) => {
    // Si la categoría ya existe, no hacer nada
    if (categories.includes(newCategory)) return;

    // Actualiza el estado agregando la nueva categoría al array existente
    setCategories([newCategory]);
  };

  
  const resetGifs = () =>{
    setCategories([])
  }
  
  return (
    <>
      {/* Título de la aplicación */}
      <h1>GifExpertApp</h1>

      {/* Componente para agregar nuevas categorías */}

      <AddCategory 
        // Prop para manejar la nueva categoría
        onNewCategory={(value) => onAddCategory(value)} 
      />
      <button onClick={resetGifs}>Reset</button>


      {/* Listado de categorías */}

    
      <ol>
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      {/* Aquí se pueden agregar más elementos como los GIFs */}
    </>
  );
};