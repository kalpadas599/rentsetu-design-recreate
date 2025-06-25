
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Phone, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ListProperty = () => {
  const [currentStep, setCurrentStep] = useState('personal');
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    contactNo: '',
    alternateContactNo: '',
    email: '',
    currentAddress: '',
    communicationMode: [] as string[],
    
    // Property Details
    propertyAddress: '',
    pincode: '',
    city: '',
    propertyType: '',
    bhkType: '',
    furnishingStatus: '',
    
    // Documents
    documents: [] as File[]
  });

  const toggleCommunicationMode = (mode: string) => {
    setFormData(prev => ({
      ...prev,
      communicationMode: prev.communicationMode.includes(mode)
        ? prev.communicationMode.filter(m => m !== mode)
        : [...prev.communicationMode, mode]
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDocumentUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setFormData(prev => ({
        ...prev,
        documents: [...prev.documents, ...Array.from(files)]
      }));
    }
  };

  const isStepCompleted = (step: string) => {
    switch (step) {
      case 'personal':
        return formData.fullName && formData.contactNo && formData.email && formData.currentAddress;
      case 'property':
        return formData.propertyAddress && formData.pincode && formData.city && formData.propertyType && formData.bhkType;
      case 'documents':
        return true; // Documents are optional
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            List Your Property
          </h1>
          <p className="text-xl text-[#0d9488] font-semibold">
            In <span className="text-[#0d9488]">3 Simple steps</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Step Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {/* Step 1 - Personal Details */}
              <div 
                className={`p-4 rounded-full border-2 cursor-pointer transition-all ${
                  currentStep === 'personal' 
                    ? 'bg-[#0d9488] text-white border-[#0d9488]' 
                    : isStepCompleted('personal')
                    ? 'bg-[#0d9488] text-white border-[#0d9488]'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
                onClick={() => setCurrentStep('personal')}
              >
                <div className="flex items-center gap-3">
                  {isStepCompleted('personal') && (
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#0d9488] text-xs">✓</span>
                    </div>
                  )}
                  <span className="font-medium">Personal Details</span>
                </div>
              </div>

              {/* Step 2 - Property Details */}
              <div 
                className={`p-4 rounded-full border-2 cursor-pointer transition-all ${
                  currentStep === 'property' 
                    ? 'bg-[#0d9488] text-white border-[#0d9488]' 
                    : isStepCompleted('property')
                    ? 'bg-[#0d9488] text-white border-[#0d9488]'
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
                onClick={() => setCurrentStep('property')}
              >
                <div className="flex items-center gap-3">
                  {isStepCompleted('property') && (
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#0d9488] text-xs">✓</span>
                    </div>
                  )}
                  <span className="font-medium">Property Details</span>
                </div>
              </div>

              {/* Step 3 - Upload Documents */}
              <div 
                className={`p-4 rounded-full border-2 cursor-pointer transition-all ${
                  currentStep === 'documents' 
                    ? 'bg-[#0d9488] text-white border-[#0d9488]' 
                    : 'bg-white text-gray-700 border-gray-300'
                }`}
                onClick={() => setCurrentStep('documents')}
              >
                <span className="font-medium">Upload Documents</span>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <Tabs value={currentStep} onValueChange={setCurrentStep} className="w-full">
              {/* Tab Headers */}
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100">
                <TabsTrigger 
                  value="personal" 
                  className="data-[state=active]:bg-[#0d9488] data-[state=active]:text-white"
                >
                  Personal Details
                </TabsTrigger>
                <TabsTrigger 
                  value="property"
                  className="data-[state=active]:bg-[#0d9488] data-[state=active]:text-white"
                >
                  Property Details
                </TabsTrigger>
                <TabsTrigger 
                  value="documents"
                  className="data-[state=active]:bg-[#0d9488] data-[state=active]:text-white"
                >
                  Documents
                </TabsTrigger>
              </TabsList>

              {/* Personal Details Tab */}
              <TabsContent value="personal" className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactNo">Contact no</Label>
                      <Input
                        id="contactNo"
                        value={formData.contactNo}
                        onChange={(e) => handleInputChange('contactNo', e.target.value)}
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alternateContactNo">Alternate Contact no</Label>
                      <Input
                        id="alternateContactNo"
                        value={formData.alternateContactNo}
                        onChange={(e) => handleInputChange('alternateContactNo', e.target.value)}
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="currentAddress">Current Address</Label>
                      <Input
                        id="currentAddress"
                        value={formData.currentAddress}
                        onChange={(e) => handleInputChange('currentAddress', e.target.value)}
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-4 md:col-span-2">
                      <Label>Preferred Mode of Communication</Label>
                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant={formData.communicationMode.includes('whatsapp') ? 'default' : 'outline'}
                          className={`${
                            formData.communicationMode.includes('whatsapp')
                              ? 'bg-green-500 hover:bg-green-600'
                              : ''
                          }`}
                          onClick={() => toggleCommunicationMode('whatsapp')}
                        >
                          WhatsApp
                        </Button>
                        <Button
                          type="button"
                          variant={formData.communicationMode.includes('phone') ? 'default' : 'outline'}
                          className={`${
                            formData.communicationMode.includes('phone')
                              ? 'bg-blue-500 hover:bg-blue-600'
                              : ''
                          }`}
                          onClick={() => toggleCommunicationMode('phone')}
                        >
                          <Phone size={16} className="mr-2" />
                          Phone
                        </Button>
                        <Button
                          type="button"
                          variant={formData.communicationMode.includes('mail') ? 'default' : 'outline'}
                          className={`${
                            formData.communicationMode.includes('mail')
                              ? 'bg-gray-500 hover:bg-gray-600'
                              : ''
                          }`}
                          onClick={() => toggleCommunicationMode('mail')}
                        >
                          <Mail size={16} className="mr-2" />
                          Mail
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Property Details Tab */}
              <TabsContent value="property" className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="propertyAddress">Property Address</Label>
                      <Input
                        id="propertyAddress"
                        value={formData.propertyAddress}
                        onChange={(e) => handleInputChange('propertyAddress', e.target.value)}
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-4 md:col-span-2">
                      <Label>Property Type</Label>
                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant={formData.propertyType === 'apartment' ? 'default' : 'outline'}
                          className={`${
                            formData.propertyType === 'apartment'
                              ? 'bg-[#0d9488] hover:bg-[#0d9488]/90'
                              : ''
                          }`}
                          onClick={() => handleInputChange('propertyType', 'apartment')}
                        >
                          Apartment
                        </Button>
                        <Button
                          type="button"
                          variant={formData.propertyType === 'bungalow' ? 'default' : 'outline'}
                          className={`${
                            formData.propertyType === 'bungalow'
                              ? 'bg-[#0d9488] hover:bg-[#0d9488]/90'
                              : ''
                          }`}
                          onClick={() => handleInputChange('propertyType', 'bungalow')}
                        >
                          Bungalow
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4 md:col-span-2">
                      <Label>BHK</Label>
                      <div className="flex gap-2">
                        {['1 BHK', '2 BHK', '3 BHK', '4 BHK+'].map((bhk) => (
                          <Button
                            key={bhk}
                            type="button"
                            variant={formData.bhkType === bhk ? 'default' : 'outline'}
                            className={`${
                              formData.bhkType === bhk
                                ? 'bg-gray-600 hover:bg-gray-700'
                                : ''
                            }`}
                            onClick={() => handleInputChange('bhkType', bhk)}
                          >
                            {bhk}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label>Furnishing Status</Label>
                      <Select value={formData.furnishingStatus} onValueChange={(value) => handleInputChange('furnishingStatus', value)}>
                        <SelectTrigger className="border-gray-300">
                          <SelectValue placeholder="Select furnishing status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fully-furnished">Fully Furnished</SelectItem>
                          <SelectItem value="semi-furnished">Semi Furnished</SelectItem>
                          <SelectItem value="unfurnished">Unfurnished</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents" className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="space-y-6">
                    {['Upload your document', 'Upload your document', 'Upload your Photos', 'Upload your document'].map((label, index) => (
                      <div key={index} className="space-y-2">
                        <Label>{label}</Label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0d9488] transition-colors">
                          <input
                            type="file"
                            multiple
                            onChange={handleDocumentUpload}
                            className="hidden"
                            id={`file-upload-${index}`}
                          />
                          <label
                            htmlFor={`file-upload-${index}`}
                            className="cursor-pointer"
                          >
                            <div className="text-gray-600">
                              <p className="text-lg font-medium">{label}</p>
                              <p className="text-sm text-gray-500 mt-2">Click to browse or drag and drop</p>
                            </div>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => {
                  if (currentStep === 'property') setCurrentStep('personal');
                  if (currentStep === 'documents') setCurrentStep('property');
                }}
                disabled={currentStep === 'personal'}
              >
                Previous
              </Button>
              
              <Button
                className="bg-[#0d9488] hover:bg-[#0d9488]/90"
                onClick={() => {
                  if (currentStep === 'personal') setCurrentStep('property');
                  else if (currentStep === 'property') setCurrentStep('documents');
                  else {
                    // Submit form
                    console.log('Form submitted:', formData);
                  }
                }}
              >
                {currentStep === 'documents' ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProperty;
