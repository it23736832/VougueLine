import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { products, Product, ProductCategory } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductDetail } from '../components/ProductDetail';

type TabInfo = {
  id: ProductCategory;
  label: string;
};

const tabs: TabInfo[] = [
  { id: 'dresses', label: 'Dresses' },
  { id: 'crochet-tops', label: 'Crochet Tops' },
  { id: 'bags', label: 'Bags' },
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<ProductCategory>('crochet-tops');

  const filteredProducts = products.filter(product => product.category === activeTab);

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
      <div className="text-center mb-8 md:mb-12">
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

      {/* Category Tabs */}
      <div className="flex justify-center mb-12 md:mb-16">
        <div className="inline-flex gap-2 p-1.5 bg-[#F0ECE8] rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                  px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out
                  ${activeTab === tab.id
                  ? 'bg-white text-[#3D3D3D] shadow-sm'
                  : 'text-[#6B6B6B] hover:text-[#3D3D3D] hover:bg-white/50'
                }
                `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={product.id} className="animate-fadeInUp" style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <ProductCard product={product} onClick={() => setSelectedProduct(product)} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="text-[#8B8B8B] text-lg mb-2">No items in this category yet</p>
            <p className="text-[#A0A0A0] text-sm">Check back soon for new arrivals!</p>
          </div>
        )}
      </div>

      {/* Collection Note */}
      <div className="mt-16 md:mt-24 text-center">
        <p className="text-[#8B8B8B] text-sm">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} in {tabs.find(t => t.id === activeTab)?.label}
        </p>
      </div>
    </div>

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