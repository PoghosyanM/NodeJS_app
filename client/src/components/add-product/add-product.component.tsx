import React from "react";

const AddProduct = () => {
  return (
    <main>
      <form action="/add-product" method="POST">
        <input type="text" name="title" />
        <button type="submit">Add Product</button>
      </form>
    </main>
  );
};

export default AddProduct;
