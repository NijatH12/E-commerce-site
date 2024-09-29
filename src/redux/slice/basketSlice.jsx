import { createSlice } from '@reduxjs/toolkit'
const getBasket=()=>{
    if(localStorage.getItem("basket")){
        return JSON.parse(localStorage.getItem("basket"))
    }
    return []
}
const initialState={
products:getBasket(),
drawer:false,
totalAmount:0

}
const toStorage=(basket)=>{
    localStorage.setItem("basket",JSON.stringify(basket))
}



export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
     addToBasket:(state,action)=>{
        const findProduct=state.products && state.products.find((product)=>product.id==action.payload.id)
        if(findProduct){
           const extracted=state.products && state.products.filter((product)=>product.id!=action.payload.id)
           findProduct.count+=action.payload.count
           state.products=[...extracted,findProduct]
           toStorage(state.products)
        }
        else{
            state.products=[...state.products,action.payload]
            toStorage(state.products)
        }
     },
     setDrawer:(state)=>{
        state.drawer= !state.drawer
     },
     calculateBasket:(state)=>{   
         state.totalAmount=0
state.products && state.products.map((product)=>{
state.totalAmount+=product.price*product.count
})
     },
    removeprdct:(state,action)=>{
        state.products=[ ...state.products.filter((product) => product.id != action.payload),]
        toStorage(state.products)
        state.totalAmount=0
        state.products && state.products.map((product)=>{
        state.totalAmount+=product.price*product.count
        })
       
    }
    },
  })
  export const {addToBasket,setDrawer,calculateBasket,removeprdct} = basketSlice.actions

export default basketSlice.reducer