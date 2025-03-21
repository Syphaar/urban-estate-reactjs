import { BsHouseDoor } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LuCirclePercent } from "react-icons/lu";
import { FaSackDollar } from "react-icons/fa6";
import PropTypes from "prop-types"; // Import prop-types

const Heading = [
    {
        id:1, 
        subheading1:"Expert Guides to Finding Your Perfect Fit",
    }
]

const Skills = [
    {
        id:1,
        icon:<BsHouseDoor />,
        job: "Buy Properties",
        description: "Find the perfect home or investment with ease. Explore verified listings and make a confident purchase with expert guidance.",
        link: "Read more",
    },
    {
        id:2,
        icon:<RiMoneyDollarCircleLine />,
        job: "Sell Properties",
        description: "List your property and connect with serious buyers quickly. Maximize visibility and ensure a smooth, profitable selling process.",
        link: "Read more",
    },
    {
        id:3,
        icon:<LuCirclePercent />,
        job: "Rent Properties",
        description: "Discover rental properties that suit your lifestyle and budget. Whether short-term or long-term, your ideal space is just a click away.",
        link: "Read more",
    },
    {
        id:4,
        icon:<FaSackDollar />,
        job: "Invest in real estate",
        description: "Build long-term wealth with smart real estate investments. Explore opportunities in residential, commercial, and rental markets.",
        link: "Read more",
    },
]

const About = ({ servicesRef }) => {
    return (
        <section ref={servicesRef} id="services" className="">
            <div className="px-7 pt-12 md:px-10 md:pt-14 lg:pt-10 lg:px-16 xl:px-20" data-aos="fade-up">
                <div className="pb-4">
                    {Heading.map((data) => (
                        <div key={data.id} className="text-center sm:px-10 md:px-32 lg:px-52 xl:px-85">
                            <h3 className="text-2xl font-bold md:text-4xl">{data.subheading1}</h3>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
                    {Skills.map((data2) => (
                        <div key={data2.id} className="px-5 py-8 text-center rounded-2xl border-2 sm:text-start lg:px-8 xl:px-6">
                            <div className="pb-1 flex justify-center sm:justify-start">
                                <p className="text-5xl">{data2.icon}</p>
                            </div>
                            <h4 className="py-1 text-xl font-bold uppercase">{data2.job}</h4>
                            <p className="">{data2.description}</p>
                            <div className="pt-4 flex justify-center sm:justify-start lg:pt-4 xl:pt-5">
                                <button className="flex justify-center items-center gap-1 px-3 py-1 bg-black text-white border-2 rounded-md hover:text-black hover:bg-transparent duration-500">
                                    <a href="/" className="font-bold uppercase">{data2.link}</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

// Define prop types
About.propTypes = {
    servicesRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

export default About;