"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative text-white overflow-hidden"
    >
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="https://images.pexels.com/photos/7876046/pexels-photo-7876046.jpeg"
          alt="Footer Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 font-['Playfair_Display']">Codera</h3>
            <p className="text-gray-200 leading-relaxed">
              Crafting creative digital  <br />experiences with passion <br /> and precision. We bring your <br />ideas to life.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white  font-semibold mb-3 uppercase tracking-wide">Navigate</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wide">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
              <li><Link href="/support" className="hover:text-blue-400 transition">Customer Support</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase tracking-wide">Follow Us</h4>
            <div className="flex space-x-4 text-lg">
              <Link href="#" className="hover:text-blue-400 transition"><FaFacebookF /></Link>
              <Link href="#" className="hover:text-blue-400 transition"><FaTwitter /></Link>
              <Link href="#" className="hover:text-blue-400 transition"><FaInstagram /></Link>
              <Link href="#" className="hover:text-blue-400 transition"><FaLinkedinIn /></Link>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 border-t border-[#001f54] pt-6 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Codera Brand. Crafted with passion. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
