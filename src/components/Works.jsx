import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets"; // Keeping github import if needed elsewhere, but replacing usage in button
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    subtitle,
    description,
    tags,
    image,
    source_code_link,
    color,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full">
            <div
                className='bg-slate-900/40 backdrop-blur-sm p-8 rounded-[24px] w-full border-0 transition-all duration-300 relative group hover:scale-[1.02] hover:-translate-y-1'
                style={{
                    boxShadow: `0 0 25px ${(color || '#10B981')}1A`
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 40px ${color || '#10B981'}40, 0 10px 30px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 25px ${(color || '#10B981')}1A`;
                }}
            >

                <div className="flex flex-col justify-between h-full">
                    {/* Header: Title and Button */}
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex-1 pr-4">
                            <h3
                                className='font-bold text-[26px] leading-tight font-sans tracking-tight'
                                style={{ color: color || '#10B981' }}
                            >{name}</h3>
                            <p className="text-cyan-400 text-[14px] font-medium mt-1 tracking-wide">{subtitle}</p>
                        </div>

                        <a
                            href={source_code_link}
                            target="_blank"
                            rel="noreferrer"
                            className='flex items-center gap-2 px-4 py-2 bg-[#18181b] hover:bg-[#27272a] rounded-lg border border-white/5 transition-all group/btn'
                        >
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
                                className="w-4 h-4 text-white group-hover/btn:text-cyan-400 transition-colors"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                            <span className="text-[14px] text-white font-medium group-hover/btn:text-cyan-400 transition-colors">View Code</span>
                        </a>
                    </div>

                    {/* Description */}
                    <p className='text-slate-400 text-[16px] leading-[26px] mb-8 font-sans'>
                        {description}
                    </p>

                    {/* Tags */}
                    <div className='flex flex-wrap gap-3 mt-auto'>
                        {tags.map((tag) => (
                            <span
                                key={`${name}-${tag.name}`}
                                className={`text-[12px] px-3 py-1.5 rounded-full bg-white/5 text-slate-300 font-medium transition-all duration-200 border hover:scale-105`}
                                style={{
                                    borderColor: color ? `${color}40` : '#10B98140',
                                    boxShadow: `0 0 8px ${color ? `${color}20` : '#10B98120'}`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = color || '#10B981';
                                    e.currentTarget.style.boxShadow = `0 0 12px ${color ? `${color}40` : '#10B98140'}`;
                                    e.currentTarget.style.color = color || '#10B981';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = color ? `${color}40` : '#10B98140';
                                    e.currentTarget.style.boxShadow = `0 0 8px ${color ? `${color}20` : '#10B98120'}`;
                                    e.currentTarget.style.color = '';
                                }}
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-col gap-8'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "work");
