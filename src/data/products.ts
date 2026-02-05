export type SizeOption = {
  size: string;
  available: boolean;
};

export type ProductCategory = 'dresses' | 'crochet-tops' | 'bags';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  sizes: SizeOption[];
  colors: string[];
  material: string;
  images: string[];
  category: ProductCategory;
};

export const products: Product[] = [{
  id: 'VL001',
  name: 'Scarlet Sunset crop top',
  description: 'Designed with delicate shoulder straps, Perfect for summer days or layering under a jacket ',
  price: 1800,
  sizes: [
    { size: 'S', available: false },
    { size: 'M', available: true },
    { size: 'L', available: false }
  ],
  colors: ['Scarlet'],
  material: 'Cotton Yarn',
  images: [
    '/images/products/VL001_product.png',
    '/images/products/VL001_model_front.png',
    '/images/products/VL001_model_back.png',
    '/images/products/VL001_back.png'
  ],
  category: 'crochet-tops'
}, {
  id: 'VL002',
  name: 'Emerald Whisper Crochet Top',
  description: 'Featuring a high neckline and textured stitchwork, this piece provides both comfort and sophistication',
  price: 1800,
  sizes: [
    { size: 'XS', available: false },
    { size: 'S', available: false },
    { size: 'M', available: true },
    { size: 'L', available: false }
  ],
  colors: ['Green'],
  material: 'Cotton Yarn',
  images: ['/images/products/VL002_product.png',
    '/images/products/VL002_model_front.png',
    '/images/products/VL002_model_back.png',
    '/images/products/VL002_back.png'],
  category: 'crochet-tops'
}, {
  id: 'VL003',
  name: 'Sunrise Coast Halter top',
  description: 'Featuring a graceful halter neckline and a dreamy two-tone color palette',
  price: 1800,
  sizes: [
    { size: 'S', available: false },
    { size: 'M', available: true },
    { size: 'L', available: false }
  ],
  colors: ['Cream + Baby Blue'],
  material: 'Cotton Yarn',
  images: ['/images/products/VL003_product.png',
    '/images/products/VL003_model_front.png',
    '/images/products/VL003_model_back.png',
    '/images/products/VL003_back.png'],
  category: 'crochet-tops'
}, {
  id: 'VL004',
  name: 'Crochet Bag',
  description: 'soft, dreamy, and very boutique-friendly.',
  price: 2200,
  sizes: [
    { size: 'One Size', available: true }
  ],
  colors: ['Pastel Pink + Pastel Green'],
  material: 'Alpaca Silk Blend',
  images: ['/images/products/VL004_front.png'],
  category: 'bags'
}, {
  id: 'VL005',
  name: 'Elegance Dress',
  description: 'A timeless silhouette with delicate detailing, perfect for any special occasion.',
  price: 3500,
  sizes: [
    { size: '12', available: true },
    { size: '14', available: false },
    { size: '16', available: false }
  ],
  colors: ['Blush Pink', 'Ivory white', 'Black'],
  material: 'Cotton Blend',
  images: ['/images/products/VL005.png',
    '/images/products/VL005_2.png',
    '/images/products/VL005_3.png'
  ],
  category: 'dresses'
}, {
  id: 'VL006',
  name: 'Ivory Dream Dress',
  description: 'Flowing fabric meets modern design in this effortlessly elegant piece.',
  price: 3800,
  sizes: [
    { size: '12', available: true },
    { size: '14', available: false },
    { size: '16', available: false }
  ],
  colors: ['Ivory'],
  material: 'Silk Blend',
  images: ['/images/products/VL006.png'],
  category: 'dresses'
}, {
  id: 'VL007',
  name: 'Midnight Garden Dress',
  description: 'Bold and sophisticated, a statement piece for evening events.',
  price: 4200,
  sizes: [
    { size: '12', available: true },
    { size: '14', available: false },
    { size: '16', available: false }
  ],
  colors: ['Navy Blue'],
  material: 'Chiffon',
  images: ['/images/products/VL007.png'],
  category: 'dresses'
}, {
  id: 'VL008',
  name: 'Collared Dress',
  description: 'Soft and romantic, this dress brings nature-inspired elegance to your wardrobe.',
  price: 3600,
  sizes: [
    { size: '12', available: true },
    { size: '14', available: false },
    { size: '16', available: false }
  ],
  colors: ['Sage Green'],
  material: 'Linen Blend',
  images: ['/images/products/VL008.png'],
  category: 'dresses'
}, {
  id: 'VL009',
  name: 'Charm Dress',
  description: 'Classic charm with contemporary flair, ideal for day-to-night styling.',
  price: 3400,
  sizes: [
    { size: '12', available: true },
    { size: '14', available: false },
    { size: '16', available: false }
  ],
  colors: ['Dusty Rose'],
  material: 'Cotton Voile',
  images: ['/images/products/VL009.png'],
  category: 'dresses'
}, {
  id: 'VL010',
  name: 'Pearl White Luxe Dress',
  description: 'Luxurious simplicity meets refined craftsmanship in this stunning piece.',
  price: 4500,
  sizes: [
    { size: '12', available: true },
    { size: '14', available: false },
    { size: '16', available: false }
  ],
  colors: ['Pearl White'],
  material: 'Satin',
  images: ['/images/products/VL010.png'],
  category: 'dresses'
}

];