import { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    aadhar: '',
    gender: '',
    maritalStatus: ''
  });

  const [verification, setVerification] = useState({
    email: false,
    phone: false,
    aadhar: false
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Personal Details</h1>
      
      <div className="max-w-2xl space-y-6">
        {/* Name */}
        <div>
          <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1"
          />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-gray-700 font-medium">E-mail</Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 pr-10"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {verification.email ? (
                <Check className="h-5 w-5 text-success" />
              ) : (
                <X className="h-5 w-5 text-error" />
              )}
            </div>
          </div>
          <p className={`text-sm mt-1 ${verification.email ? 'text-success' : 'text-error'}`}>
            {verification.email ? 'verified' : 'Not verified'}
          </p>
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone" className="text-gray-700 font-medium">Phone No.</Label>
          <div className="relative">
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1 pr-10"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {verification.phone ? (
                <Check className="h-5 w-5 text-success" />
              ) : (
                <X className="h-5 w-5 text-error" />
              )}
            </div>
          </div>
          <p className={`text-sm mt-1 ${verification.phone ? 'text-success' : 'text-error'}`}>
            {verification.phone ? 'verified' : 'Not verified'}
          </p>
        </div>

        {/* Aadhar */}
        <div>
          <Label htmlFor="aadhar" className="text-gray-700 font-medium">Aadhar No.</Label>
          <div className="relative">
            <Input
              id="aadhar"
              value={formData.aadhar}
              onChange={(e) => setFormData({ ...formData, aadhar: e.target.value })}
              className="mt-1 pr-10"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {verification.aadhar ? (
                <Check className="h-5 w-5 text-success" />
              ) : (
                <X className="h-5 w-5 text-error" />
              )}
            </div>
          </div>
          <p className={`text-sm mt-1 ${verification.aadhar ? 'text-success' : 'text-error'}`}>
            {verification.aadhar ? 'verified' : 'Not verified'}
          </p>
        </div>

        {/* Gender */}
        <div>
          <Label className="text-gray-700 font-medium">Gender</Label>
          <RadioGroup
            value={formData.gender}
            onValueChange={(value) => setFormData({ ...formData, gender: value })}
            className="mt-2"
          >
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <label htmlFor="male" className="text-gray-700">Male</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <label htmlFor="female" className="text-gray-700">Female</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="prefer-not-to-say" id="prefer-not-to-say" />
                <label htmlFor="prefer-not-to-say" className="text-gray-700">Prefer Not to Say</label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Marital Status */}
        <div>
          <Label className="text-gray-700 font-medium">Marital Status</Label>
          <RadioGroup
            value={formData.maritalStatus}
            onValueChange={(value) => setFormData({ ...formData, maritalStatus: value })}
            className="mt-2"
          >
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="married" id="married" />
                <label htmlFor="married" className="text-gray-700">Married</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unmarried" id="unmarried" />
                <label htmlFor="unmarried" className="text-gray-700">Unmarried</label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Profile;