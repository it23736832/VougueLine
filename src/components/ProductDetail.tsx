import React, { useEffect, useRef } from 'react';
import { XIcon } from 'lucide-react';
import { Product } from '../data/products';
import { ImageCarousel } from './ImageCarousel';
type ProductDetailProps = {
  product: Product;
  onClose: () => void;
};
export function ProductDetail({
  product,
  onClose
}: ProductDetailProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    // Focus the close button when modal opens
    closeButtonRef.current?.focus();
    // Handle escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-sm animate-fadeIn" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-labelledby="product-title">
    <div ref={modalRef} className="relative w-full max-w-5xl max-h-[90vh] bg-[#FAF8F5] rounded-sm shadow-2xl overflow-hidden animate-slideUp">
      {/* Close Button */}
      <button ref={closeButtonRef} onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-sm transition-all duration-200 hover:scale-105" aria-label="Close product details">
        <XIcon className="w-5 h-5 text-[#3D3D3D]" />
      </button>

      <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto md:overflow-hidden">
        {/* Image Carousel Section */}
        <div className="w-full md:w-3/5 p-6 md:p-8 md:overflow-y-auto">
          <ImageCarousel images={product.images} productName={product.name} />
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-2/5 p-6 md:p-10 md:pl-8 md:overflow-y-auto bg-white/50">
          {/* Product Number */}
          <span className="inline-block font-mono text-sm tracking-wider text-[#C17A6F] mb-3">
            {product.id}
          </span>

          {/* Product Name */}
          <h2 id="product-title" className="font-serif text-3xl md:text-4xl text-[#3D3D3D] mb-2 tracking-wide leading-tight">
            {product.name}
          </h2>

          {/* Price */}
          <p className="text-2xl font-semibold text-[#C17A6F] mb-4">
            Rs. {product.price.toLocaleString()}
          </p>

          {/* Description */}
          <p className="text-[#5A5A5A] leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Details */}
          <div className="space-y-6">
            {/* Size */}
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-[#8B8B8B] mb-2">
                Available Sizes
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sizeOption, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 text-sm rounded-full transition-all ${sizeOption.available
                      ? 'bg-[#C17A6F] text-white font-medium'
                      : 'bg-[#F0EDEA] text-[#B0B0B0] line-through'
                      }`}
                  >
                    {sizeOption.size}
                    {!sizeOption.available && (
                      <span className="ml-1 text-xs">(Sold out)</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-[#8B8B8B] mb-2">
                Colors
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => <span key={index} className="px-3 py-1.5 bg-[#F5F2EF] text-[#5A5A5A] text-sm rounded-full">
                  {color}
                </span>)}
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-[#8B8B8B] mb-2">
                Material
              </h3>
              <p className="text-[#3D3D3D]">{product.material}</p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-10 pt-6 border-t border-[#E8E4E0]">
            <p className="text-sm text-[#8B8B8B] mb-3">
              Interested in this piece?
            </p>
            <a href="https://wa.me/94755852632?text=Hi%2C%20I'm%20interested%20in%20the%20VogueLine%20product" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-[#C17A6F] hover:bg-[#A8685E] text-white text-sm font-medium tracking-wide rounded-full transition-colors duration-200">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>

    <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
  </div>;
}