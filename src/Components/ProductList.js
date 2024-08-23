// src/components/ProductList.js
// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/home/products/');
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id) => {

        const isConfirmed = window.confirm("Are you sure you want to delete this product?");
        if (!isConfirmed) return;

        try {
            await axios.delete('http://localhost:8000/api/home/products/', {
                data: { id } // DELETE request with data
            });
            setProducts(products.filter(product => product.id !== id));
            alert('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete product');
        }
    };

    return (
        <div className="product-list">
            <h3>Product List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Created Date</th>
                        <th>Updated Date</th>
                        
                        <th>HSN CODE</th>
                        <th>Is Favourite</th>
                        <th>Total Stock</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.ProductID}</td>
                            <td>{product.ProductCode}</td>
                            <td>{product.ProductName}</td>
                            <td>{new Date(product.CreatedDate).toLocaleDateString()}</td>
                            <td>{product.UpdatedDate ? new Date(product.UpdatedDate).toLocaleDateString() : 'N/A'}</td>

                            
                            <td>{product.HSNCode}</td>
                            <td>{product.IsFavourite ? 'Yes' : 'No'}</td>
                            <td>{Math.round(product.TotalStock)}</td>


                            <td>
                                <button className='bg-danger' onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;


