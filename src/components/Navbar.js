// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Menu, X, PhoneCall, Drumstick } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     useEffect(() => {
//         document.body.style.overflow = menuOpen ? "hidden" : "";
//         return () => (document.body.style.overflow = "");
//     }, [menuOpen]);

//     const navLinks = [
//         { name: "Home", path: "/" },
//         { name: "Products", path: "/products" },
//         { name: "About", path: "/about" },
//         { name: "Contact", path: "/contact" },
//     ];

//     const waLink =
//         "https://wa.me/919660697945?text=Hello!%20I%20would%20like%20to%20order%20fresh%20meat%20from%20Rajasthan%20Meat%20Shop.";

//     return (
//         <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-red-600/90 via-red-500/90 to-red-700/90 backdrop-blur-xl shadow-lg shadow-red-900/20 z-50">
//             <div className="container mx-auto flex items-center justify-between px-6 py-4">
//                 {/* Logo */}
//                 <Link
//                     href="/"
//                     className="flex items-center gap-2 text-2xl font-extrabold text-white drop-shadow-md"
//                 >
//                     <Drumstick className="w-7 h-7 text-yellow-300" />
//                     Rajasthan Meat Shop
//                 </Link>

//                 {/* Desktop Nav */}
//                 <nav className="hidden md:flex items-center space-x-8">
//                     {navLinks.map((link) => (
//                         <motion.div
//                             key={link.name}
//                             whileHover={{ scale: 1.1, rotate: -2 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <Link
//                                 href={link.path}
//                                 className="relative font-semibold text-white/90 hover:text-yellow-300 transition"
//                             >
//                                 {link.name}
//                                 <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
//                             </Link>
//                         </motion.div>
//                     ))}
//                     <motion.a
//                         href={waLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-medium rounded-xl shadow-md hover:bg-green-600 transition"
//                         whileHover={{ scale: 1.05, y: -2 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         <PhoneCall size={18} />
//                         Order Now
//                     </motion.a>
//                 </nav>

//                 {/* Mobile Menu Toggle */}
//                 <button
//                     className="md:hidden text-white"
//                     onClick={() => setMenuOpen((v) => !v)}
//                     aria-label="Toggle navigation"
//                 >
//                     {menuOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </div>

//             {/* Mobile Dropdown */}
//             <AnimatePresence>
//                 {menuOpen && (
//                     <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="md:hidden bg-red-700/95 backdrop-blur-md shadow-inner px-6 py-4 space-y-4"
//                     >
//                         {navLinks.map((link) => (
//                             <Link
//                                 key={link.name}
//                                 href={link.path}
//                                 className="block text-white font-medium hover:text-yellow-300 transition"
//                                 onClick={() => setMenuOpen(false)}
//                             >
//                                 {link.name}
//                             </Link>
//                         ))}
//                         <a
//                             href={waLink}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 transition"
//                             onClick={() => setMenuOpen(false)}
//                         >
//                             <PhoneCall size={18} />
//                             Order Now
//                         </a>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </header>
//     );
// }


// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Menu, X, PhoneCall, Drumstick } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     useEffect(() => {
//         document.body.style.overflow = menuOpen ? "hidden" : "";
//         return () => (document.body.style.overflow = "");
//     }, [menuOpen]);

//     const navLinks = [
//         { name: "Home", path: "/" },
//         { name: "Products", path: "/products" },
//         { name: "About", path: "/about" },
//         { name: "Contact", path: "/contact" },
//     ];

//     const waLink =
//         "https://wa.me/919660697945?text=Hello%21%20I%27d%20like%20to%20order%20from%20Rajasthan%20Meat%20Shop.";

//     return (
//         <header className="fixed top-0 left-0 w-full z-50">
//             {/* Subtle Motion Background */}
//             <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
//             <motion.div
//                 className="absolute inset-0 opacity-20"
//                 animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 style={{
//                     backgroundImage:
//                         "radial-gradient(circle at 20% 30%, rgba(255,0,0,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0%, transparent 40%)",
//                     backgroundSize: "200% 200%",
//                 }}
//             />

