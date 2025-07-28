interface HeroProps {
  onTestRideClick: () => void;
}

export default function Hero({ onTestRideClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-black mb-2 bg-gradient-to-r from-white via-gray-300 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
            ThroneRider
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the throne of power. Where legacy meets innovation, and every ride becomes a royal journey.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={onTestRideClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Book Test Ride
          </button>
          <button 
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-gray-600 hover:border-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-orange-500/10"
          >
            Explore Collection
          </button>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-orange-500/20 to-transparent rounded-full blur-3xl w-96 h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <img 
            src="https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="ThronRider Motorcycle" 
            className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}