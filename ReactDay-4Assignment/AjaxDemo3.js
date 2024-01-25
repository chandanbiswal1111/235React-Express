import axios from 'axios';
import React, { useState } from 'react';

function AjaxDemo3() {   

   const [productsArray, setProductsArray] = useState([]);
   const [productId, setProductId] = useState("");
   const [productname, setProductname] = useState("");
   const [price, setPrice] = useState("");
   const [quantity, setQuantity] = useState("");

  function getDataButton_click() {

      let url = "http://localhost:3005/api/Prodt";
      axios.get(url).then( (resData) => 
      {
    
        setProductsArray(resData.data);
      });
  }
  function addProdButton_click() {      
    
    let prodObj = {};
    prodObj.productId = productId;
    prodObj.productname = productname;
    prodObj.price = price;
    prodObj.quantity = quantity;

    let url = "http://localhost:3005/api/Prodt";
    axios.post(url, prodObj).then( (resData) => 
    {       
      alert(resData.data.status);
      getDataButton_click();
    });

   
    clearFields();
}

function clearFields()
{
    setProductId("");
    setProductname("");
    setPrice(""); 
    setQuantity("");
}
    
function deleteProd_click(pId) {

    let flag = window.confirm("Are you sure want to delete?");    
    if(  flag == false   )
    {
        return;
    }
  
    let url = "http://localhost:3005/api/Prodt/" + pId;
    axios.delete(url).then( (resData) => 
    {       
      alert(resData.data.status);
      getDataButton_click();
    });
  }

  function updateProdButton_click() {
    
    let prodObj = {};
    prodObj.productId = productId;
    prodObj.productname = productname;
    prodObj.price = price;
    prodObj.quantity = quantity;

    let url = "http://localhost:3005/api/Prodt";
    axios.put(url, prodObj).then( (resData) => 
    {       
      alert(resData.data.status);
      getDataButton_click();
    });

    clearFields();
}


           
  let resultArray = productsArray.map(item => 
    {
      return <tr>
          <td>{item.productId}</td>
          <td>{item.productname}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>
          <a href="javascript:void(0);" 
                   onClick={() => deleteProd_click(item.productId)}>
                    Delete
                </a> 
          </td>
      </tr>;
    });


  return (
    <div style={ {"border":"2px solid blue", "padding":"10px", "padding-bottom":"15px", "backgroundColor" : "lightblue"}}>

      <h3>AJAX Programming in React JS using Axios Package</h3>
      <hr/>
      <input type="text" placeholder="Product ID" value={productId} onChange={ (e) => setProductId(e.target.value)} />
            <input type="text" placeholder="Product Name" value={productname} onChange={ (e) => setProductname(e.target.value)} />
            <input type="text" placeholder="Price" value={price} onChange={ (e) => setPrice(e.target.value)} />
            <input type="text" placeholder="Quantity" value={quantity} onChange={ (e) => setQuantity(e.target.value)} />
           <br/>

      <input type="button" onClick={getDataButton_click} 
               value="Get Data" />
               <input type="button" onClick={addProdButton_click} value="Add Prod" />
               <input type="button" onClick={updateProdButton_click} value="Update Prod" />

      <hr/>

      <table  border="2" cellSpacing="0" width="500">
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
          {resultArray} 
      </table>         

    </div>
  );
}

export default AjaxDemo3;