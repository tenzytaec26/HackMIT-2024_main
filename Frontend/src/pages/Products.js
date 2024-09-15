// src/pages/Products.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  
`;
const RecommendedProductsTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch products
    const fetchProducts = async () => {
      // Replace this with your actual API call
      const mockProducts = [
        { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/200', rating: 4.5, reviewCount: 100, price: 19.99 },
        { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/200', rating: 4.2, reviewCount: 80, price: 24.99 },
        // Add more mock products as needed
      ];
      setProducts(mockProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <RecommendedProductsTitle>Recommended Products</RecommendedProductsTitle>
      <ProductsContainer>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </div>
  );
}

export default Products;