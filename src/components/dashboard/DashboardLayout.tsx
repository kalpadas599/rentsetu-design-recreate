import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Home, Calendar } from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  
  const sidebarItems = [
    {
      icon: User,
      label: 'Profile',
      path: '/dashboard/profile'
    },
    {
      icon: Home,
      label: 'Properties',
      path: '/dashboard/properties'
    },
    {
      icon: Calendar,
      label: 'Booking Details',
      path: '/dashboard/booking-details'
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <h1 className="text-2xl font-bold text-gray-900">RentSetu</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
                Our Services
              </a>
              <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
                How it works?
              </a>
              <Link to="/list-property">
                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90">
                  List Your Property
                </button>
              </Link>
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-sm border-r min-h-screen">
          <div className="p-6">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 p-4 rounded-lg mb-2 transition-colors ${
                    isActive(item.path)
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;