import { useState } from "react"

import { Category,GifGrid } from './componets'




export const GifExpertApp = () => {


   const [categories, setCategories] = useState(['dragon ball']);

   const onAddCategory = (NewCategory) =>{
         
           // evita que los nombre se respitan
        if( categories.includes(NewCategory)) return;


       setCategories([ NewCategory, ...categories])
   }

  return (

    <>
        {/*titulo  */}
       <h1>gif expert app</h1>

       {/* input */}
          <Category       
          onNewCategory ={(value) => onAddCategory (value)}
          />


       {/* listado de gif  */}
     
        {categories.map(category =>
          <GifGrid  key={category} 
                category={category}
          />
        )}


      
       {/* gif item */}
    </>
  )
}

