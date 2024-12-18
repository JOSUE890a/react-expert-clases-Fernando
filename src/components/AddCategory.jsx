import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    // console.log(event.target.value)
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue)
    
    // Evita que se adicionen menores a 1 al arreglo
    if(inputValue.trim().length <= 1) return;

    // Agrega al arreglo de categories
    // setCategories(categories => [inputValue, ...categories])
      onNewCategory(inputValue.trim())
    // Limpia el input a la hora de dar un enter
    setInputValue("")
  }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input  type="text" 
                    placeholder="Buscar Gifs" 
                    value={inputValue}
                    name="" 
                    id="" 
                    onChange={(event) => onInputChange(event)}
            />
        </form>
    
  )
}
