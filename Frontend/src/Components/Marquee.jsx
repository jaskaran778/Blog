import React from "react";
import { motion } from "framer-motion";

function Marquee() {
    return (
        <div className=" py-16 relative ">
            <div className="overflow-hidden whitespace-nowrap">
                {[...Array(3)].map((_, index) => (
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 5,
                        }}
                        key={index}
                        className=" whitespace-none inline-block"
                    >
                        <h1 className="text-9xl inline-block font-[Neue Haas Display-Medium] font-bold text-white ">
                            Write
                        </h1>
                        <div className="h-14 w-14 rounded-full inline-block bg-[#06B6D4] mx-8 mb-4"></div>
                        <h1 className="text-9xl inline-block font-[Neue Haas Display-Medium] font-bold text-white">
                            What
                        </h1>
                        <div className="h-14 w-14 rounded-full inline-block bg-[#06B6D4] mx-8 mb-4"></div>
                        <h1 className="text-9xl inline-block font-[Neue Haas Display-Medium] font-bold text-white">
                            Matters
                        </h1>
                        <div className="h-14 w-14 rounded-full inline-block bg-[#06B6D4] mx-8 mb-4 font-bold"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Marquee;
