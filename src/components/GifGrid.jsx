import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onDeleteCategory }) => {

  const {images, isLoading} = useFetchGifs( category );
   
  return (
    <>
      <h3>{category}</h3>
      
      {
        isLoading && ( <h2>Cargando...</h2>) // and logico, si isLoading is true mostrar cargando
      }

      <div className="card-grid">
        {
        images.map((image) => (
          <GifItem key={image.id} {...image}/> // con el operador spread {...image} "esparcimos" o obtenemos todas las propiedades
                                               // del objeto con el que trabajamos
        ))
        }
      <button className="button-delete-category" onClick={() => onDeleteCategory(category)}>Borrar Categoria</button>

      </div>
      
    </>
  );
};
