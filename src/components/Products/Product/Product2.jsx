import React from "react";
import "./Product2.scss";
import {AiOutlineArrowRight} from "react-icons/ai"

import { Link } from "react-router-dom";

const Product = ({li, nameText, strikePrice, normalPrice}) => {
  return (
    <div className="product-card2">
      <Link className="link" to={li}>
        <div className="thumbnail2">
          <img
            src="https://cdn.shopify.com/s/files/1/0600/3680/8804/files/3326DF10-668E-4907-BC91-45415E0EFC64.jpg?v=1661888147&width=360"
            alt=""
          />
        </div>

        <div className="product-details">
          <span className="name">{nameText}</span>
          <span className="price2"><s>{strikePrice}</s>{normalPrice}</span>
          <div className="cart-buttons">
            <button className="add-to-cart-button">
              {/* <FaCartPlus size={20} /> */}
              View Category <AiOutlineArrowRight/>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
