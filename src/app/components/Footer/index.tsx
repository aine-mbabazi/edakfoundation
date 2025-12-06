
"use client";
import React from 'react';



const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Contact Info</h3>
            <p className="text-gray-300">
              Nakale<br />
              Karamoja<br />
              Phone: +256 768 660867<br />
              Email: jlorika@gmail.com
            </p>
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Quick Links</h3>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex  flex-col space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61582119857265" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
              <a href="https://www.instagram.com/edward_athiyo_foundation/" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
            
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} EDAK Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;