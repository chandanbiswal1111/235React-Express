const express = require('express');
const app = express();


app.get('/', (req, res) => {
  const productId = 10256;
  const productName = 'LG Printer';
  const unitPrice = 2500;
  const quantity = 3;
  const totalAmount = unitPrice * quantity;

  const response= `
    <h3 align='center'>Product Details</h3>
    <table style="border-collapse: collapse; width: 50%; margin: auto; border: 1px solid black;">
      <tr>
        <td style="border: 1px solid black; padding: 8px;">Product Id</td>
        <td style="border: 1px solid black; padding: 8px;">${productId}</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">Product Name</td>
        <td style="border: 1px solid black; padding: 8px;">${productName}</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">Unit Price</td>
        <td style="border: 1px solid black; padding: 8px;">${unitPrice}</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">Quantity</td>
        <td style="border: 1px solid black; padding: 8px;">${quantity}</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">Total Amount</td>
        <td style="border: 1px solid black; padding: 8px;">${totalAmount}</td>
      </tr>
    </table>
  `;

  res.send(response);
});
var server = app.listen(3005, function(){});
console.log("Express Server Application is started.Browser at the URL: http://localhost:3005");