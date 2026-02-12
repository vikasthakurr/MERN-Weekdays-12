import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../product-api/products";

const Home = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2">
          Our Products
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our curated collection of premium products across electronics,
          fashion, home, and beauty.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
