import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { technicalArsenal } from "../constants";

const SkillCard = ({ category, skills, color, rgb, index }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.25, 0.75)}
            className='w-full'
        >
            <div
                className='w-full h-full bg-[#050816]/40 backdrop-blur-sm border border-white/5 rounded-3xl p-5 transition-all duration-300 min-h-[180px] hover:scale-[1.02] hover:-translate-y-2'
                style={{
                    borderColor: `rgba(${rgb}, 0.2)`,
                    boxShadow: `0 0 20px rgba(${rgb}, 0.05)`
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px rgba(${rgb}, 0.15), 0 10px 25px rgba(0,0,0,0.2)`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px rgba(${rgb}, 0.05)`;
                }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <span className="font-mono text-lg font-bold" style={{ color: `rgb(${rgb})` }}>&lt;&gt;</span>
                    <h3
                        className='text-white text-[18px] font-bold font-sans'
                        style={{ color: `rgb(${rgb})` }}
                    >{category}</h3>
                </div>

                <div className='flex flex-wrap gap-2'>
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className='px-3 py-1.5 bg-[#111624] rounded-full text-slate-300 text-[12px] font-medium hover:bg-slate-800 transition-all duration-200 border hover:scale-105'
                            style={{
                                borderColor: `rgba(${rgb}, 0.4)`,
                                boxShadow: `0 0 10px rgba(${rgb}, 0.1)`
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `rgba(${rgb}, 0.8)`;
                                e.currentTarget.style.boxShadow = `0 0 15px rgba(${rgb}, 0.3)`;
                                e.currentTarget.style.color = `rgb(${rgb})`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = `rgba(${rgb}, 0.4)`;
                                e.currentTarget.style.boxShadow = `0 0 10px rgba(${rgb}, 0.1)`;
                                e.currentTarget.style.color = '';
                            }}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const TechArsenal = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>My Skills</p>
                <h2 className={`${styles.sectionHeadText} text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400`}>
                    Technical Arsenal
                </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
                {technicalArsenal.map((category, index) => (
                    <SkillCard
                        key={category.category}
                        index={index}
                        {...category}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(TechArsenal, "tech");
