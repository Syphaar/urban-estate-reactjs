import PropTypes from "prop-types"; // Import prop-types

const Heading = [
    {
        id:1, 
        text: "Find Your Dream Home Today",
        description: "Discover the perfect place to call home with our expertly curated selection of luxury residences, family-friendly communities, and prime investment opportunities.",
    },
]

const Sectionone = ({ sectiononeRef }) => {
    return (
        <section ref={sectiononeRef} id="sectionone">
            <div className="flex justify-center items-center w-full h-[100vh] bg-[url(https://res.cloudinary.com/dlcoacdkb/image/upload/v1740655214/background_kkis5e.jpg)] bg-cover bg-no-repeat bg-center px-7 md:px-10 lg:px-16 xl:px-20">
                <div className="w-full flex justify-center text-center">
                   {Heading.map((data) => (
                        <div key={data.id} >
                            <h2 className="text-3xl text-white font-bold uppercase pt-2 pb-6 sm:px-32 sm:text-4xl md:text-5xl md:px-24 lg:px-50 xl:text-6xl xl:px-60 xl:pb-5">{data.text}</h2>
                            <p className="text-white md:px-20 lg:px-32 xl:px-52">{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

// Define prop types
Sectionone.propTypes = {
    sectiononeRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

export default Sectionone;