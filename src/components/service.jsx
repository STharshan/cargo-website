import { useState } from 'react';
import { ArrowRight, Plane, Ship, Truck, Package } from 'lucide-react';
import cargo from '../image/cargo.jpg';
import plane from '../image/plane.jpg';
import science from '../image/science.jpg';
import factory from '../image/factory.jpg';

export default function Service() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const solutions = [
    {
      id: 1,
      title: "Air Freight Services",
      description: "We understand how difficult it can be to find reliable air freight services. We make it easier.",
      image: cargo,
      icon: <Ship className="w-8 h-8 text-white" />
    },
    {
      id: 2,
      title: "Drone Services",
      description: "Tailored drone logistics for industry-specific challenges, backed by years of expertise.",
      image: plane,
      icon: <Plane className="w-8 h-8 text-white" />
    },
    {
      id: 3,
      title: "Ground Transport",
      description: "Efficient land transportation across multiple destinations, keeping your cargo secure.",
      image: science,
      icon: <Truck className="w-8 h-8 text-white" />
    },
    {
      id: 4,
      title: "Warehouse Solutions",
      description: "Modern storage facilities and real-time inventory systems to streamline your supply chain.",
      image: factory,
      icon: <Package className="w-8 h-8 text-white" />
    }
  ];

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-white py-16 px-8" id="tracking">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Real Solution, Real Fast!
          </div>
          <h2 className="text-4xl font-bold text-gray-800">
            Best Global Logistics Solutions.
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {solutions.slice(currentSlide * 2, currentSlide * 2 + 2).map((solution) => (
            <div key={solution.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl h-64">
                {/* Background Image */}
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-800/80 to-teal-900/60 z-10"></div>

                {/* Overlay Content */}
                <div className="relative z-20 h-full p-8 flex flex-col justify-between text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-gray-200 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    {/* Read More Button */}
                    <button className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-black/50 transition-colors">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <ArrowRight size={12} className="text-black" />
                      </div>
                      <span className="text-sm font-medium">Read More</span>
                    </button>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                      {solution.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left CTA */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">
              Logistic & Transport Solutions Save Your Time.
            </span>
            <button className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group">
              <span>Find Your Solution</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-3">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index
                  ? 'bg-green-500'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
