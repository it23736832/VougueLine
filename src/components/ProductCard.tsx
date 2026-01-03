import React from 'react';
import { Product } from '../data/products';
type ProductCardProps = {
  product: Product;
  onClick: () => void;
};
export function ProductCard({
  product,
  onClick
}: ProductCardProps) {
  return <button onClick={onClick} className="group text-left w-full bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1" aria-label={`View details for ${product.name}`}>
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-[#F5F0EB]">
        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {/* Product Number Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 rounded-full">
          <span className="text-xs font-mono tracking-wider text-[#6B6B6B]">
            {product.id}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-serif text-lg text-[#3D3D3D] mb-1.5 tracking-wide">
          {product.name}
        </h3>
        <p className="text-sm text-[#6B6B6B] mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-[#8B8B8B] bg-[#F5F2EF] px-2.5 py-1 rounded-full">
            {product.size}
          </span>
          <span className="text-xs text-[#8B8B8B] bg-[#F5F2EF] px-2.5 py-1 rounded-full">
            {product.colors.length} colors
          </span>
        </div>
      </div>
    </button>;
}