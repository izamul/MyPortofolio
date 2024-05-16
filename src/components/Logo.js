import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MontionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MontionLink
        href='/'
        className='w-16 h-16 bg-dark  text-light flex items-center
        border border-solid border-transparent dark:border-light justify-center rounded-full text-2xl font-bold
        '
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgb(0,153,77)',
            'rgb(102, 255, 153)',
            'rgba(252,176,69,1)',
            'rgb(77,136,255)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        IF
      </MontionLink>
    </div>
  );
};

export default Logo;
