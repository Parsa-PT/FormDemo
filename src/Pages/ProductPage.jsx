import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './productpage.css'

const ProductPage = () => {
  const {id} = useParams();

  const [productInfo , setProductInfo] = useState([]);


  useEffect(()=>{
   async function getProduct (){
        fetch(`http://127.0.0.1:8000/product/${id}/`)
        .then(response => response.json())
        .then(data =>  setProductInfo(data) )
    }

    getProduct()

  },[id])


  





  return (
    <div className="bg">
        <div className="img">
            <img   src={productInfo.image} alt="" />
        </div>

        <div className="info">
            <h2> City : {productInfo.title}</h2>
            <h2> Price : {productInfo.price}</h2>
            <h2> Desc : {productInfo.description}</h2>
        </div>
    </div>
  );
};

export default ProductPage;
