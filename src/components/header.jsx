import { useState } from 'react';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import logo from '../image/logo.png';
import bgImage from '../image/bg-image.jpg';

export default function Header() {
  const [activeNav, setActiveNav] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setActiveNav(id);
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close menu on click
  };

  return (
    <div className="min-h-screen relative" id="home">
      {/* Navigation Header */}
      <nav className="absolute top-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-gray-800">Cargo</span>
              <div>
                <img src={logo} alt="logo" className="pl-2" />
                <h1 className="font-bold text-yellow-500">TON</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['HOME', 'PAGES', 'TRACKING', 'SERVICES', 'BLOG'].map((item) => (
                <div key={item} className="relative group">
                  <button
                    className='flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer hover:text-yellow-600'
                    onClick={() => scrollToSection(item)}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors hidden md:block">
                GET A QUOTE
              </button>
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors hidden md:block">
                SIGN IN
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg px-6 py-4">
            <ul className="space-y-4">
              {['HOME', 'PAGES', 'TRACKING', 'SERVICES', 'BLOG'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className='block w-full text-left text-sm font-medium cursor-pointer hover:text-yellow-600'
                    // className={`block w-full text-left text-sm font-medium ${
                    //   activeNav === item ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-600'
                    // }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <button className="w-full text-left bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  GET A QUOTE
                </button>
              </li>
              <li>
                <button className="w-full text-left bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium">
                  SIGN IN
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        >
          <img src={bgImage} alt='bg-image' className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-25">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-sm font-medium text-yellow-400">LOGISTIC</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Best Shipping
                <br />
                <span className="text-yellow-400">Partner</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-md">
                Amet, tempor egestas facilisis volutpat viverra molestie lobortis
                porttitor mauris quis. Risus lacus lacinia mauris ut porta neque lorem neque.
                Eget sapien gravida neque.
              </p>

              {/* CTA Button */}
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors inline-flex items-center gap-2">
                DISCOVER MORE
              </button>
            </div>

            {/* Right Content - Stats/Features */}
            <div className="lg:justify-self-end">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                    <div className="text-sm text-gray-200">Successful Deliveries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-200">Customer Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                    <div className="text-sm text-gray-200">Countries Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">99%</div>
                    <div className="text-sm text-gray-200">On-Time Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-6 text-white">
          <div className="writing-mode-vertical text-sm tracking-wider opacity-70">
            SCROLL DOWN
          </div>
        </div>
      </div>

      {/* Quick Action Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Search size={16} className="text-white" />
                </div>
                <span className="text-white font-medium">Track Your Shipment</span>
              </div>
            </div>
            <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded transition-colors">
              Track Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}