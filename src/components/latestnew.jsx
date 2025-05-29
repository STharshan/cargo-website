import { User } from 'lucide-react';
import science from '../image/science.jpg';
import factory from '../image/factory.jpg';
import plane from '../image/plane.jpg';
import cargo from '../image/cargo.jpg';


export default function LatestNews() {
  const newsItems = [
    {
      id: 1,
      date: { day: '26', month: 'MAY' },
      image: science,
      title: 'CURABITUR LOREM UISUI QUIS',
      author: 'Admin',
      comments: 15,
      excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean non donec...',
      featured: true
    },
    {
      id: 2,
      date: { day: '22', month: 'MAY' },
      image: factory,
      title: 'CURABITUR LOREM UISUI QUIS',
      author: 'Admin',
      comments: 15,
      excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean non donec...',
      featured: false
    },
    {
      id: 3,
      date: { day: '20', month: 'MAY' },
      image: plane,
      title: 'CURABITUR LOREM UISUI QUIS',
      author: 'Admin',
      comments: 15,
      excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean non donec...',
      featured: false
    },
    {
      id: 4,
      date: { day: '15', month: 'MAY' },
      image: cargo,
      title: 'CURABITUR LOREM UISUI QUIS',
      author: 'Admin',
      comments: 15,
      excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean non donec...',
      featured: false
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-8" id='blog'>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">LATEST NEWS</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-cyan-400 text-sm font-medium">INTEGER CONGUE ELIT</span>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="flex">
                {/* Date Badge */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <div className={`${item.featured ? 'bg-cyan-400' : 'bg-gray-600'} text-white text-center px-3 py-2 rounded`}>
                      <div className="text-xl font-bold">{item.date.day}</div>
                      <div className="text-xs">{item.date.month}</div>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="w-48 h-48">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 p-6 ${item.featured ? 'bg-cyan-400 text-white' : 'bg-white'}`}>
                  <h3 className={`text-lg font-bold mb-3 ${item.featured ? 'text-white' : 'text-gray-800'}`}>
                    {item.title}
                  </h3>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <User size={14} className={item.featured ? 'text-white' : 'text-gray-500'} />
                      <span className={`text-sm ${item.featured ? 'text-white' : 'text-gray-600'}`}>
                        {item.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`w-2 h-2 rounded-full ${item.featured ? 'bg-white' : 'bg-cyan-400'}`}></div>
                      <span className={`text-sm ${item.featured ? 'text-white' : 'text-gray-600'}`}>
                        {item.comments}
                      </span>
                    </div>
                  </div>
                  
                  {/* Excerpt */}
                  <p className={`text-sm leading-relaxed ${item.featured ? 'text-white' : 'text-gray-600'}`}>
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}