import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
type ImageCarouselProps = {
  images: string[];
  productName: string;
};
const imageLabels = ['Product', 'Model', 'Back View', 'Detail'];
export function ImageCarousel({
  images,
  productName
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);
  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [images.length, isTransitioning]);
  const goToIndex = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);
  return <div className="relative w-full">
      {/* Main Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#F5F0EB] rounded-sm">
        {images.map((image, index) => <img key={index} src={image} alt={`${productName} - ${imageLabels[index] || `View ${index + 1}`}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`} />)}

        {/* Navigation Arrows */}
        <button onClick={goToPrev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-sm transition-all duration-200 hover:scale-105" aria-label="Previous image">
          <ChevronLeftIcon className="w-5 h-5 text-[#3D3D3D]" />
        </button>
        <button onClick={goToNext} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-sm transition-all duration-200 hover:scale-105" aria-label="Next image">
          <ChevronRightIcon className="w-5 h-5 text-[#3D3D3D]" />
        </button>

        {/* Image Label */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-white/90 rounded-full">
          <span className="text-xs font-medium text-[#3D3D3D] tracking-wide">
            {imageLabels[currentIndex] || `View ${currentIndex + 1}`}
          </span>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4" role="tablist">
        {images.map((_, index) => <button key={index} onClick={() => goToIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#C17A6F] w-6' : 'bg-[#D4CFC9] hover:bg-[#B8B2AB]'}`} role="tab" aria-selected={index === currentIndex} aria-label={`View ${imageLabels[index] || `image ${index + 1}`}`} />)}
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 mt-4">
        {images.map((image, index) => <button key={index} onClick={() => goToIndex(index)} className={`relative w-16 h-16 rounded-sm overflow-hidden transition-all duration-200 ${index === currentIndex ? 'ring-2 ring-[#C17A6F] ring-offset-2' : 'opacity-60 hover:opacity-100'}`} aria-label={`View ${imageLabels[index] || `image ${index + 1}`}`}>
            <img src={image} alt="" className="w-full h-full object-cover" />
          </button>)}
      </div>
    </div>;
}