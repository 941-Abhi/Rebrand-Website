'use client';

import { useState } from 'react';

interface Motorcycle {
  id: number;
  name: string;
  price: string;
  image: string;
  colors: string[];
  colorImages: { [color: string]: string };
  specs: {
    engine: string;
    power: string;
    torque: string;
    weight: string;
    tankCapacity: string;
    transmission: string;
    fuelType: string;
    mileage: string;
  };
  description: string;
}

const motorcycles: Motorcycle[] = [
  {
    id: 1,
    name: 'ThronRider Classic 350',
    price: '₹2,15,000',
    image: '/photos/bike1_green.jpg',
    colors: ['Green', 'White', 'Cement'],
    colorImages: {
      Green: '/photos/bike1_green.jpg',
      White: '/photos/bike1_white.jpg',
      Cement: '/photos/bike1_cement.jpg',
    },
    specs: {
      engine: '349cc Single Cylinder',
      power: '20.2 bhp @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      weight: '195 kg',
      tankCapacity: '13.5 L',
      transmission: '5-Speed Manual',
      fuelType: 'Petrol',
      mileage: '35-40 kmpl'
    },
    description: 'The perfect blend of classic design and modern engineering. Built for those who appreciate timeless elegance with contemporary performance.'
  },
  {
    id: 2,
    name: 'ThronRider Interceptor 650',
    price: '₹3,25,000',
    image: '/photos/bike2_red.jpg',
    colors: ['Red', 'White', 'Gold'],
    colorImages: {
      Red: '/photos/bike2_red.jpg',
      White: '/photos/bike2_white.jpg',
      Gold: '/photos/bike2_gold.jpg',
    },
    specs: {
      engine: '648cc Parallel Twin',
      power: '47 bhp @ 7250 rpm',
      torque: '52 Nm @ 5250 rpm',
      weight: '213 kg',
      tankCapacity: '13.7 L',
      transmission: '6-Speed Manual',
      fuelType: 'Petrol',
      mileage: '25-30 kmpl'
    },
    description: 'A twin-cylinder powerhouse designed for the highway. Experience the thrill of open roads with unmatched power and comfort.'
  },
  {
    id: 3,
    name: 'ThronRider Himalayan 450',
    price: '₹2,85,000',
    image: '/photos/bike3_red.jpg',
    colors: ['Red', 'Green', 'Silver'],
    colorImages: {
      Red: '/photos/bike3_red.jpg',
      Green: '/photos/bike3_green.jpg',
      Silver: '/photos/bike3_silver.jpg',
    },
    specs: {
      engine: '452cc Single Cylinder',
      power: '40 bhp @ 8000 rpm',
      torque: '40 Nm @ 5500 rpm',
      weight: '196 kg',
      tankCapacity: '17 L',
      transmission: '6-Speed Manual',
      fuelType: 'Petrol',
      mileage: '30-35 kmpl'
    },
    description: 'Built for adventure seekers. Conquer any terrain with confidence and discover the unexplored paths that await you.'
  },
  {
    id: 4,
    name: 'ThronRider Continental GT 650',
    price: '₹3,45,000',
    image: '/photos/bike4_white.jpg',
    colors: ['White', 'Blue', 'Black'],
    colorImages: {
      White: '/photos/bike4_white.jpg',
      Blue: '/photos/bike4_blue.jpg',
      Black: '/photos/bike4_black.jpg',
    },
    specs: {
      engine: '648cc Parallel Twin',
      power: '47 bhp @ 7250 rpm',
      torque: '52 Nm @ 5250 rpm',
      weight: '198 kg',
      tankCapacity: '12.5 L',
      transmission: '6-Speed Manual',
      fuelType: 'Petrol',
      mileage: '22-28 kmpl'
    },
    description: 'A café racer that embodies speed and style. Designed for those who live life in the fast lane with uncompromising elegance.'
  },
  {
    id: 5,
    name: 'ThronRider Military Edition',
    price: '₹3,75,000',
    image: '/photos/bike5_silver.jpg',
    colors: ['Silver', 'Military', 'Black'],
    colorImages: {
      Silver: '/photos/bike5_silver.jpg',
      Military: '/photos/bike5_military.jpg',
      Black: '/photos/bike5_black.jpg',
    },
    specs: {
      engine: '500cc Single Cylinder',
      power: '27.2 bhp @ 5250 rpm',
      torque: '41.3 Nm @ 4000 rpm',
      weight: '192 kg',
      tankCapacity: '14.5 L',
      transmission: '5-Speed Manual',
      fuelType: 'Petrol',
      mileage: '32-37 kmpl'
    },
    description: 'A special edition for those who want to stand out. Rugged, reliable, and ready for any mission.'
  }
];

interface ProductSectionProps {
  onProductClick: (product: any) => void;
}

export default function ProductSection({ onProductClick }: ProductSectionProps) {
  const [selectedColors, setSelectedColors] = useState<{[key: number]: string}>({});

  const handleColorChange = (productId: number, color: string) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: color
    }));
  };

  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-orange-500">Collection</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the perfect ThronRider for your journey. Each motorcycle is crafted with precision and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {motorcycles.map((bike) => {
            const selectedColor = selectedColors[bike.id] || bike.colors[0];
            const currentImage = bike.colorImages[selectedColor] || bike.image;
            
            return (
              <div key={bike.id} className="bg-black/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800">
                <div className="relative group cursor-pointer" onClick={() => onProductClick(bike)}>
                  <img 
                    src={currentImage} 
                    alt={bike.name} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {bike.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{bike.name}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{bike.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Available Colors:</p>
                    <div className="flex space-x-2">
                      {bike.colors.map((color) => (
                        <button
                          key={color}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleColorChange(bike.id, color);
                          }}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                            selectedColor === color 
                              ? 'bg-orange-500 text-white' 
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-4">
                    <div>
                      <span className="text-gray-400">Engine:</span> {bike.specs.engine}
                    </div>
                    <div>
                      <span className="text-gray-400">Power:</span> {bike.specs.power}
                    </div>
                  </div>

                  <button 
                    onClick={() => onProductClick(bike)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}