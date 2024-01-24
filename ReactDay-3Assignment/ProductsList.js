import React from "react";

function ProductsList({ catagory }) {
  const tableCellStyle = {
    padding: "12px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  };
  const products = [
    {id: 1,name: "Product 1",catagory: "Mobiles",price: 5000},
    { id: 2, name: "Product 2", catagory: "Laptops", price: 25000 },
    {id: 3, name: "Product 3",catagory: "Mobiles",price: 7000},
    { id: 4, name: "Product 4", catagory: "Laptops", price: 40000 },
    { id: 5, name: "Product 5", catagory: "Other", price: 55.55 },
  ];


  const filteredProducts = catagory
    ? products.filter((product) => product.catagory === catagory)
    : products;
  console.log(filteredProducts);
  return (
    <div style={{ display: "flex",justifyContent: "center",alignItems: "center",}}>
      <div style={{width: "90%",border: "2px solid red",borderRadius: "20px",}}>
        <h2 style={{ textAlign: "center", color: "DodgerBlue", margin: "20px 0" }}>
          Product List
        </h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "coral", color: "white" }}>
              <th style={tableCellStyle}>PID</th>
              <th style={tableCellStyle}>PName</th>
              <th style={tableCellStyle}>Catagory</th>
              <th style={tableCellStyle}>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr
                key={product.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#92a8d1" : "#d5f4e6",
                }}
              >
                <td style={tableCellStyle}>{product.id}</td>
                <td style={tableCellStyle}>{product.name}</td>
                <td style={tableCellStyle}>{product.catagory}</td>
                <td style={tableCellStyle}>${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsList;