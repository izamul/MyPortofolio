import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/projects/1.png';
import project2 from '../../public/images/projects/2.png';
import project4 from '../../public/images/projects/4.png';
import project5 from '../../public/images/projects/5.png';
import project6 from '../../public/images/projects/6.png';
import project7 from '../../public/images/projects/7.png';
import project8 from '../../public/images/projects/8.png';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, github }) => {
  return (
    <article
      className='w-full flex items-center relative rounded-br-2xl justify-between
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    '
    >
      <div
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      '
      />
      <span
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'
        />
      </span>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
          {type}
        </span>
        <span>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
            {title}
          </h2>
        </span>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p>
        {github && (
          <div className='mt-2 flex items-center'>
            <Link
              href={github}
              target='_blank'
              className='rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold
              sm:px-4 sm:text-base
              '
            >
              Visit the Project
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};


const projects = () => {
  return (
    <>
      <Head>
        <title>Izamul Fikri | My Projects</title>
        <meta
          name='description'
          content='Izamul Fikri Portifolio, Full Stack Developer, Web developer, Mobile developer, Front End'
        />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination in every pixel!!'
            delay={700}
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 text-justify whitespace-normal '>

          <div className='col-span-12 sm:col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='Factha'
                img={project4}
                summary='Aplikasi mobile untuk membantu mengatasi penyebaran berita hoax dengan memanfaatkan machine learning'
                github='https://github.com/izamul/Factha_hoax_article_detection'
                type='Mobile App Kotlin, Flask, Docker, Google Cloud'
              />
            </div>

            <div className='col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='ScanID'
                img={project1}
                summary='Aplikasi Mobile dengan Model Machine Learning yang sudah ditrain sendiri untuk kebutuhan otomasi data KTP'
                github=''
                type='Mobile App Flutter'
              />
            </div>

            <div className='col-span-12 sm:col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='Sahabat Tani Inventory'
                img={project2}
                summary='Membantu inventaris kios sahabat tani di kabupaten malang, platform untuk pelengkap Tugas Akhir kakak tingkat.'
                github='https://github.com/izamul/inventory'
                type='Laravel'
              />
            </div>

            <div className='col-span-12 sm:col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='Redesign Website SPMB Polinema'
                img={project6}
                summary='Membantu memperbaiki tata letak dari website SPMB Politeknik Negeri Malang agar lebih rapi dan mudah digunakan.'
                github='https://spmb.polinema.ac.id/info/'
                type='UI/UX'
              />
            </div>

            <div className='col-span-12 sm:col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='LUWE'
                img={project5}
                summary='Bisnis TIK Prototype untuk melayani pencarian dan penjualan katering secara online.'
                github=''
                type='Bisnis TIK, Prototype'
              />
            </div>
            <div className='col-span-12 sm:col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='Pertani'
                img={project7}
                summary='Prototype Aplikasi yang berguna untuk mengatasi rantai pasokan pertanian yang terlalu panjang guna menurunkan harga produk pertanian untuk kompetisi Karya Tulis Ilmiah Agrifasco IPB.'
                github=''
                type='UI/UX, Karta Tulis Ilmiah'
              />
            </div>
            <div className='col-span-12 sm:col-span-12 text-justify whitespace-normal '>
              <FeatureProject
                title='99+ Hasil Design'
                img={project8}
                summary='Telah melayani lebih dari 99+ client dari tahun 2018 hingga sekarang, mulai dari logo, poster, feed, dan ilustrasi vektor.'
                github='https://instagran.com/zamdesign12'
                type='Multimedia Design'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

