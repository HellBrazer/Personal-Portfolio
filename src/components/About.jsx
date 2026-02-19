
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
        <div
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
            <img
                src={icon}
                alt='web-development'
                className='w-16 h-16 object-contain'
            />

            <h3 className='text-white text-[20px] font-bold text-center'>
                {title}
            </h3>
        </div>
    </motion.div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Versatile Data Scientist with 2+ years of experience in credit risk and digital lending,
                delivering impactful solutions across Risk scoring, Predictive modelling, and model governance.
                Skilled in building scalable frameworks (Airflow, PySpark) and expert in Python/ML stacks.
                I translate complex data into tangible business outcomes.
            </motion.p>
        </>
    );
};

export default SectionWrapper(About, "about");
