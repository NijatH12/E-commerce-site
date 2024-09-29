import Container from "@mui/material/Container";
import "./App.css";
import Header from "./components/Header";
import RouteConfig from "./config/RouteConfig";
import Loading from "./components/Loading";
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, setDrawer,removeprdct } from "./redux/slice/basketSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function App() {
  const {products,drawer,totalAmount}=useSelector((store)=>store.basket)
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(calculateBasket())},[])

  const removeproduct = (e) => {
    dispatch(removeprdct(e.target.getAttribute("data")));
  };
 

  return (
    <>
    
      <Container fixed>
        <Header />
        <RouteConfig />
        <Loading />
        <Drawer  anchor="right" open={drawer} onClose={()=>{dispatch(setDrawer())}}>
        {
          products && products.map((product)=>{
           return(
            <div className="key"  key={product.id} style={{display:"flex",width:"500px" ,alignItems:"center",justifyContent:"space-between",margin:" 20px 10px ",padding:"15px",border:"1px solid black"}}>
         <div style={{display:"flex",gap:"10px"}}> <img className="basket-img" src={product.image} alt="" />
             <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              <h4>
                {product.title} ({product.count})
              </h4>
              <h2>${product.price}</h2>
             </div></div> 
             <div>
              <button onClick={removeproduct} data={product.id}
               className="btn-delete" >
                Delete
              </button>
             </div>
             
          </div>
           )
          })
          
        }
        <div className="total-amount">Total Amount: {totalAmount} $</div>
        
        </Drawer>
      </Container>
    </>
  );
}

export default App;
