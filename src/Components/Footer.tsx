import React from 'react';
import { Twitter, Facebook, Instagram, Camera, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">Ankita Singh</h2>
          
          <p className="text-gray-600 italic mb-8">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consequatur voluptates perspiciatis ipsa temporibus assumenda id? Vero placeat assumenda nesciunt!
          </p>
          
       
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="p-2 bg-[#1DA1F2] text-white rounded-full hover:opacity-80">
              <Twitter size={24} />
            </a>
            <a href="#" className="p-2 bg-[#4267B2] text-white rounded-full hover:opacity-80">
              <Facebook size={24} />
            </a>
            <a href="#" className="p-2 bg-[#E4405F] text-white rounded-full hover:opacity-80">
              <Instagram size={24} />
            </a>
            <a href="#" className="p-2 bg-[#00AFF0] text-white rounded-full hover:opacity-80">
              <Camera size={24} />
            </a>
            <a href="#" className="p-2 bg-[#0077B5] text-white rounded-full hover:opacity-80">
              <Linkedin size={24} />
            </a>
          </div>
          <hr className='px-20'/>
          
          <div className="text-gray-600 text-sm">
            <p className="mb-2">
              Copyright <span className="font-medium">Alex Smith</span>. All Rights Reserved
            </p>
            <p>
              Designed by{' '}
              <a href="https://bootstrapmade.com" className="text-blue-600 hover:underline">
                BootstrapMade
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
