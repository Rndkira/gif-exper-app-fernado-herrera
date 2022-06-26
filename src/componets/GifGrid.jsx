
 
import { useFetchGifs } from '../hook/useFetchGifs';
import { Gifitem } from './Gifitem';


export const GifGrid = ({category}) => {

  const {images, loading} = useFetchGifs(category)

  return (
    <div>

          <h3>{category} </h3>

          {
            loading && <h2>...cargando</h2>
          }

          <div className=' card-grid'>
            {images.map(image => (
                 
             <Gifitem key={image.id}  image={image}/>
               
            ))}
          </div>
           

    </div>
  )
}
