export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-orange-500">ThronRider</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Born from a legacy of excellence and engineering mastery, ThronRider represents the pinnacle 
                of motorcycle craftsmanship. We don't just build motorcycles; we create royal steeds that 
                carry the dreams and aspirations of riders across the globe.
              </p>
              <p>
                Every ThronRider is meticulously crafted with precision engineering, combining time-tested 
                reliability with cutting-edge innovation. Our commitment to quality ensures that each ride 
                is not just a journey, but a statement of power, elegance, and freedom.
              </p>
              <p>
                From the bustling streets of Mumbai to the serene highways of Kerala, ThronRider motorcycles 
                have become synonymous with adventure, reliability, and the pure joy of riding. Join the 
                royal legacy and experience what it means to truly rule the road.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl w-64 h-64 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img 
              src="https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="ThronRider Heritage" 
              className="relative z-10 w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">120+</div>
              <div className="text-gray-300">Years of Heritage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">50L+</div>
              <div className="text-gray-300">Satisfied Riders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">60+</div>
              <div className="text-gray-300">Countries Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}