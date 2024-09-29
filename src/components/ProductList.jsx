import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getAllProducts } from '../redux/slice/productSlice'
import Product from '../components/Product'
function ProductList() {
    const dispatch=useDispatch()
    const{products}=useSelector((store)=>store.product)
   

    useEffect(()=>{
  dispatch(getAllProducts())
    },[])
  return (
    <div className='row products'>
      {
       products && products.map((product)=>(
        <Product key={product.id} product={product}/>
       ))
      }

    
    </div>
  )
}

export default ProductList