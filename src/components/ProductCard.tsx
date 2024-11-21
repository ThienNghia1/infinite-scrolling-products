import React from 'react';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, thumbnail }) => (
  <div className="product-card">
    <img src={thumbnail} alt={title} />
    <h3>{title}</h3>
    <p>${price}</p>
  </div>
);

export default ProductCard;
