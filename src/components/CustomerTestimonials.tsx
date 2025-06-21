
const CustomerTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jhon Doe",
      text: "Rentsetu made my rental journey incredibly smooth. Found the perfect apartment in just 2 days!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      text: "Amazing platform with genuine listings. The customer support team was extremely helpful throughout the process.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Mike Chen",
      text: "Best rental experience ever! The verification process gave me confidence in my choice.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Emily Davis",
      text: "Found my dream flatmate through RentSetu. The matching system is incredibly accurate!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Alex Rodriguez", 
      text: "Professional service with transparent pricing. Highly recommend to anyone looking for rentals.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      text: "Quick, reliable, and trustworthy. RentSetu simplified what used to be a stressful process.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-gradient-radial from-green-300 via-green-200 to-green-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-300/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">From Our Customers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow ${
                index === 2 ? 'md:col-start-2 lg:col-start-2' : ''
              }`}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
