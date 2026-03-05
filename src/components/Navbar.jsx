import { useState } from "react";
import { FiMenu } from "react-icons/fi";

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
        <nav className="bg-white flex justify-around p-2.5 shadow-xl fixed top-0 w-full z-10">
            <div className="font-livia text-xl drop-shadow-lg text-red-300">
                <em>LiviaCodes</em>
            </div>
            <ul className="px-6 flex text-base">
               {navItems.map((item) => (
            <li key={item.label}>
                <a
                href={item.href}
                className="hover:bg-red-300 hover:text-white px-4 py-2 rounded-sm transition-colors duration-300"
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
        </>
    )
}
