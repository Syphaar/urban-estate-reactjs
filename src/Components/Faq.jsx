import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Image = [
    {
        id:1,
        img: "https://res.cloudinary.com/dlcoacdkb/image/upload/v1740655225/faq_nv3gig.jpg",
    },
]

const data = [
    {
        id:1,
        question: "How do I start the process of buying a home?",
        answer:
            "Start by determining your budget and getting pre-approved for a mortgage. Then, contact one of our agents to help you find a property that suits your needs."
    },
    {
        id:2,
        question: "How much do I need for a down payment?",
        answer:
            "The amount varies based on the type of loan and lender requirements. Typically, it ranges from 3% to 20% of the property price."
    },
    {
        id:3,
        question: "How long does it take to buy or sell a home?",
        answer:
            "The process typically takes 30-60 days, depending on loan approvals, inspections, and negotiations."
    },
    {
        id:4,
        question: "What are closing costs, and how much should I budget for them?",
        answer:
            "Closing costs include lender fees, title insurance, home inspections, and other charges, usually totaling 2-5% of the home’s purchase price."
    },
]

const Faq = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return(
        <section>
            <div className="lg:flex sm:flex-row-reverse gap-10 px-7 pb-12 md:pb-14 md:px-10 lg:px-16 xl:px-20">
                <div className="flex w-full justify-center" data-aos="fade-left">
                    <div className="w-[500px] pb-4 lg:w-[470px] xl:w-[500px]">
                        <div className="pb-4 text-center">
                            <h3 className="text-2xl font-bold capitalize md:text-3xl xl:text-4xl">Frequently Asked Questions</h3>
                        </div>
                        {data.map((item, i) => (
                            <div key={item.id} className="bg-beige mb-2 px-5 py-5 rounded-xl">
                                <div onClick={() => toggle(i)} className="text-black flex justify-between items-center cursor-pointer">
                                    <h2>{item.question}</h2>
                                    <span className="pl-4">{selected === i ? <IoIosArrowUp /> : <IoIosArrowDown /> }</span>
                                    </div>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out text-black ${
                                        selected === i
                                            ? "opacity-100 scale-y-100 max-h-[500px]"
                                            : "opacity-0 scale-y-0 max-h-0 pointer-events-none"
                                    }`}
                                >
                                    <p className="py-2">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className="w-full h-full">
                        {Image.map((pic) => (
                            <div key={pic.id}>
                                <img src={pic.img} alt="" className="rounded-2xl" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;