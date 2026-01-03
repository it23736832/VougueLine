import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { products, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductDetail } from '../components/ProductDetail';
export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  return <main className="min-h-screen bg-[#FAF8F5]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E8E4E0]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#3D3D3D] transition-colors duration-200">
            <ArrowLeftIcon className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </Link>
          <Link to="/" className="font-serif text-2xl text-[#3D3D3D]">
            VogueLine
          </Link>
          <div className="w-16" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Page Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#C17A6F] mb-4">
            Our Collection
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#3D3D3D] mb-4">
            Handcrafted Pieces
          </h1>
          <p className="text-[#6B6B6B] max-w-lg mx-auto">
            Each piece is lovingly made by hand. Click on any item to see more
            details and views.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => <div key={product.id} className="animate-fadeInUp" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <ProductCard product={product} onClick={() => setSelectedProduct(product)} />
            </div>)}
        </div>

        {/* Collection Note */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-[#8B8B8B] text-sm">
            Showing {products.length} pieces from our current collection
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#E8E4E0] mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-serif text-2xl text-[#3D3D3D]">VogueLine</div>
          <p className="text-sm text-[#8B8B8B]">
            © {new Date().getFullYear()} VogueLine. All rights reserved.
          </p>
          <a href="mailto:hello@vogueline.com" className="text-sm text-[#6B6B6B] hover:text-[#C17A6F] transition-colors duration-200">
            hello@vogueline.com
          </a>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />}

      <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </main>;
}