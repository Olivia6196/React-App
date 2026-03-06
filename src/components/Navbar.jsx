import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const navItems= [
    { label: "Home", href:"#"},
    { label: "About", href:"#About"},
    { label: "Services", href:"#Services"},
    { label: "Projects", href:"#Projects"},
    { label: "Contact", href:"#Contact"}
];

export default function Navbar(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return(
        <>
        <nav className="bg-white flex justify-center gap-[52vw] md:gap-[70vw] lg:gap-[35vw] p-2.5 shadow-xl fixed top-0 w-full z-10">
            <div className="font-livia text-xl drop-shadow-lg text-red-300 pt-3 lg:pt-0">
                <em>LiviaCodes</em>
            </div>
            <ul className="px-6 hidden lg:flex text-base">
               {navItems.map((item) => (
            <li key={item.label}>
                <a
                href={item.href}
                className="hover:bg-red-300 hover:text-white px-4 py-2 rounded-sm transition-colors duration-500"
              >
                {item.label}
              </a>
            </li>
            ))}
            </ul>

            <div className="lg:hidden flex items-center gap-2">
              <button
                className="p-2 text-current focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
                >
                {!mobileMenuOpen && <FiMenu className="text-3xl" />}
               </button>
          </div>
           </nav>
            {mobileMenuOpen && (
            <>
          {/* Backdrop – click to close */}
          <div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`
              lg:hidden fixed inset-y-0 left-0 z-50 w-4/5 max-w-xs bg-white shadow-2xl
              transform transition-transform duration-500 ease-in-out
              ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b">
                <div className="flex items-center gap-3">
                <em className="text-2xl font-livia text-red-300 drop-shadow-lg">LiviaCodes</em>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-gray-900 p-2 -mr-2"
                  aria-label="Close menu"
                >
                  <IoMdClose className="text-3xl" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center px-4 py-3.5 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Bottom buttons */}
              <div className="p-6 border-t mt-auto">
                <div className="flex flex-col gap-4">
                  <a
                    href="#Contact"
                    className="py-4 px-6 bg-red-300 text-white text-center rounded-xl font-semibold hover:bg-red-400 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
               </div>
          </div>
        </>
      )}
    </>
    )
}
