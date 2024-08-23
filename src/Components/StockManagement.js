// src/components/StockManagement.js



import React, { useState } from 'react';
import axios from 'axios';
import './StockManagement.css';

const StockManagement = () => {
    const [productID, setProductID] = useState('');
    const [stockChange, setStockChange] = useState('');
    const [operation, setOperation] = useState('add');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const stockChangeValue = parseFloat(stockChange);
        if (stockChangeValue < 1) {
            
            return;
        }

        try {
            const url = `http://localhost:8000/api/home/products/${operation === 'add' ? 'add-stock' : 'remove-stock'}/`;
            const response = await axios.post(url, {
                ProductID: productID,
                StockChange: stockChangeValue
            });
            console.log(response.data);
            alert('Stock updated successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to update stock');
        }
    };

    return (
        <div className="stock-management">
            <h3>Manage Stock</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Product ID" value={productID} onChange={(e) => setProductID(e.target.value)} />
                <input type="number" placeholder="Stock Change" value={stockChange} onChange={(e) => setStockChange(e.target.value)} min='1' />
                <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option value="add" >Add Stock</option>
                    <option value="remove">Remove Stock</option>
                </select>
                <button type="submit">Update Stock</button>
            </form>
        </div>
    );
};

export default StockManagement;
