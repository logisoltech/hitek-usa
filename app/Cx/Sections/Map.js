'use client';

import React from 'react';
import { openSans } from '../Font/font';

const Map = () => {
  return (
    <div className={`w-full py-8 lg:py-12 bg-white ${openSans.className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Store Location</h2>
        
        {/* Map */}
        <div className="w-full mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.9225957658064!2d-114.31230862463653!3d48.18884284759216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536650c2d7daf13f%3A0x97439edca6cc90e5!2s1001%20S%20Main%20St%2C%20Kalispell%2C%20MT%2059901%2C%20USA!5e0!3m2!1sen!2s!4v1769601507240!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Map;

