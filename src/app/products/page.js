


"use client";

import { motion } from "framer-motion";

export const metadata = {
    title: 'Fresh Chicken, Mutton & Fish – Products',
    description: 'Explore our fresh chicken, mutton, and fish products. Order online for fast delivery.',
    alternates: { canonical: '/products' },
};



const products = [
    {
        name: "Fresh Chicken",
        price: "₹250 / kg",
        img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Mutton Curry Cut",
        price: "₹750 / kg",
        img: "https://images.unsplash.com/photo-1708974140638-8554bc01690d?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Fish (Rohu)",
        price: "₹300 / kg",
        img: "https://images.unsplash.com/photo-1598767291342-a537ce8d5644?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Eggs (Fresh)",
        price: "₹7 / piece",
        img: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const recipes = [
    {
        title: "Chicken Curry",
        img: "https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://youtu.be/ce2kekQM3aU?si=4Bm4Sv3ec42a7sAi",
    },
    {
        title: "Mutton Rogan Josh",
        img: "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXV0dG9uJTIwY3Vycnl8ZW58MHx8MHx8fDA%3D",
        link: "https://youtu.be/ZaZNZdehT0E?si=9ZnJ7ojLzreiXRhe",
    },
    {
        title: "Fish Fry",
        img: "https://images.unsplash.com/photo-1656389863790-f217b89cc626?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://youtu.be/J1gsLMQ1Eps?si=pzWSf5KmmLWqpiWE",
    }, 
    {
        title: "Egg Curry",
        img: "https://images.unsplash.com/photo-1661588669110-81142a5b9e57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWdnJTIwY3Vycnl8ZW58MHx8MHx8fDA%3D",
        link: "https://youtu.be/pqGMxHIfcXg?si=dAtBAFcwzxnYF8BU",
    },
];

export default function ProductsPage() {
    return (
        <section className="container mx-auto px-6 py-16">
            {/* Products */}
            <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>
            <div className="grid gap-8 md:grid-cols-3">
                {products.map((item, index) => (
                    <motion.div
                        key={item.name}
                        className="bg-white rounded-xl shadow hover:shadow-2xl overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <img src={item.img} alt={item.name} className="w-full h-56 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-600">{item.price}</p>
                            <a
                                href="https://wa.me/919660697945?text=Hi! I want to order this product."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                            >
                                Order on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Recipes */}
            <h2 className="text-2xl font-bold text-center mt-20 mb-8">🍲 Recommended Recipes</h2>
            <div className="grid gap-8 md:grid-cols-3">
                {recipes.map((recipe, index) => (
                    <motion.a
                        key={recipe.title}
                        href={recipe.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-xl shadow hover:shadow-2xl overflow-hidden block"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <img src={recipe.img} alt={recipe.title} className="w-full h-56 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold">{recipe.title}</h3>
                            <p className="text-red-600">View Recipe →</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
