import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Rajasthan Meat Shop",
  description:
    "Fresh Chicken, Mutton, and Fish delivered daily. Halal certified and hygienically handled.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>


        <footer className="mt-10 bg-white/10 backdrop-blur-lg border-t border-white/20 shadow-inner rounded-t-3xl text-center py-8 max-w-screen-xl mx-auto px-6">
          <div className="space-y-3 max-w-md mx-auto">
            <p className="text-sm text-gray-800 select-none">
              © {new Date().getFullYear()} Rajasthan Meat Shop | All Rights Reserved
            </p>
            <p className="text-lg font-semibold uppercase tracking-wide text-gray-800 opacity-95">
              Contact Us
            </p>
            <div className="space-y-1 font-medium select-text text-gray-800">
              <a
                href="tel:+919660697945"
                className="block underline hover:text-red-600 transition"
                aria-label="Call Abdullah Bhai"
              >
                Abdullah Bhai: +91 96606 97945
              </a>
              <a
                href="tel:+919660906774"
                className="block underline hover:text-red-600 transition"
                aria-label="Call M. Idrish Bhai"
              >
                M. Idrish Bhai: +91 96609 06774
              </a>
              <a
                href="tel:+919261442399"
                className="block underline hover:text-red-600 transition"
                aria-label="Call Ashlam Bhai"
              >
                Ashlam Bhai: +91 92614 42399
              </a>
            </div>
          </div>

          <a
            href="https://wa.me/919660697945?text=Hello%21%20I%27d%20like%20to%20order%20from%20Rajasthan%20Meat%20Shop."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-3 px-6 py-3 bg-green-500/90 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400/70 mx-auto max-w-max"
            aria-label="Order Now on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
              focusable="false"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h2l3.6 7.59-1.35 2.44A11.963 11.963 0 0112 17c1.58 0 3.09-.5 4.29-1.34l2.43 1.35L21 19v2h-2c-5.53 0-10-4.47-10-10V5z"
              />
            </svg>
            Order on WhatsApp
          </a>
        </footer>




        {/* <footer className="bg-gray-900 text-white text-center py-8 mt-10">
          <p className="text-sm">
            © {new Date().getFullYear()} Rajasthan Meat Shop | All Rights Reserved
          </p>
          <a
            href="https://wa.me/919660697945?text=Hello%21%20I%27d%20like%20to%20order%20from%20Rajasthan%20Meat%20Shop."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-green-500 rounded-lg shadow hover:bg-green-600 transition"
          >
            Order on WhatsApp
          </a>
        </footer> */}
      </body>
    </html>
  );
}
