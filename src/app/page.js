
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ThumbsUp, Truck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Script from 'next/script';









export default function Home() {



  // Slider Images
  const slides = [
    "https://ik.imagekit.io/warriordc/Rajasthan-meat-shop/shop-hero__Cv_cO4uM?updatedAt=1756811114863",
    "https://ik.imagekit.io/warriordc/Rajasthan-meat-shop/inside-store.jpg?updatedAt=1756806992088",
    "https://ik.imagekit.io/warriordc/Rajasthan-meat-shop/inside-store2.jpg?updatedAt=1756806991922",
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>


      {/* Hero Section with Slider */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.img
          key={current}
          src={slides[current]}
          alt="Fresh Meat Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 bg-white/60 p-2 rounded-full hover:bg-white transition"
        >
          <ChevronLeft className="text-gray-800" size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 bg-white/60 p-2 rounded-full hover:bg-white transition"
        >
          <ChevronRight className="text-gray-800" size={28} />
        </button>

        {/* Hero Text */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Fresh & Hygienic Non-Veg Daily
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 drop-shadow-md"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Chicken • Mutton • Fish — Halal Certified
          </motion.p>
          <motion.a
            href="https://wa.me/919660697945?text=Hello! I’d like to order fresh meat from Rajasthan Meat Shop."
            className="px-6 py-3 bg-red-600 rounded-lg shadow hover:bg-red-700"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Order Now on WhatsApp
          </motion.a>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="container mx-auto py-16 px-6 grid gap-8 md:grid-cols-4">
        {[
          {
            name: "Chicken",
            img: "https://images.unsplash.com/photo-1642102903996-cdad15f5dcdd?q=80&w=1074&auto=format&fit=crop",
          },
          {
            name: "Mutton",
            img: "https://plus.unsplash.com/premium_photo-1668616816720-c293b5f4debd?q=80&w=687&auto=format&fit=crop",
          },
          {
            name: "Fish",
            img: "https://images.unsplash.com/photo-1682942925422-b899fd9b36ce?q=80&w=1170&auto=format&fit=crop",
          },
          {
            name: "Eggs",
            img: "https://plus.unsplash.com/premium_photo-1726072360068-cdc3561ea615?q=80&w=1170&auto=format&fit=crop",
          },
        ].map((cat, index) => (
          <motion.div
            key={cat.name}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={cat.img} alt={cat.name} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
              <Link
                href="/products"
                className="text-red-600 font-medium hover:underline"
              >
                View Products →
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="bg-red-50 py-20 px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Rajasthan Meat Shop?
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3 max-w-5xl mx-auto">
          {[
            {
              title: "100% Fresh Daily",
              desc: "Farm-fresh Chicken, Mutton, and Fish handled with top hygiene.",
              icon: <ThumbsUp className="w-12 h-12 text-red-600 mx-auto mb-4" />,
            },
            {
              title: "Daily fresh Delivery",
              desc: "We get delivered our products fresh daily.",
              icon: <Truck className="w-12 h-12 text-red-600 mx-auto mb-4" />,
            },
            {
              title: "Halal Certified",
              desc: "Guaranteed halal-certified meat for trust and peace of mind.",
              icon: <ShieldCheck className="w-12 h-12 text-red-600 mx-auto mb-4" />,
            },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {f.icon}
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="https://wa.me/919660697945?text=Hello! I want to know today’s fresh meat options."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 px-8 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700"
          whileHover={{ scale: 1.05 }}
        >
          Chat with Us on WhatsApp
        </motion.a>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919660697945?text=Hi! I’d like to place an order at Rajasthan Meat Shop."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
}
