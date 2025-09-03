"use client";

import { motion } from "framer-motion";


export const metadata = {
    title: 'About Rajasthan Meat Shop',
    description: 'Trusted meat shop in Rajasthan. Hygienic processing, fair pricing and reliable delivery.',
    alternates: { canonical: '/about' },
};



export default function AboutPage() {
    return (
        <section className="container mx-auto px-6 py-16 text-center">
            <motion.h1
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
            >
                About Rajasthan Meat Shop
            </motion.h1>
            <motion.p
                className="max-w-3xl mx-auto text-lg text-gray-700"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                We are a trusted family-run meat shop providing **fresh chicken,
                mutton, fish, and eggs daily**. All our products are hygienically
                processed, halal certified, and delivered with care.
                <br /> <br />
                Our goal is simple: to bring **farm-fresh non-veg** to your home at the
                best quality and price.
            </motion.p>
        </section>
    );
}
