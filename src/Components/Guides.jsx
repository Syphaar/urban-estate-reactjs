const Designs = [
    {
        id:1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740655224/futuristic_ils6rg.jpg",
        numb: "01",
        header: "The Futuristic House",
        description: "Experience the perfect fusion of innovation and luxury with a futuristic home. Designed with smart technology, energy-efficient materials, and sleek architecture, these homes offer a seamless, modern living experience. Step into the future of real estate today.",
    },
    {
        id:2,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740655228/minimalist_hqrgd4.jpg",
        numb: "02",
        header: "The Minimalist House",
        description: "Embrace simplicity and elegance with a minimalist home. Designed for a clutter-free lifestyle, these houses focus on open spaces, clean lines, and natural light. Enjoy modern aesthetics, functional layouts, and a peaceful living environment tailored to your needs.",
    },
]

const Guides = ({ aboutRef }) => {
    return (
        <section ref={aboutRef} id="about">
            <div className="px-7 py-12 md:py-14 md:px-10 lg:px-16 xl:px-20">
                <div className="pb-4 text-center">
                    <div className="sm:px-10 md:px-32 lg:px-52 xl:px-85">
                        <h3 className="text-2xl capitalize font-bold md:text-4xl">Discover your dream house today</h3>
                    </div>                    
                </div>
                <div>
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                        {Designs.map((data3) => (
                            <div key={data3.id}>
                                <div>
                                    <div>
                                        <img src={data3.img} alt="" className="rounded-2xl" />
                                    </div>
                                    <div className="flex gap-4 pt-2">
                                        <div className="text-2xl font-bold hidden md:block">
                                            {data3.numb}
                                        </div>
                                        <div>
                                            <div className="pb-2">
                                                <h4 className="w-40 font-semibold sm:w-full sm:text-2xl">{data3.header}</h4>
                                            </div>
                                            <p>{data3.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Guides;