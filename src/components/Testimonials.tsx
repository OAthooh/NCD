import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "The NCD Management Platform has revolutionized how I manage my diabetes. Real-time tracking and insights have made a huge difference in my daily life.",
    name: "Sarah Johnson",
    role: "Patient",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    text: "As a healthcare provider, this platform has streamlined my workflow and improved patient outcomes. The real-time data access is invaluable.",
    name: "Dr. Michael Chen",
    role: "Healthcare Provider",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    text: "Managing our healthcare facility's data has never been easier. The platform's admin tools are intuitive and comprehensive.",
    name: "Emily Rodriguez",
    role: "Admin",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What Our Users Are Saying
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-xl p-8 md:p-12"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full mb-6 object-cover"
              />
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              <h4 className="font-semibold text-lg">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-blue-600">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;