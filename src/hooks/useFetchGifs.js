// los hooks son hooks que se pueden realizar personalizados para no repetir informacion, lo hacemos con "rafc"
// pero eliminando el return, porque ahora retornara el un objeto con lo necesario
import { useEffect, useState } from "react"; // Importamos los hooks useEffect (para efectos secundarios) y useState (para manejar estados).
import { getGifs } from "../helpers/getGifs"; // Importamos la función que obtiene los GIFs desde una API.


export const useFetchGifs = (category) => { // Creamos un hook personalizado llamado useFetchGifs que recibe la categoría como parámetro.

   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   console.log(isLoading);

   useEffect(() => {
     getGifs(category).then((data) => { // Llamamos a la función para obtener los GIFs usando la categoría.
       setImages(data); // Actualiza el estado con los datos obtenidos
       setIsLoading(false);
     });
    }, []);

    return {
        images,
        isLoading
    }

}
