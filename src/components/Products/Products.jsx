import "./Products.scss";
import "./Product/Product.scss";

import axios from "axios"
import React, {  useState } from "react";
// import "./Product.scss";
// import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import baseUrl from "../../utils/baseUrl";


const Products = ({headingText , productCategory}) => {
    const [users, setUsers] = useState([]);
    const Navigate = useNavigate();
    const [showCart, setShowCart] = useState(false);
    
    const allEmploye = async () => {
    try {
      // console.log("hn hn chal rha hai ");
      axios
        .get(`${baseUrl}/api/v1/admin/readAllProduct`)
        .then((res) => {
          // console.log(res.data.data);
          var result = res.data.data;

          if (result.length > 0) {
            setUsers(result);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const proByid = async () => {
   const data = {
      productCategory : productCategory
    }
    // console.log(data) ;
    try {
      // console.log("hn hn chal rha hai ");
      axios
        .post(`${baseUrl}/api/v1/admin/readProductByCategory`, {data:data})
        .then((res) => {
          // console.log(res.data.data);
          var result = res.data.data;

          if (result.length > 0) {
            setUsers(result);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };



  if(headingText==="All Products"){
      allEmploye();
    }
    else {
      // proByid();
      if(productCategory==="c1"||productCategory==="c2"||productCategory==="c3"){
        proByid();
      }
      
    }

  //   useEffect(() => {
  //   allEmploye(); 
  //   proByid();
  // }, []);

 
const clicked = (curUser)=>{
  console.log(curUser);
  Navigate('/singleProduct' ,{state:curUser} )
}


const clickHandler = (cur)=>{
  console.log("add to cart  = " ,cur) ;
  // let cartArray = [] ;
  
  // cartArray.push(cur) ;
  // cartArray.push(cur) ;
  // setCart([...cart, cur]);

  var array = JSON.parse(localStorage.Cart) ;
  var flag = 0 ;
  for(let i = 0 ; i<array.length ;i++){
    if(array[i].productId===cur.productId){
      flag = i+1 ;
      alert("Quantity Increased") ;
    }
  }

  if(!flag){
    array.push(cur)
  // var showCart = 0 ;
  setShowCart(true) ;
  console.log(array) ; 
  localStorage.setItem("Cart" ,JSON.stringify(array)) ;
  }
  else{
    console.log("else me aagya hu ")
    let ar = JSON.parse(localStorage.quantity) ;
    const key = array[flag-1].productId
    console.log(key) ;
    // const value = 2 ;
    
    ar.push(key)

    // const arr = {array[flag].productId:"5"}
    // const arr = []

    localStorage.setItem("quantity" , JSON.stringify(ar) )
  }
  
 
}
    return <div className="products-container">
        <div className="sec-heading">{headingText}</div>
        {
              showCart   && <Cart setShowCart={setShowCart} />
            }
          <div className="products">
            {users.map((curUser) => {
              const {
               price ,
               productName
              } = curUser;
              return (
                // <Product name = {productName} price ={price}/>
                <div className="product-card">
                <div className="link" onClick={()=>{clicked(curUser)}}>
                <div className="thumbnail">
                <img
                  src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/3326DF10-668E-4907-BC91-45415E0EFC64.jpg?v=1661888147&width=360"
                alt=""
                />
        </div>

        
      </div>
      <div className="product-details">
          <span className="name">{productName}</span>
          <span className="price"> <s>Rs . 500</s> Rs. {price}</span>
          <div className="cart-buttons">
            <button className="add-to-cart-button" onClick={()=>{clickHandler(curUser)}}>
              {/* <FaCartPlus size={20} /> */}
              Add to Cart
            </button>
          </div>
        </div>
    </div>
              );
            })}
          </div>
      


    </div>;
};

export default Products;
