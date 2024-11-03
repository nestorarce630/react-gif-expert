import { useState } from 'react'; // Importa el hook useState de React

// Componente AddCategory que recibe una función onNewCategory como prop
export const AddCategory = ({ onNewCategory }) => {
  // Estado para manejar el valor del input
  const [inputValue, setInputValue] = useState();

  // Función para manejar el cambio en el input
  const onInputChange = ({ target }) => {
    setInputValue(target.value); // Actualiza el estado con el nuevo valor del input
  };

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario
    // Verifica que el input no esté vacío o sólo contenga espacios
    if (inputValue.trim().length <= 1) return;

    // Llama a la función onNewCategory con el valor del input
    onNewCategory(inputValue.trim());
    setInputValue(''); // Reinicia el valor del input a una cadena vacía
  };

  return (
    <form onSubmit={onSubmit}> {/* Maneja el evento de submit con onSubmit */}
      <input
        type="text" // Define el tipo de input como texto
        placeholder="Buscar gifs" // Placeholder que se muestra cuando el input está vacío
        value={inputValue} // El valor del input es controlado por el estado
        onChange={onInputChange} // Llama a onInputChange al cambiar el input
      />
    </form>
  );
};
