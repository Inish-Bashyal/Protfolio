import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
     As a developer, I specialize in creating dynamic and responsive web experiences as well as mobile applications. 
My skill set includes front-end technologies like HTML, CSS, JavaScript, and React, 
as well as back-end frameworks like Node.js and Django. 
Whether it's designing user interfaces, optimizing performance, or solving complex backend or frontend challenges, 
I'm dedicated to delivering solutions that exceed expectations.

      </motion.p>
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionHeadText}>Why work with me?</h3>
      </motion.div>

      <motion.p
  variants={fadeIn('', '', 0.1, 1)}
  className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
>
  <span className="font-bold">Expertise:</span> With years of experience under my belt, I bring a wealth of knowledge and expertise to every project.
  <br />
  <span className="font-bold">Collaboration:</span> I believe in the power of teamwork and thrive in collaborative environments where ideas flow freely and creativity knows no bounds.
  <br />
  <span className="font-bold">Quality:</span> I take pride in my work and am committed to delivering high-quality, meticulously crafted solutions that stand the test of time.
</motion.p>



      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
