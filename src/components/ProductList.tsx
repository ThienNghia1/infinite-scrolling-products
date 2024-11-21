import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import SearchInput from './SearchInput';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = useCallback(async (reset = false) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        query
          ? `https://dummyjson.com/products/search?q=${query}&limit=20&skip=${(page - 1) * 20}`
          : `https://dummyjson.com/products?limit=20&skip=${(page - 1) * 20}`
      );

      const newProducts = response.data.products || [];
      setProducts((prev) => (reset ? newProducts : [...prev, ...newProducts]));
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page, query]);

  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    if (query) {
      setPage(1);
      fetchProducts(true);
    }
  }, [query]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <SearchInput value={query} onChange={setQuery} />
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} {...product} />
        ))}
      </div>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default ProductList;
