import { createContext ,useEffect, useState } from "react"

export const ProductHandler = createContext({
    productData : [],
})

const ProductHandlerProvider = (props)=>{
    const [product , setProduct] = useState([{}])

    useEffect(()=>{
    
     fetch('http://127.0.0.1:8000/product/')
      .then(response =>{
        return(
          response.json()
        )
      } )
      .then(data => {
        setProduct(data)
      })
      
    },[])

    
    return(
        <ProductHandler.Provider value={{productData : product}}>
            {props.children}
        </ProductHandler.Provider>
    )

}

export default ProductHandlerProvider