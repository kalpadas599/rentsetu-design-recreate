import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Properties = () => {
  const properties = [
    {
      id: 1,
      name: 'Property Name',
      details: 'some details here',
      status: 'active'
    },
    {
      id: 2,
      name: 'Property Name',
      details: 'some details here',
      status: 'inactive'
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Properties</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="mb-4">
              {/* House Icon */}
              <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-16 h-16 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{property.name}</h3>
              <Badge 
                variant={property.status === 'active' ? 'default' : 'destructive'}
                className={property.status === 'active' ? 'bg-success text-white' : 'bg-error text-white'}
              >
                {property.status === 'active' ? 'Active' : 'Inactive'}
              </Badge>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{property.details}</p>
            
            <Button 
              variant="outline" 
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Edit Property
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;