import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

const { data:images, loading } = useFetchGifs( category );

console.log( loading );


    //const [images, setImages] = useState([]);
    /* const [count, setCount] =  useState(0);  */
  /*   useEffect(()=>{
        getGifs(category)
            .then( setImages );
    },[ category ]) */ //Con esta función el código dentro, solo se ejecuta cuando se renderiza por primera vez

  return (
    <>
        <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
        
        {
            loading && <p className='animate__animated animate__flash'>Cargando</p>
        }

        <div className='card-grid'>
            <ol>
                {images.map(img => (
                    <GifGridItem 
                        key = { img.id }
                        { ...img } 
                    />
                ))}
            </ol>
            {/* <button onClick={()=>setCount(count + 1)}></button> */}

        </div>
    </>
  )
}
