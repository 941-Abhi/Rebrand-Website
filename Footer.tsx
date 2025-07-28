import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black mb-4 drop-shadow-lg">
              THRON<span className="text-orange-500">RIDER</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              ThroneRider: Where every journey is a royal experience. Crafted for riders who seek adventure, style, and legacy.
            </p>
          </div>

          {/* Remove Quick Links section entirely */}

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="text-orange-500 mr-3" />
                <span className="text-gray-300">1800-123-7458</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-orange-500 mr-3" />
                <span className="text-gray-300">info@thronrider.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="text-orange-500 mr-3" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ThronRider. All rights reserved. | Privacy Policy | Terms & Conditions
            </div>
            <div className="text-gray-400 text-sm">
              Made in India with ❤️ for riders worldwide
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}