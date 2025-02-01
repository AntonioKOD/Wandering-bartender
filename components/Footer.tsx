import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              The Roaming Mix
            </Link>
            <p className="mt-2 text-gray-400">
              Elevating events with exceptional bartending services.
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link href="https://facebook.com/yourpage" aria-label="Facebook" className="text-gray-400 hover:text-white">
              
                <Facebook className="h-6 w-6" />
            
            </Link>
            <Link href="https://twitter.com/yourhandle" aria-label="Twitter" className="text-gray-400 hover:text-white">
            
                <Twitter className="h-6 w-6" />
              
            </Link>
            <Link href="https://instagram.com/yourhandle" aria-label="Instagram" className="text-gray-400 hover:text-white">
              
                <Instagram className="h-6 w-6" />
              
            </Link>
            
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
Privacy Policy
              </Link>
            </li>
          </ul>
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} The Roaming Mix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}