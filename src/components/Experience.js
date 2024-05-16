import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]
    '
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <span
            href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
          >
            {company}
          </span>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <>
      <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl'>
          Pendidikan
        </h2>

        <div
          ref={ref}
          className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            '
          />

          <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 text-justify whitespace-normal'>
            <Details
              position='Teknik Komputer dan Jaringan'
              company=''
              companyLink=''
              time='2018 - 2021'
              address='SMK Negeri 1 Tegalsari'
              work='Belajar tentang jaringan seperti persiapan hingga instalasi serta perawatan, seperti mikrotik, cisco, fiber optic hingga pemasangan tower triangle dan lain sebagainya. Selain itu juga aktif dalam organisasi Remaja Masjid seperti mengadakan tahlilan atau pengajian bersama juga acara keagamaan lainnya. Menjadi finalis Bebras Competition se Kabupaten Banyuwangi.'
            />
            <Details
              position='D4 Teknik Informatika'
              company='IPK 3.83'
              companyLink=''
              time='2021 - sekarang'
              address='Politeknik Negeri Malang'
              work="Aktif mengikuti komunitas Workshop Riset Informatika dari semester 1 hingga semester 3 dan ikut dalam tim riset website.
              Selain itu juga sering ikut kompetisi tingkat nasional seperti gemastik, hology, compfest, dan pernah menjadi finalis pada KMIPN IV di Politeknik Negeri Batam bidang Cyber Security. 
              Finalis kepenulisan karya tulis ilmiah Agrifasco IPB. Juara Internal Competition JTI Polinema 1,2,3 pada tahun 2022-2024 bidang Cyber Security, Juara 2 Inovasi Apliaksi Internal Competition JTI Polinema tahun 2022. Serta ikut organisasi Ikatan Mahasiswa Banyuwangi Polinema. Lain sebagainya"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
