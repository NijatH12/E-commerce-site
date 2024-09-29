import React  from 'react'
import "../css/product.css"
import {useNavigate} from "react-router-dom"
function Product({product}) {
    const {id,price,image,title,description}=product
  const navigate=useNavigate()
  
  return (
    <div className='card'>
       <img className='image' src={image} alt="" />
       <div className='column' style={{gap:"10px"}} >
        <h4 >{
        title.length>20? `${title.substring(0,15)}...`:title
            
            }</h4>
        <h4 className='price'>${price}</h4>
         <button onClick={()=>navigate("/product-details/"+id)} className='card-btn'>About</button>
       </div>
    </div>
  )
}

export default Product