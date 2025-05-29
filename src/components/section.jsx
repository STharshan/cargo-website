import React from 'react';
import { ArrowRight } from 'lucide-react';
import men from "../image/men.jpg";
import factory from "../image/factory.jpg";

export default function Section() {
  return (
    <section className="bg-gray-50 py-16 px-8" id="pages">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-96">
              {/* Image 1 - Hard Hat */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={men}
                  alt="Construction worker wearing a hard hat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-16 h-16">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-teal-600 transform rotate-45 -translate-x-8 -translate-y-8"></div>
                </div>
              </div>

              {/* Image 2 - Clipboard */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={factory}
                  alt="Worker holding a clipboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat Card Overlay */}
              <div className="col-span-2 relative">
                <div className="absolute -bottom-4 left-4 right-4">
                  <div className="bg-orange-400 text-white p-6 rounded-lg shadow-lg text-center">
                    <div className="text-3xl font-bold mb-1">15,350+</div>
                    <p className="text-sm font-medium opacity-90">Clients Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <header>
              <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                TransMax Logistics
                <br />
                Around <span className="text-orange-400">the World</span>
              </h2>
            </header>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Transmax is the world's leading global logistics provider — we support industry and trade in the worldwide exchange of goods through land transport.
              </p>
              <p>
                Our value-added services ensure the continuous flow of goods and keep supply chains lean and optimized for success.
              </p>
            </div>

            {/* Rounded Button */}
            <div className="pt-4">
              <button className="group flex items-center gap-3 bg-teal-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-teal-700 transition-colors">
                <span>MORE ABOUT US</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
