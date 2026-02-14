export default function Navbar(){
    return(
        <>
        <nav className="bg-white flex justify-around p-2.5 shadow-xl fixed top-0 w-full z-10">
            <div className="font-livia text-xl tracking-wide drop-shadow-lg text-red-300"><em>LiviaCodes</em></div>
            <ul className="px-6 flex text-base">
               <li> <a href="#" className="hover:bg-red-300 hover:text-white px-4 py-2 rounded-sm transition-colors duration-300">Home</a></li>
                <li><a href="#About" className="hover:bg-red-300 hover:text-white px-4 py-2 rounded-sm transition-colors duration-300">About</a></li>
                <li><a href="#Services" className="hover:bg-red-300 hover:text-white px-4 py-2 rounded-sm transition-colors duration-300">Services</a></li>
                <li><a href="#Projects" className="hover:bg-red-300 hover:text-white px-4 py-2 rounded-sm transition-colors duration-300">Projects</a></li>
               <li> <a href="#Contact" className="hover:bg-red-300 hover:text-white px-4 py-2 rounded-sm transition-colors duration-300">Contact</a></li>
            </ul>
        </nav>
        </>
    )
}