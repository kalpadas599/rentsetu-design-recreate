
import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const HeroSection = () => {
  const [activeFilter, setActiveFilter] = useState('Rent');
  const [location, setLocation] = useState('');

  const filters = ['Rent', 'Full House', 'Flatmates', 'Co Living/PG'];

  return (
    <section className="relative bg-gradient-to-br from-sky-400 via-blue-300 to-yellow-200 min-h-[500px] flex items-center overflow-hidden">
      {/* Background Buildings Illustration */}
      <div className="absolute inset-0 flex items-end justify-center opacity-30">
        <div className="flex items-end space-x-2 pb-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`bg-gray-600 rounded-t-lg ${
                i % 3 === 0 ? 'h-32 w-8' : i % 3 === 1 ? 'h-40 w-8' : 'h-36 w-8'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Rent with Confidence, Connect with Ease
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Where communities feels like <span className="italic">Home</span>
        </p>

        {/* Search Section */}
        <div className="bg-white rounded-2xl p-6 shadow-xl max-w-4xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-[#0d9488] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Enter Locality"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0d9488]"
              />
            </div>
            <button className="bg-[#0d9488] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0d9488]/90 transition-colors flex items-center gap-2">
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
