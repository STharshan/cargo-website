import React from 'react';

export default function ClientLogos() {
  const clients = [
    {
      name: "REUSS",
      subtitle: "WEB COMPANY",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-400 rounded-sm flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rounded-sm transform rotate-45"></div>
          </div>
          <div>
            <div className="font-bold text-gray-600 text-lg tracking-wider">REUSS</div>
            <div className="text-xs text-gray-400 tracking-wide">SEO COMPANY</div>
          </div>
        </div>
      )
    },
    {
      name: "GENESIS",
      subtitle: "",
      logo: (
        <div className="text-center">
          <div className="font-bold text-gray-500 text-xl tracking-widest">GENESIS</div>
        </div>
      )
    },
    {
      name: "INTEGRIO.CORP",
      subtitle: "",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <div className="font-semibold text-gray-500 text-lg tracking-wide">INTEGRIO.CORP</div>
        </div>
      )
    },
    {
      name: "BRAINBIZ",
      subtitle: "Digital Agency",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-400 transform rotate-45 flex items-center justify-center">
            <div className="w-4 h-4 bg-white transform -rotate-45"></div>
          </div>
          <div>
            <div className="font-bold text-gray-600 text-lg tracking-wider">BRAINBIZ</div>
            <div className="text-xs text-gray-400 tracking-wide">Digital Agency</div>
          </div>
        </div>
      )
    },
    {
      name: "ZUU",
      subtitle: "",
      logo: (
        <div className="text-center">
          <div className="font-bold text-gray-500 text-2xl tracking-wider">ZUU</div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Container with border */}
        <div className="border border-gray-300 rounded-lg p-8">
          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center w-full h-16 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                {client.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}