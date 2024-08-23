// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Product Inventory System</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create-product">Create Product</Link></li>
                <li><Link to="/product-list">Product List</Link></li>
                <li><Link to="/stock-management">Stock Management</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
