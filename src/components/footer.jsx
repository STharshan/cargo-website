import React, { useState } from 'react';
import { ChevronRight, Phone, MapPin, Facebook, Twitter, Instagram, Dribbble, Rss, Copyright } from 'lucide-react';
import men from "../image/men.jpg"
import work from "../image/work.jpg";
import art from "../image/art.jpg";
import car from "../image/car.jpg";
import chip from "../image/chip.jpg";

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="bg-slate-600 text-white">
      {/* Newsletter Section */}
      <div className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">Weekly Newsletter</h2>
              <p className="text-slate-300">
                There are many variations of passages of lorem ipsum available.
              </p>
            </div>
            <div className="flex gap-2 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter Your Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-md text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 bg-white focus:ring-orange-400"
              />
              <button
                onClick={handleSubscribe}
                className="bg-orange-400 hover:bg-orange-500 px-6 py-3 rounded-md font-semibold transition-colors cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-8 py-12 bg-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* About Us */}
            <div>
              <h3 className="text-xl font-semibold mb-6">About Us</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone size={16} />
                  <span>(+94) 11 434 7575</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin size={16} />
                  <span>42 Lily Ave, Colombo 00600</span>
                </div>
              </div>
            </div>

            {/* Latest News */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Latest News</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-orange-400 pl-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  </p>
                  <span className="text-slate-400 text-xs">5 Minutes Ago</span>
                </div>
                <div className="border-l-2 border-orange-400 pl-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  </p>
                  <span className="text-slate-400 text-xs">5 Minutes Ago</span>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Customer Service</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                    <ChevronRight size={14} />
                    Support Forums
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                    <ChevronRight size={14} />
                    Communication
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                    <ChevronRight size={14} />
                    FAQS
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                    <ChevronRight size={14} />
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                    <ChevronRight size={14} />
                    Rules & Condition
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2">
                    <ChevronRight size={14} />
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Gallery */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Customer Service</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square bg-slate-600 rounded overflow-hidden">
                  <img 
                    src={men} 
                    alt="Gallery item" 
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
                <div className="aspect-square bg-slate-600 rounded overflow-hidden">
                  <img 
                    src={work} 
                    alt="Gallery item" 
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
                <div className="aspect-square bg-slate-600 rounded overflow-hidden">
                  <img 
                    src={art} 
                    alt="Gallery item" 
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
                <div className="aspect-square bg-slate-600 rounded overflow-hidden">
                  <img 
                    src={car} 
                    alt="Gallery item" 
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
                <div className="aspect-square bg-slate-600 rounded overflow-hidden">
                  <img 
                    src={chip}
                    alt="Gallery item" 
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
                <div className="aspect-square bg-slate-600 rounded overflow-hidden">
                  <img 
                    src={men}
                    alt="Gallery item" 
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-8 py-6 bg-slate-800 border-t border-slate-600">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            Copyright <Copyright size={14} className="inline mr-1" />
            2021 All Rights Reserved. Site By Xired
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
              <Dribbble size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors">
              <Rss size={20} />
            </a>
          </div>
          {/* Orange scroll to top button */}
          <button className="bg-orange-400 hover:bg-orange-500 p-2 rounded transition-colors">
            <ChevronRight size={16} className="rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </div>
  );
}