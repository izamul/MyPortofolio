import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
          py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
          lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
          xs:text-dark xs:dark:text-light xs:font-bold
          '
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
        Skills
      </h2>
      <div
        className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      '
      >
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
          p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2
          '
          whileHover={{ scale: 1.05 }}
        >
          Web/Mobile
        </motion.div>
        <Skill name='Vercel/Netlify' x='-38vw' y='4vw' />
        <Skill name='Cisco' x='-5vw' y='-10vw' />
        <Skill name='Javascript' x='20vw' y='6vw' />
        <Skill name='Github' x='0vw' y='12vw' />
        <Skill name='Kotlin' x='-20vw' y='-15vw' />
        <Skill name='React Native' x='15vw' y='-12vw' />
        <Skill name='Tailwind CSS' x='30vw' y='-6vw' />
        <Skill name='Machine Learning' x='0vw' y='-18vw' />
        <Skill name='PHP' x='-22vw' y='20vw' />
        <Skill name='Java' x='-14vw' y='17vw' />
        <Skill name='Bootstrap/Material UI' x='18vw' y='14vw' />
        <Skill name='Flask' x='18vw' y='20vw' />
        <Skill name='NodeJS/Express' x='0vw' y='18vw' />
        <Skill name='MongoDb' x='0vw' y='24vw' />
        <Skill name='Sql' x='35vw' y='14vw' />
        <Skill name='Firebase' x='32vw' y='8vw' />
        <Skill name='Cyber Security CTF' x='40vw' y='-8vw' />
        <Skill name='Linux' x='-16vw' y='4vw' />
        <Skill name='Mikrotik' x='-26vw' y='2vw' />
        <Skill name='Mobile Design' x='-25vw' y='-5vw' />
        <Skill name='Sketchup' x='32vw' y='-14vw' />
        <Skill name='Web Design' x='20vw' y='-2vw' />
        <Skill name='Python' x='-38vw' y='-4vw' />
        <Skill name='HTML' x='-28vw' y='-18vw' />
        <Skill name='Design/Figma' x='-32vw' y='-10vw' />
        <Skill name='ReactJS' x='30vw' y='2vw' />
        <Skill name='Git' x='40vw' y='6vw' />
        <Skill name='Laravel' x='40vw' y='0vw' />
        <Skill name='Adobe Ilustrator' x='18vw' y='-18vw' />
        <Skill name='Flutter' x='-34vw' y='14vw' />
        <Skill name='Prompt' x='-20vw' y='12vw' />
      </div>
    </>
  );
};

export default Skills;
