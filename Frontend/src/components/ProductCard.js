// src/components/ProductCard.js
import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const Card = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: var(--primary);
`;

function ProductCard({ product }) {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductRating>
        <FaStar color="#FFD700" />
        <span>{product.rating} ({product.reviewCount} reviews)</span>
      </ProductRating>
      <ProductPrice>${product.price}</ProductPrice>
    </Card>
  );
}

export default ProductCard;