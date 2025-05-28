import { useEffect, useState } from 'react';

export default function StatsSection() {
  const [animatedValues, setAnimatedValues] = useState({
    packages: 0,
    countries: 0,
    tons: 0,
    clients: 0
  });

  const finalValues = {
    packages: 890,
    countries: 137,
    tons: 740,
    clients: 600
  };

  const stats = [
    {
      id: 'packages',
      value: finalValues.packages,
      label: 'Delivered packages',
      animatedValue: animatedValues.packages
    },
    {
      id: 'countries',
      value: finalValues.countries,
      label: 'Countries covered',
      animatedValue: animatedValues.countries
    },
    {
      id: 'tons',
      value: finalValues.tons,
      label: 'Tons of Goods',
      animatedValue: animatedValues.tons
    },
    {
      id: 'clients',
      value: finalValues.clients,
      label: 'Satisfied Clients',
      animatedValue: animatedValues.clients
    }
  ];

  // Animation effect for counting up numbers
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const animateValue = (start, end, key) => {
      let current = start;
      const increment = (end - start) / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        
        setAnimatedValues(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    };

    // Start animations for all stats
    Object.keys(finalValues).forEach(key => {
      animateValue(0, finalValues[key], key);
    });
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-8" id='services'>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className="text-center group hover:transform hover:scale-105 transition-transform duration-300"
            >
              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                {stat.animatedValue.toLocaleString()}
              </div>
              
              {/* Label */}
              <div className="text-gray-600 text-sm md:text-base font-medium leading-tight">
                {stat.label}
              </div>

              {/* Decorative line */}
              <div className="w-12 h-0.5 bg-blue-500 mx-auto mt-4 group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}