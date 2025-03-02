import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const Heading = [
    {
        id:1, 
        subheading1:"Contact Us",
    }
]

const Footer = ({ contactRef }) => {
    return (
        <section ref={contactRef} id="contact" className=" items-center w-full bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740655230/one_z9b3ac.jpg)] bg-cover bg-no-repeat bg-center">
            <div className="pt-14 pb-14 px-7 md:px-10 lg:pb-10 lg:pt-20 lg:px-24 xl:px-20">
                <div className="pb-4">
                    {Heading.map((data) => (
                        <div key={data.id}>
                            <h3 className="text-white text-2xl font-bold sm:text-center md:text-4xl">{data.subheading1}</h3>
                        </div>
                    ))}
                </div>
                <div className="sm:text-center">
                    <div className="text-white sm:flex sm:justify-center sm:text-center">
                        <div className="">
                            <p className="pb-4 lg:px-32">
                            Looking to transform your space with a unique and stylish touch? Our 
                            design experts are ready to bring your vision to life with personalized 
                            solutions. Get in touch through our website, and let’s start creating 
                            your dream space today.
                            </p>
                            <div className="flex sm:justify-center items-center gap-4 pb-3 sm:justify-center">
                                <div className="text-4xl text-(--color-tahiti)">
                                    <FiPhoneCall />
                                </div>
                                <div className="">
                                    <p className="w-full text-lg font-bold xl:text-2xl">+123 456 789</p>
                                    <p className="pb-1 text-(--color-tahiti)">Round-the-clock</p>
                                </div>
                            </div>
                            <div className="pb-2">
                                <div className="flex sm:justify-center items-center gap-5 text-xl sm:text-2xl">
                                    <div className="">
                                        <a href="/" className="transition-all duration-500 hover:text-beige">
                                            <FaTwitter />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="transition-all duration-500 hover:text-beige">
                                            <FaFacebookF />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/" className="transition-all duration-500 hover:text-beige">
                                            <FaInstagram />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <h4 className="pb-2 text-lg font-bold lg:pb-4 md:text-3xl">Urban Estate</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;