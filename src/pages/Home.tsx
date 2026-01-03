import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
export function Home() {
  return <main className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#C17A6F]/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#E8DDD4]/50 blur-3xl" />

        {/* Brand Name */}
        <div className="text-center mb-12 animate-fadeIn">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.3em] text-[#C17A6F] mb-6">
            Handcrafted with Love
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#3D3D3D] tracking-wide mb-4">
            VogueLine
          </h1>
          <div className="w-24 h-px bg-[#C17A6F]/40 mx-auto mb-6" />
          <p className="text-lg md:text-xl text-[#6B6B6B] max-w-md mx-auto leading-relaxed">
            Artisanal crochet clothing for the modern soul
          </p>
        </div>

        {/* CTA Button */}
        <Link to="/products" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C17A6F] hover:bg-[#A8685E] text-white font-medium tracking-wide rounded-full transition-all duration-300 hover:gap-4">
          <span>Explore Collection</span>
          <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8B8B8B]">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#8B8B8B] to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#C17A6F] mb-6">
            Our Story
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3D3D3D] mb-8 leading-tight">
            Where tradition meets contemporary elegance
          </h2>
          <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
            Each VogueLine piece is meticulously handcrafted using time-honored
            crochet techniques, reimagined for the modern wardrobe. We believe
            in slow fashion—creating garments that are meant to be cherished,
            not discarded.
          </p>
          <p className="text-[#6B6B6B] text-lg leading-relaxed">
            Our collection celebrates natural fibers, thoughtful design, and the
            irreplaceable touch of human craftsmanship.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-24 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5F0EB] flex items-center justify-center">
                <span className="text-2xl">🧶</span>
              </div>
              <h3 className="font-serif text-xl text-[#3D3D3D] mb-3">
                Handcrafted
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Every stitch is made by hand, ensuring unique character in each
                piece.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5F0EB] flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-serif text-xl text-[#3D3D3D] mb-3">
                Sustainable
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                We use natural, ethically sourced fibers that are gentle on the
                planet.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5F0EB] flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-serif text-xl text-[#3D3D3D] mb-3">
                Timeless
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Designs that transcend trends, made to be worn and loved for
                years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#3D3D3D] mb-6">
            Discover the Collection
          </h2>
          <p className="text-[#6B6B6B] mb-8">
            Browse our curated selection of handcrafted crochet pieces.
          </p>
          <Link to="/products" className="inline-flex items-center gap-2 text-[#C17A6F] hover:text-[#A8685E] font-medium tracking-wide transition-colors duration-200">
            <span>View All Products</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#E8E4E0]">
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

      <style>{`
        @keyframes fadeIn {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </main>;
}