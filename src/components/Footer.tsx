
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yellow-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">RentSetu</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Mobile</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Help/FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Affiliates</a></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">More</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Airlinefees</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Airline</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Low fare tips</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © 2024 RentSetu Product by QUICKFIX TECHNO SOLUTIONS PVT LTD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
