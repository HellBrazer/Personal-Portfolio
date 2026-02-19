import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ index, degree, institution, year, description, tags }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className='w-full'
        >
            <div className='glass-card p-8 rounded-2xl w-full flex items-start gap-4 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:bg-white/5 hover:shadow-xl hover:shadow-violet-500/20'>

                {/* Icon Box */}
                <div className="p-3 bg-violet-500/20 rounded-lg shrink-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-violet-500"
                    >
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className='text-2xl font-bold text-white'>{degree}</h3>
                    <p className="text-cyan-400 text-lg mb-2 font-medium">
                        {institution} <span className="text-slate-500">|</span> {year}
                    </p>

                    <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                        {description}
                    </p>

                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                            {tags.map((tag, i) => (
                                <span key={i} className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>What I have studied so far</p>
                <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
            </motion.div>

            <div className='mt-20 flex flex-col gap-10'>
                {education.map((edu, index) => (
                    <EducationCard key={`education-${index}`} index={index} {...edu} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
