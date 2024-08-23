// src/components/CreateProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import './CreateProduct.css';

const CreateProduct = () => {
    const [productData, setProductData] = useState({
        ProductID: '',
        ProductCode: '',
        ProductName: '',
        CreatedUser: '',  
        IsFavourite: true,
        Active: true,
        HSNCode: '',
        TotalStock: '',
    });
    

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProductData({
            ...productData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/home/products/', productData);
            console.log(response.data);
            alert('Product created successfully');

        } catch (error) {
            console.error(error);
            alert('Failed to create product');
        }
    };

    return (
        <div className="create-product">
            <h3>Create New Product</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="ProductID" placeholder="Product ID" onChange={handleChange}  />
                <input type="text" name="ProductCode" placeholder="Product Code" onChange={handleChange}  />
                <input type="text" name="ProductName" placeholder="Product Name" onChange={handleChange}  />
                <input type="number" name="CreatedUser" placeholder="Created User ID" onChange={handleChange} min='1' />
                <input type="text" name="HSNCode" placeholder="HSN Code" onChange={handleChange} />
                <input type="number" name="TotalStock" placeholder="Total Stock" step="1" onChange={handleChange}  />
                <label>
                    <input
                        type="checkbox"
                        name="IsFavourite"
                        checked={productData.IsFavourite}
                        onChange={handleChange}
                    />
                    Is Favourite
                </label>

                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
