import React from 'react';
import Layout from './Layout';

function Footer() {
  return (
    <footer
      className='w-full border-t-2 border-solid border-dark 
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    '
    >
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>All Rights Reserved. {new Date().getFullYear()} &copy; </span>
        <div className='flex items-center lg:py-2'>
          Built with{' '}
          <span className='text-primary dark:text-primaryDark text-2xl px-1'>
            &#9825;
          </span>
          By&nbsp;
          <div className='flex items-center lg:py-2'>Izamul Fikri</div>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;
