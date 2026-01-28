'use client';

import React from 'react';
import { openSans } from '../Font/font';
const Testimonials = () => {
  const testimonials = [
    {
      review: "I purchased a printer from Hi-Tek and I'm really impressed with the print quality. The setup was straightforward, and the after-sales service has been exceptional. The support team, especially Sarah, was very helpful. I highly recommend Hi-Tek for both product quality and customer care.",
      name: "David Martinez",
      rating: 5
    },
    {
      review: "I recently purchased an LED monitor from Hi-Tek for my gaming setup, and I'm extremely satisfied. The colors are vibrant and the response time is excellent. It has really enhanced my gaming experience. I highly recommend Hi-Tek for quality products and service.",
      name: "James Anderson",
      rating: 5
    },
    {
      review: "I purchased a new laptop from Hi-Tek. The laptop is fast and reliable, and the screen quality is excellent. I highly recommend Hi-Tek to anyone looking for a quality laptop and great service.",
      name: "Michael Thompson",
      rating: 5
    },
    {
      review: "I've been a loyal customer of Hi-Tek for years and they never disappoint. Their products are top-notch and their customer service is outstanding. Always my go-to for all my tech needs!",
      name: "Robert Williams",
      rating: 5
    },
    {
      review: "Great experience shopping at Hi-Tek. The staff is knowledgeable and helped me find the perfect laptop for my needs. Fast delivery and excellent packaging. Highly recommended!",
      name: "Christopher Brown",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>★</span>);
    }
    return stars;
  };

  return (
    <div className={`w-full py-8 lg:py-12 bg-white ${openSans.className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
        
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="shrink-0 w-[400px] bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <div className="flex text-yellow-400 mb-4 text-xl">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {testimonial.review}
                </p>
                <p className="text-gray-900 font-semibold">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hide scrollbar for webkit browsers */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Testimonials;

