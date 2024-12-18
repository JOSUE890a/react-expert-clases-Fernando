import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

 

  const { images, isLoading} = useFetchGifs (category);
    console.log({images, isLoading})

  return (
    <>
    <h3>{category}</h3>
    {
      // isLoading ? ( <h2>Cargando...</h2>) : null
      isLoading && (<h2>Cargando...</h2>)
    }
      <div className='card-grid'>
        {
          //----------------------
          //Esto es una manera:
            // images.map( image => (
            //   <li key={image.id}>{image.title}</li>
            // ))
          //----------------------
          //Esta es otra con desestructuración
          images.map( ( image ) => (
            // <li key = {id}> {title} </li>
            <GifItem 
              // key = {image.id} 
              // title={image.title}
              // url={image.url}
              key={image.id}
              {...image}
            />
          ))

        }
      </div>

    </>
  )
}