//             {/* Navbar Content */}
//             <div className="relative container mx-auto flex items-center justify-between px-6 py-4 text-white">
//                 {/* Logo */}
//                 <Link
//                     href="/"
//                     className="flex items-center gap-2 text-2xl font-extrabold text-white drop-shadow-md"
//                 >
//                     Rajasthan Meat Shop
//                     <Drumstick className="w-7 h-7 text-white" />
//                 </Link>

//                 {/* Desktop Nav */}
//                 <nav className="hidden md:flex items-center space-x-8">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.name}
//                             href={link.path}
//                             className="hover:text-red-400 font-medium transition"
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                     <a
//                         href={waLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
//                     >
//                         <PhoneCall size={18} />
//                         Order Now
//                     </a>
//                 </nav>

//                 {/* Mobile Toggle */}
//                 <button
//                     className="md:hidden text-white"
//                     onClick={() => setMenuOpen((v) => !v)}
//                 >
//                     {menuOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//             </div>

//             {/* Mobile Dropdown */}
//             {menuOpen && (
//                 <motion.div
//                     initial={{ y: -20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     className="md:hidden bg-black/70 backdrop-blur-md text-white shadow-inner px-6 py-4 space-y-4"
//                 >
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.name}
//                             href={link.path}
//                             className="block font-medium hover:text-red-400 transition"
//                             onClick={() => setMenuOpen(false)}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                     <a
//                         href={waLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
//                         onClick={() => setMenuOpen(false)}
//                     >
//                         <PhoneCall size={18} />
//                         Order Now
//                     </a>
//                 </motion.div>
//             )}
//         </header>
//     );
// }





"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, PhoneCall, Drumstick } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [menuOpen]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const waLink =
        "https://wa.me/919660697945?text=Hello!%20I%20would%20like%20to%20order%20from%20Rajasthan%20Meat%20Shop.";

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* Glassmorphism Nav Background */}
            <motion.nav
                className="relative mx-auto max-w-screen-xl flex items-center justify-between px-6 py-4
        rounded-b-3xl bg-white/10 border-b border-white/20 backdrop-blur-lg shadow-lg"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                aria-label="Main Navigation"
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3 text-2xl font-black tracking-tight text-slate/70 drop-shadow-md"
                >
                    <Drumstick className="w-8 h-8 text-yellow-300" />
                    Rajasthan Meat Shop
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center space-x-8 font-semibold">
                    {navLinks.map((link) => (
                        <motion.li
                            key={link.name}
                            whileHover={{ scale: 1.08, y: -2 }}
                            className="transition"
                        >
                            <Link
                                href={link.path}
                                className="relative px-2 py-1 rounded-xl text-slate/70 hover:bg-white/25 hover:text-yellow-300
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 transition active:scale-95"
                                aria-label={link.name}
                            >
                                {link.name}
                            </Link>
                        </motion.li>
                    ))}
                    <li>
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-green-500/90 text-white font-medium rounded-xl shadow-md
              hover:bg-green-600 transition"
                            aria-label="Order Now via WhatsApp"
                        >
                            <PhoneCall size={18} />
                            Order Now
                        </a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-yellow-300"
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? <X size={29} /> : <Menu size={29} />}
                </button>
            </motion.nav>

            {/* Mobile Glass Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ y: -24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -24, opacity: 0 }}
                        className="md:hidden rounded-b-2xl backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg px-8 py-4 space-y-5"
                    >
                        {navLinks.map((link) => (
                            <Link
                                href={link.path}
                                key={link.name}
                                className="block font-semibold text-xl px-2 py-1 rounded-xl text-slate/80 hover:bg-white/20 hover:text-yellow-300 transition"
                                onClick={() => setMenuOpen(false)}
                                aria-label={link.name}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-5 py-3 bg-green-500/90 text-white font-bold rounded-xl shadow-md hover:bg-green-600 transition"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Order Now via WhatsApp"
                        >
                            <PhoneCall size={20} />
                            Order Now
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
