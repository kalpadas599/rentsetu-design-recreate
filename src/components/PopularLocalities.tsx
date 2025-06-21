const PopularLocalities = () => {
  const localities = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      title: "2 BHK | 1111 sqft",
      subtitle: "Worli-dadar road, Mumbai",
      price: "15,000 INR",
      badge: "Ready to Move"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop",
      title: "2 BHK | 1111 sqft", 
      subtitle: "Worli-dadar road, Mumbai",
      price: "15,000 INR",
      badge: "Ready to Move"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=400&h=300&fit=crop",
      title: "2 BHK",
      subtitle: "Worli-da",
      price: "15,000",
      badge: "Ready to Move"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Localities {'>'}​</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localities.map((locality) => (
            <div key={locality.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={locality.image} 
                  alt={locality.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {locality.badge}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{locality.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{locality.subtitle}</p>
                <p className="text-xl font-bold text-gray-900">{locality.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocalities;
