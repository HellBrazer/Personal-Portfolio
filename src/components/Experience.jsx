import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ index, experience }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='w-full mb-4'
    >
        <div className='glass-card p-8 rounded-[24px] hover:bg-white/5 transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-purple-500 relative'>

            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className='text-purple-400 text-2xl font-bold font-sans tracking-tight group-hover:text-purple-300 transition-colors'>
                    {experience.company_name}
                </h3>
                <p className='text-cyan-400 text-sm font-medium mt-2 md:mt-0'>
                    {experience.location}
                </p>
            </div>

            {/* All Roles */}
            {experience.roles.map((role, roleIndex) => (
                <div key={roleIndex} className={roleIndex > 0 ? 'mt-8 pt-6 border-t border-white/10' : ''}>
                    {/* Role Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <h4 className='text-cyan-400 text-lg font-medium'>
                            {role.title}
                        </h4>
                        <span className='text-slate-400 text-sm font-medium mt-1 md:mt-0'>
                            {role.date}
                        </span>
                    </div>

                    {/* Role Points */}
                    <ul className='space-y-3 text-gray-300 list-none ml-0'>
                        {role.points.map((point, pointIndex) => (
                            <li
                                key={`experience-point-${roleIndex}-${pointIndex}`}
                                className='flex items-start gap-3 text-[15px] leading-relaxed text-slate-300'
                            >
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </motion.div>
);

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText} text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400`}>
                    Professional Experience
                </h2>
            </motion.div>

            <div className='mt-10 flex flex-col gap-6 max-w-6xl mx-auto'>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} index={index} experience={experience} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
