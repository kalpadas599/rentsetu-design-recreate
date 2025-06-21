
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How can I search for rental houses, PGs or flats on this website?",
      answer: "You can search by entering your preferred locality in the search bar and selecting the type of accommodation you're looking for (Rent, Full House, Flatmates, or Co Living/PG)."
    },
    {
      id: 2,
      question: "How can I search for rental houses, PGs or flats on this website?",
      answer: "Simply use our advanced search filters to narrow down properties based on your budget, location preferences, amenities, and property type."
    },
    {
      id: 3,
      question: "How can I search for rental houses, PGs or flats on this website?",
      answer: "Our platform provides detailed property information, verified listings, and direct contact with property owners or verified agents."
    },
    {
      id: 4,
      question: "How can I search for rental houses, PGs or flats on this website?",
      answer: "You can create an account, save your favorite properties, set up alerts for new listings, and connect with potential flatmates or property owners."
    },
    {
      id: 5,
      question: "How can I search for rental houses, PGs or flats on this website?",
      answer: "We offer comprehensive support including property verification, documentation assistance, and customer service throughout your rental journey."
    },
    {
      id: 6,
      question: "How can I search for rental houses, PGs or flats on this website?",
      answer: "All our listings go through a verification process to ensure authenticity. We also provide customer reviews and ratings for added confidence."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">FAQ's</h2>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-sm border">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                {openFAQ === faq.id ? (
                  <Minus className="flex-shrink-0 text-gray-500" size={20} />
                ) : (
                  <Plus className="flex-shrink-0 text-gray-500" size={20} />
                )}
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
