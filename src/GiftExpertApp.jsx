import { useState } from "react";
import { AddCategory, GifGrid} from "./components/index.js"; // tenemos todos lo componentes en el index.js que creamos

export const GiftExpertApp = () => {
    
    // utilizando useState snippet nos crea el cuerpo del hook directamente
    const [categories, setCategories] = useState([]);

    // funcion para agregar algo a un array
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return; // Preguntamos si la categoria ya esta incluida para que no se repita
        setCategories([...categories, newCategory]); // setCategories, agregamos al array categories, la nueva categoria
    }

    // funcion para eliminar una categoria
    const onDeleteCategory = (categoryToDelete) => {
        setCategories((prevCategories) => 
          prevCategories.filter((cat) => cat !== categoryToDelete)
        );
      };

  return (
    <>  
        {/*Titulo*/}
        <h1>GifExpertApp</h1>

        {/*Input*/}
        <AddCategory 
        
        //categories={categories} setCategories={setCategories} 
        // mandamos la funcion onNewCategory como una nueva categoria
        onNewCategory={ event => onAddCategory(event)}
        
        />
        {/*Listado de Gif*/} 

        {
            categories.map((category) =>  (             
                <GifGrid 
                    key={category} 
                    category={category}
                    categories={categories}
                    onDeleteCategory={onDeleteCategory}
                 />
            ))
        }

        {/*} condicional para mostrar texto cuando no hay categorias cargadas {*/}

        {
            categories.length == 0 && ( <h3>Agrega una categoria</h3> )
        }

        <button onClick={onAddCategory}>Agregar Categoria</button>

        {/*Gif Item*/}

    </>
  )
}
