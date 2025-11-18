// src/components/shared/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaMountainSun } from 'react-icons/fa6';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <FaMountainSun />
              <span>GoWild</span>
            </Link>
            <p className="text-sm">
              Crafting unforgettable travel experiences. Explore the world with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><FiFacebook /></a>
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><FiTwitter /></a>
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><FiInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/tours" className="hover:text-primary transition-colors">Tours</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cancellation-policy" className="hover:text-primary transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Subscribe to our Newsletter</h4>
            <p className="text-sm mb-4">Get the latest deals and travel tips straight to your inbox.</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} GoWild Travels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;