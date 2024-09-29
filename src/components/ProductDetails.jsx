import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedproduct } from "../redux/slice/productSlice";
import "../css/details.css";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { addToBasket, calculateBasket } from '../redux/slice/basketSlice';
function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct} = useSelector((store) => store.product);
  const { price, image, title, description } = selectedProduct;
  useEffect(() => {
    getproductById();
  }, []);
  const dispatch = useDispatch();
  const getproductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedproduct(product));
        }
      });
  };
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count - 1 < 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const addBasket = () => {
    const payload = {
        id,
        price,
        image,
        title,
        description,
        count
    }

    dispatch(addToBasket(payload));
    dispatch(calculateBasket(payload))
    setCount(0)
}


  return (
    <div className="row about">
      <div>
        <img src={image} className="img" alt="" />
      </div>
      <div className="txt-product">
        <h2>{title}</h2>
        <h1>${price}</h1>
        <h3>{description}</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <CiCircleMinus
            className="icon"
            onClick={decrement < 0 ? 0 : decrement}
          />
          <span className="count">{count}</span>
          <CiCirclePlus className="icon" onClick={increment} />
        </div>
        <div>
          <button onClick={addBasket} className="addbtn">
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
