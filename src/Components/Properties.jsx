import { FaBed } from "react-icons/fa6";
import { LuBath } from "react-icons/lu";
import { RiRulerLine } from "react-icons/ri";
import PropTypes from "prop-types"; // Import prop-types

const Designs = [
    {
        id:1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740655225/h-one_p7aokd.jpg",
        bed: "6 beds",
        bath: "6 bath",
        length: "2700 m2",
        header: "Harmony Hills",
        description: "$880,000",
    },
    {
        id:2,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740655230/h-two_kwipqh.jpg",
        bed: "4 beds",
        bath: "5 bath",
        length: "2500 m2",
        header: "Evergreen Estates",
        description: "$680,000",
    },
    {
        id:3,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740655240/h-three_dozlps.jpg",
        bed: "3 beds",
        bath: "3 bath",
        length: "1800 m2",
        header: "Laguna Bay Estates",
        description: "$580,000",
    },
    {
        id:4,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740655224/h-four_k7oh6q.jpg",
        bed: "8 beds",
        bath: "8 bath",
        length: "3000 m2",
        header: "Cityscape Residences",
        description: "$1,880,000",
    },
]

const Properties = ({ projectsRef }) => {
    return (
        <section ref={projectsRef} id="projects">
            <div className="px-7 pb-12 md:pb-16 md:px-10 lg:px-16 xl:px-20" data-aos="fade-up">
                <div className="pb-4 text-center">
                    <div className="sm:px-10 md:px-32 lg:px-52 xl:px-85">
                        <h3 className="text-2xl font-bold capitalize md:text-4xl">Explore your options, find your perfect match</h3>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
                        {Designs.map((data3) => (
                            <div key={data3.id}>
                                <div>
                                    <img src={data3.img} alt="" className="rounded-2xl" />
                                </div>
                                <div className="pt-2">
                                    <div className="text-xl font-bold">
                                        <h4 className="font-semibold capitalize">{data3.header}</h4>
                                    </div>
                                    <div>
                                        <div className="flex justify-between py-2">
                                            <div className="sm:flex sm:items-center sm:gap-1">
                                                <FaBed />
                                                <p>{data3.bed}</p>
                                            </div>
                                            <div className="sm:flex sm:items-center sm:gap-1">
                                                <LuBath />
                                                <p>{data3.bath}</p>
                                            </div>
                                            <div className="sm:flex sm:items-center sm:gap-1">
                                                <RiRulerLine />
                                                <p>{data3.length}</p>
                                            </div>
                                        </div>
                                        <p>{data3.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

// Define prop types
Properties.propTypes = {
    projectsRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

export default Properties;