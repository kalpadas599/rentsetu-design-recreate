
import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Subscribe to get information, latest news and other interesting offers about Us
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
