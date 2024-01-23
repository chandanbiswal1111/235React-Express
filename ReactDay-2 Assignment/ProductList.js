import React from "react";
import { useState } from "react";

function ProductList() {
  const [pname, setPname] = useState("SAMSUNG");
  const [price, setprice] = useState(3500);
  const [quantity, setquantity] = useState(2);
  const [total, setTotal] = useState("");
  function Calculate() {
    var total = price * quantity;
    setTotal(total);
  }
  return (
    <div>
      <fieldset>
        <legend>Product Details</legend>
        Product Name : {pname} <br />
        Price : {price} <br />
        Quantity : {quantity} <br />
        <input type="button" onClick={Calculate} value=" Get Total" />
        <p>{total}</p>
      </fieldset>
    </div>
  );
}

export default ProductList;