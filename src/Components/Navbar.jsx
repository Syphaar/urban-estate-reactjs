import { useState } from "react";

const Navbar = ({ scrollToSection, activeSection }) => {
    let Links = [
        {lname:"Home", link:"sectiononeRef", number:"01. ", id: "sectionone"},
        {lname:"Services", link:"servicesRef", number:"02. ", id: "services"},
        {lname:"About", link:"aboutRef", number:"03. ", id: "about"},
        {lname:"Projects", link:"projectsRef", number:"04. ", id: "projects"},
        {lname:"Contact", link:"contactRef", number:"05. ", id: "contact"},
    ]

    let [open, setOpen] = useState(false);

    const handleLinkClick = (ref) => {
        scrollToSection(ref); // Scroll to the section
        setOpen(false); // Close the navbar after clicking a link
    };

    return (
        <div className="shadow-md w-full sticky top-0 left-0 z-40">
            <div className="md:flex items-center justify-between bg-black py-4 px-7 md:px-10 lg:px-16 xl:px-20">
                <div className="font-bold text-lg sm:text-2xl cursor-pointer flex items-center text-white">
                    <a href="">
                        Urban Estate
                    </a>
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl text-white absolute right-8 top-4 sm:top-6 cursor-pointer md:hidden">
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 text-center bg-black transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                    {Links.map((link) => (
                            <li key={link.lname} className="md:ml-6 lg:ml-8 text-xl md:my-0 my-7">
                                <a onClick={() => handleLinkClick(link.link)} className={`relative text-xl font-semibold transition-colors duration-500 
                                        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
                                        after:bg-beige after:transition-all after:duration-500 
                                        hover:after:w-full hover:text-beige cursor-pointer 
                                        duration-500 font-bold ${activeSection === link.id ? "text-beige after:w-full" : "text-white"}`}>
                                {link.lname}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;