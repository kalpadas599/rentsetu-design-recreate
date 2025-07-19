import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Phone } from 'lucide-react';

const BookingDetails = () => {
  const bookings = [
    {
      id: 1,
      sno: '1.',
      propertyName: '',
      bookingStatus: 'active',
      tenantName: 'name 1',
      tenantContact: 'name 2'
    }
  ];

  const interestedTenant = {
    name: 'Name',
    age: 'Age',
    gender: 'Gender',
    contactNo: 'Contact No.'
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Bookings</h1>
      
      {/* Bookings Table */}
      <div className="bg-white rounded-lg shadow-sm border mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S.no</TableHead>
              <TableHead>Property name</TableHead>
              <TableHead>Booking status</TableHead>
              <TableHead>Tenant Name</TableHead>
              <TableHead>Tenant Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.sno}</TableCell>
                <TableCell>{booking.propertyName}</TableCell>
                <TableCell>
                  <div className="flex flex-col space-y-1">
                    <Badge className="bg-success text-white w-fit">Active</Badge>
                    <Badge className="bg-error text-white w-fit">Inactive</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{booking.tenantName}</span>
                    <span>{booking.tenantContact}</span>
                  </div>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Interested Tenant Card */}
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-gray-600 font-medium">Interested Tenant</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{interestedTenant.name}</h3>
              <p className="text-sm text-gray-600">
                {interestedTenant.age}, {interestedTenant.gender}
              </p>
              <p className="text-sm text-gray-600">{interestedTenant.contactNo}</p>
            </div>
            <Phone className="w-5 h-5 text-gray-400" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingDetails;