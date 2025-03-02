// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//     const { pathname } = useLocation();

//     useEffect(
//         () => {
//             window.scrollTo(0, 0);
//         },
//         [pathname]
//     );

//     return null;
// }

import React from "react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    
    function ScrollToTop() {
        const [backToTopButton, setBackToTopButton] = useState(false);

        useEffect(() => {
            window.addEventListener("scroll", () => {
                if(window.scrollY > 100) {
                    setBackToTopButton(true)
                } else {
                    setBackToTopButton(false)
                }
            })
        }, [])

        const scrollUp = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        return <div className="App">

            {backToTopButton && (
                <button className="fixed ">^</button>
            )}
        </div>
    }
}


export default ScrollToTop;