export type Product = {
  id: string;
  name: string;
  description: string;
  size: string;
  colors: string[];
  material: string;
  images: string[];
};
export const products: Product[] = [{
  id: 'VL001',
  name: 'Sunset Cardigan',
  description: 'A flowing open-front cardigan with delicate shell stitch pattern, perfect for layering.',
  size: 'S / M / L',
  colors: ['Terracotta', 'Sand', 'Ivory'],
  material: '100% Organic Cotton',
  images: [
    '/images/products/VL001_product.png',
    '/images/products/VL001_model_front.png',
    '/images/products/VL001_model_back.png',
    '/images/products/VL001_back.png'
  ]
}, {
  id: 'VL002',
  name: 'Ocean Breeze Top',
  description: 'Lightweight summer top with intricate wave pattern and adjustable tie straps.',
  size: 'XS / S / M / L',
  colors: ['Seafoam', 'White', 'Dusty Blue'],
  material: 'Bamboo Blend Yarn',
  images: ['/images/products/VL002_product.png',
    '/images/products/VL002_model_front.png',
    '/images/products/VL002_model_back.png',
    '/images/products/VL002_back.png']
}, {
  id: 'VL003',
  name: 'Meadow Vest',
  description: 'Cropped vest featuring botanical-inspired motifs and mother-of-pearl buttons.',
  size: 'S / M / L',
  colors: ['Sage', 'Cream', 'Blush'],
  material: 'Merino Wool Blend',
  images: ['/images/products/VL003_product.png',
    '/images/products/VL003_model_front.png',
    '/images/products/VL003_model_back.png',
    '/images/products/VL003_back.png']
}, {
  id: 'VL004',
  name: 'Dusk Shawl',
  description: 'Oversized triangular shawl with gradient color work and delicate fringe detail.',
  size: 'One Size',
  colors: ['Mauve to Plum', 'Peach to Rose', 'Grey to Charcoal'],
  material: 'Alpaca Silk Blend',
  images: ['/images/products/VL004_front.png']
}

];