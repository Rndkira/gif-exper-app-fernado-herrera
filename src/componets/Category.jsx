import { useState } from "react"

export const Category = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onImputChange = ({target}) =>{
     
    //  console.log(target.value)
    setInputValue(target.value)
  }

  const onSubmit = (event) =>{
    event.preventDefault()
   
    if( inputValue.trim().length <= 1) return;

    // setCategories(categories => [inputValue, ...categories])
    onNewCategory(inputValue.trim())
     setInputValue('')

 
  }

  return (
    <form onSubmit={ onSubmit}>
          <input type="text" 
               placeholder="Buscar gif"
               value={inputValue}
               onChange={ onImputChange }
          />

    </form>
  )
}
