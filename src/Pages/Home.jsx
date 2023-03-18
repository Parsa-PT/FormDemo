import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProducMaker from '../components/productmaker'


const Home = () => {
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


 
  
  return (
    <>



     <ProducMaker product={product}  />
      


    
      
     
      </>
  )
}

export default Home
