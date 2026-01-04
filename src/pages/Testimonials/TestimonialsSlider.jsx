import React, { useEffect, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialSkeleton from "./TestimonialSkeleton";

const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    role: "Business Owner",
    feedback: "Utility Bills helped me manage all my monthly payments easily.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Ayesha Akter",
    role: "Freelancer",
    feedback: "Very smooth experience and reminders are super helpful.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Mahmud Hasan",
    role: "Student",
    feedback: "Simple UI and fast loading. Loved the dashboard.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Sabbir Ahmed",
    role: "Job Holder",
    feedback: "Paying bills is now stress free. Highly recommended!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    role: "Housewife",
    feedback: "I can track all bills in one place. Very useful app.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Tanvir Islam",
    role: "Entrepreneur",
    feedback: "Smart reminder feature saved me from late fees.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Farzana Mimi",
    role: "Teacher",
    feedback: "The interface is clean and easy to use.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Imran Hossain",
    role: "Developer",
    feedback: "Loved the performance and UX. Well designed.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Rashed Khan",
    role: "Shop Owner",
    feedback: "All my utility bills are now organized.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Jannatul Ferdous",
    role: "Content Creator",
    feedback: "Amazing platform for bill management!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=10",
  },
];

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    if (loading) return;
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [current, loading]);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  if (loading) {
    return (
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <TestimonialSkeleton />
        </div>
      </section>
    );
  }

  const item = testimonials[current];

  return (
    <section className="py-20 px-6 lg:px-20 bg-gradient-to-br from-[#F9F8FF] to-[#E8E4FF] dark:from-[#111827] dark:to-[#1F2937]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        User Testimonials
      </h2>

      <div className="max-w-3xl mx-auto relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -direction * 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              “{item.feedback}”
            </p>

            <div className="flex justify-center gap-1 mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>

            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full mx-auto mb-3"
            />

            <h4 className="font-bold">{item.name}</h4>
            <p className="text-sm text-gray-500">{item.role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-linear-to-r from-[#7A6AE0] to-[#9E8FF5] text-white p-3 rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-linear-to-r from-[#7A6AE0] to-[#9E8FF5] text-white p-3 rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
