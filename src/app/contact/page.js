"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";


export const metadata = {
    title: 'Contact Rajasthan Meat Shop',
    description: 'Call or WhatsApp to order fresh chicken, mutton and fish in Rajasthan.',
    alternates: { canonical: '/contact' },
};






export default function ContactPage() {
    return (
        <section className="container mx-auto px-6 py-16">
            <motion.h1
                className="text-3xl font-bold text-center mb-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Contact Us
            </motion.h1>

            <div className="grid gap-8 md:grid-cols-3 text-center">
                <div className="bg-white shadow rounded-xl p-6">
                    <Phone className="mx-auto mb-3 text-red-600" size={32} />
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-600">Abdullah Bhai: +91 96606 97945</p>
                    <p className="text-gray-600">Ashlam Bhai: +91 92614 42399</p>
                    <p className="text-gray-600">M. Idrish Bhai +91 96609 06774 </p>
                </div>

                <div className="bg-white shadow rounded-xl p-6">
                    <Mail className="mx-auto mb-3 text-red-600" size={32} />
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@rajasthanmeatshop.com</p>
                </div>

                <div className="bg-white shadow rounded-xl p-6">
                    <MapPin className="mx-auto mb-3 text-red-600" size={32} />
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-gray-600">Holi chowk, kasai mohalla, Sumerpur, Rajasthan, India</p>
                </div>
            </div>

            <div className="text-center mt-10">
                <a
                    href="https://wa.me/919660697945?text=Hello! I’d like to know more about Rajasthan Meat Shop."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
                >
                    <MessageCircle size={20} /> Chat on WhatsApp
                </a>
            </div>
        </section>
    );
}
