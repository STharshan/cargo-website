import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Integer congue elit non semper laoreet sed lectus orci posuere nisl tempor sit felis ac mauris. Pellentesque urna urna. Integer vitae felis vel magna posuere vestibulum. Nam rutrum congue diam. Aliquam malesuada mauris etiam met. Curabitur laoreet convallis risus pellentesque bibendum.",
      author: "JOHN DEO",
      position: "Managing Director"
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      author: "JANE SMITH",
      position: "CEO"
    }
  ];

  const features = [
    "Dui ac hendrerit elementum quam ipsum auctor lorem",
    "Mauris vel magna a est lobortis volutpat",
    "Sed bibendum ornare lorem mauris feugiat suspendisse neque",
    "Nulla scelerisque dui hendrerit elementum quam"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left: Testimonial Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">TRUSTED CLIENTS</h2>
          <p className="text-gray-500 text-sm mb-8 uppercase tracking-wide">
            What our clients say about us
          </p>

          <div className="relative bg-white rounded-lg shadow pl-8 min-h-[200px] transition-all duration-300">
            {/* Decorative Quote Icon */}
            <div className="absolute top-6 left-6 w-8 h-8 bg-red-600 flex items-center justify-center rounded">
              <span className="text-white text-lg font-bold">"</span>
            </div>

            {/* Testimonial Content */}
            <div className="mt-4">
              <p className="text-gray-600 leading-relaxed pl-10 pt-5">
                {currentTestimonial.text}
              </p>
              <div className="text-center pl-72 pb-6 pt-5">
                <h4 className="font-bold text-gray-800">
                  {currentTestimonial.author}
                </h4>
                <p className="text-gray-500 text-sm">{currentTestimonial.position}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-8 h-8 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-8 h-8 bg-gray-300 hover:bg-gray-400 rounded flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Right: Features Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">WHY CHOOSE US</h2>
          <p className="text-gray-500 text-sm mb-8 uppercase tracking-wide">
            Our core strengths
          </p>

          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-700 hover:bg-gray-600 flex items-center justify-center rounded transition-colors">
                  <Plus className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-600 leading-relaxed pt-1">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
