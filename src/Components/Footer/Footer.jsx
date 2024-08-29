import React from 'react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-[#fdd166] text-2xl mb-4 md:mb-0">
            AFC
          </div>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/afc_ashmi_ftness_challenge?igsh=MXA0NzJ1YWpxMGc1Yg%3D%3D&utm_source=qr" target='_blank' className="bg-[#e1306c] hover:bg-white text-white hover:text-[#e1306c] p-2 rounded-full transition-all">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@Afcprogram" target='_blank' className="bg-red-600 hover:bg-white text-white hover:text-red-600 p-2 rounded-full transition-all">
              <YoutubeIcon />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-medium mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-[#fdd166]">Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white opacity-80 hover:opacity-100 hover:underline">Home</a></li>
              <li><a href="/about" className="text-white opacity-80 hover:opacity-100 hover:underline">About Us</a></li>
              <li><a href="/submit" className="text-white opacity-80 hover:opacity-100 hover:underline">Submit Photo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-[#fdd166]">Legal Info</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-white opacity-80 hover:opacity-100 hover:underline">Terms and Conditions</a></li>
              <li><a href="/privacy" className="text-white opacity-80 hover:opacity-100 hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-[#fdd166]">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:ashmidaali@gmail.com" className="text-white opacity-80 hover:opacity-100 hover:underline">ashmidaali@gmail.com</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-medium mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-[#fdd166]">Terms Summary</h3>
            <ul className="space-y-2 text-white opacity-80 text-sm">
              <li>Results following nutritionist advice and shared diet chart</li>
              <li>No refunds (exceptions for program halt due to our error)</li>
              <li>Clear participation and program rules guidelines</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-white opacity-80 text-sm">Copyright © 2024 AFC. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;