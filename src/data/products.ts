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
    '/src/assets/images/products/VL001_product.png',
    '/src/assets/images/products/VL001_model_front.png',
    '/src/assets/images/products/VL001_model_back.png',
    '/src/assets/images/products/VL001_back.png'
  ]
}, {
  id: 'VL002',
  name: 'Ocean Breeze Top',
  description: 'Lightweight summer top with intricate wave pattern and adjustable tie straps.',
  size: 'XS / S / M / L',
  colors: ['Seafoam', 'White', 'Dusty Blue'],
  material: 'Bamboo Blend Yarn',
  images: ['https://placehold.co/800x800/D4E5E8/6B8B8D?text=VL002+Product', 'https://placehold.co/800x800/C8DDE0/6B8B8D?text=VL002+Model', 'https://placehold.co/800x800/D0E2E5/6B8B8D?text=VL002+Back', 'https://placehold.co/800x800/CCE0E3/6B8B8D?text=VL002+Detail']
}, {
  id: 'VL003',
  name: 'Meadow Vest',
  description: 'Cropped vest featuring botanical-inspired motifs and mother-of-pearl buttons.',
  size: 'S / M / L',
  colors: ['Sage', 'Cream', 'Blush'],
  material: 'Merino Wool Blend',
  images: ['https://placehold.co/800x800/E5E8D4/7D8B6B?text=VL003+Product', 'https://placehold.co/800x800/DDE0C8/7D8B6B?text=VL003+Model', 'https://placehold.co/800x800/E2E5D0/7D8B6B?text=VL003+Back', 'https://placehold.co/800x800/E0E3CC/7D8B6B?text=VL003+Detail']
}, {
  id: 'VL004',
  name: 'Dusk Shawl',
  description: 'Oversized triangular shawl with gradient color work and delicate fringe detail.',
  size: 'One Size',
  colors: ['Mauve to Plum', 'Peach to Rose', 'Grey to Charcoal'],
  material: 'Alpaca Silk Blend',
  images: ['https://placehold.co/800x800/E8D4E5/8B6B87?text=VL004+Product', 'https://placehold.co/800x800/E0C8DD/8B6B87?text=VL004+Model', 'https://placehold.co/800x800/E5D0E2/8B6B87?text=VL004+Back', 'https://placehold.co/800x800/E3CCE0/8B6B87?text=VL004+Detail']
}, {
  id: 'VL005',
  name: 'Terra Midi Skirt',
  description: 'A-line midi skirt with textured bobble stitch and elastic waistband for comfort.',
  size: 'XS / S / M / L / XL',
  colors: ['Rust', 'Oatmeal', 'Forest'],
  material: '100% Cotton',
  images: ['https://placehold.co/800x800/E5D8D4/8B7368?text=VL005+Product', 'https://placehold.co/800x800/DDD0C8/8B7368?text=VL005+Model', 'https://placehold.co/800x800/E2DAD0/8B7368?text=VL005+Back', 'https://placehold.co/800x800/E0D5CC/8B7368?text=VL005+Detail']
}, {
  id: 'VL006',
  name: 'Blossom Crop Top',
  description: 'Fitted crop top with floral granny square pattern and scalloped hem.',
  size: 'XS / S / M',
  colors: ['Multi Pastel', 'Neutral Tones', 'Warm Sunset'],
  material: 'Pima Cotton',
  images: ['https://placehold.co/800x800/F5E0D8/8B7570?text=VL006+Product', 'https://placehold.co/800x800/EDD8D0/8B7570?text=VL006+Model', 'https://placehold.co/800x800/F0DCD4/8B7570?text=VL006+Back', 'https://placehold.co/800x800/EED9D2/8B7570?text=VL006+Detail']
}, {
  id: 'VL007',
  name: 'Willow Maxi Dress',
  description: 'Flowing maxi dress with empire waist and cascading leaf pattern throughout.',
  size: 'S / M / L',
  colors: ['Ivory', 'Dusty Rose', 'Sage'],
  material: 'Linen Cotton Blend',
  images: ['https://placehold.co/800x800/F5F0E8/8B8575?text=VL007+Product', 'https://placehold.co/800x800/EDE8E0/8B8575?text=VL007+Model', 'https://placehold.co/800x800/F0EBE4/8B8575?text=VL007+Back', 'https://placehold.co/800x800/EEE9E2/8B8575?text=VL007+Detail']
}, {
  id: 'VL008',
  name: 'Ember Pullover',
  description: 'Cozy oversized pullover with cable knit detail and ribbed cuffs.',
  size: 'S / M / L / XL',
  colors: ['Burnt Orange', 'Cream', 'Charcoal'],
  material: 'Wool Acrylic Blend',
  images: ['https://placehold.co/800x800/E8D5D0/8B6860?text=VL008+Product', 'https://placehold.co/800x800/E0CDC8/8B6860?text=VL008+Model', 'https://placehold.co/800x800/E5D2CC/8B6860?text=VL008+Back', 'https://placehold.co/800x800/E3CFCA/8B6860?text=VL008+Detail']
}];