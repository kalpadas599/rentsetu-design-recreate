
import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface AuthModalProps {
  type: 'signin' | 'signup' | null;
  onClose: () => void;
  onSwitchMode: (mode: 'signin' | 'signup') => void;
}

const AuthModal = ({ type, onClose, onSwitchMode }: AuthModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  if (!type) return null;

  return (
    <Dialog open={!!type} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <div className="relative bg-white rounded-lg">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>

          <div className="p-8">
            <DialogHeader className="text-center mb-6">
              <DialogTitle className="text-2xl font-semibold text-gray-900">
                {type === 'signin' ? 'Login' : 'Sign-Up'}
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              {type === 'signup' && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name:
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-[#0d9488] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  {type === 'signin' ? 'Email-id :' : 'email-id:'}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-[#0d9488] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password:
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full h-12 px-4 border-2 border-gray-200 rounded-lg focus:border-[#0d9488] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
              </div>

              {type === 'signup' && (
                <div className="flex items-center space-x-2 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    className="h-4 w-4 text-[#0d9488] border-gray-300 rounded focus:ring-[#0d9488]"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I have read and agree to the{' '}
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      terms and conditions
                    </span>
                  </label>
                </div>
              )}

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-12 bg-[#0d9488] hover:bg-[#0d9488]/90 text-white font-medium rounded-lg transition-colors"
                >
                  {type === 'signin' ? 'Login' : 'Sign-up'}
                </Button>
              </div>
            </form>

            {type === 'signin' && (
              <div className="text-center mt-4">
                <button className="text-blue-600 hover:underline text-sm">
                  Forgot Password?
                </button>
              </div>
            )}

            <div className="text-center mt-6 text-sm text-gray-600">
              {type === 'signin' ? (
                <>
                  Not a existing user?{' '}
                  <button
                    onClick={() => onSwitchMode('signup')}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Sign-up
                  </button>
                </>
              ) : (
                <>
                  Already an existing user?{' '}
                  <button
                    onClick={() => onSwitchMode('signin')}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Sign-in
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
