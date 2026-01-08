export type SizeOption = {
  size: string;
  available: boolean;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  sizes: SizeOption[];
  colors: string[];
  material: string;
  images: string[];
};
export const products: Product[] = [{
  id: 'VL001',
  name: 'Scarlet Sunset crop top',
  description: 'Designed with delicate shoulder straps, Perfect for summer days or layering under a jacket ',
  sizes: [
    { size: 'S', available: true },
    { size: 'M', available: false },
    { size: 'L', available: false }
  ],
  colors: ['Scarlet'],
  material: '100% Organic Cotton',
  images: [
    '/images/products/VL001_product.png',
    '/images/products/VL001_model_front.png',
    '/images/products/VL001_model_back.png',
    '/images/products/VL001_back.png'
  ]
}, {
  id: 'VL002',
  name: 'Emerald Whisper Crochet Top',
  description: 'Featuring a high neckline and textured stitchwork, this piece provides both comfort and sophistication',
  sizes: [
    { size: 'XS', available: false },
    { size: 'S', available: true },
    { size: 'M', available: false },
    { size: 'L', available: false }
  ],
  colors: ['Green'],
  material: 'Bamboo Blend Yarn',
  images: ['/images/products/VL002_product.png',
    '/images/products/VL002_model_front.png',
    '/images/products/VL002_model_back.png',
    '/images/products/VL002_back.png']
}, {
  id: 'VL003',
  name: 'Sunrise Coast Halter top',
  description: 'Featuring a graceful halter neckline and a dreamy two-tone color palette',
  sizes: [
    { size: 'S', available: true },
    { size: 'M', available: false },
    { size: 'L', available: false }
  ],
  colors: ['Cream + Baby Blue'],
  material: 'Merino Wool Blend',
  images: ['/images/products/VL003_product.png',
    '/images/products/VL003_model_front.png',
    '/images/products/VL003_model_back.png',
    '/images/products/VL003_back.png']
}, {
  id: 'VL004',
  name: 'Crochet Bag',
  description: 'soft, dreamy, and very boutique-friendly.',
  sizes: [
    { size: 'One Size', available: true }
  ],
  colors: ['Pastel Pink + Pastel Green'],
  material: 'Alpaca Silk Blend',
  images: ['/images/products/VL004_front.png']
}

];