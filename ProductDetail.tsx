'use client';

import { useState } from 'react';
import { ArrowLeft, Star, Heart, Share2 } from 'lucide-react';

interface ProductDetailProps {
  product: any;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(product.colorImages[selectedColor] || product.image);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setSelectedImage(product.colorImages[color] || product.image);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-300 hover:text-white mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors">
                  <Heart size={20} />
                </button>
                <button className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.colors.map((color: string) => (
                <img 
                  key={color}
                  src={product.colorImages[color] || product.image}
                  alt={`${product.name} in ${color}`}
                  className={`w-full h-20 object-cover rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedColor === color ? 'ring-2 ring-orange-500' : 'hover:opacity-75'
                  }`}
                  onClick={() => handleColorChange(color)}
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-orange-500">{product.price}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-400">(4.8/5)</span>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Choose Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color: string) => (
                  <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedColor === color 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="bg-gray-900 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-white font-medium">{value as string}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition-colors duration-200">
                Book Test Ride
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-900 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-3">What's Included</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 3 Years Comprehensive Warranty</li>
                <li>• Free First Service</li>
                <li>• Roadside Assistance</li>
                <li>• Genuine Accessories</li>
                <li>• Insurance Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}