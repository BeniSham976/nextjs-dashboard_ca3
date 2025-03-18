import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Section1Image from 'next/image';
import Section2Image from 'next/image';
import styles from '@/app/ui/home.module.css';

export default function Page() {
    return ( 
      // ...
      <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
      <main className="flex min-h-screen flex-col p-6">
          <div className="bg-orange-500 mx-2">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
      </p>
      <h2><strong>Web</strong></h2> Start creating great webpages using HTML and customising the appearance, colours and fonts using CSS. JavaScript enables the webpage to be interactive, create various objects such as hamburger and dropdown menus and much, much more. Great thing about HTML, CSS and JavaScript is that no install is required so you can jump right in!{' '}
        </div><br></br>
        <div className="lg:grid lg:grid-cols-2 lg:w-4/5 lg:gap-6 lg:justify-center lg:mx-auto xl:grid xl:grid-cols-2 xl:w-4/5 xl:gap-6 xl:justify-center 2xl:mx-auto 2xl:grid 2xl:grid-cols-2 2xl:w-4/5 2xl:gap-6 2xl:justify-center xl:mx-auto md:grid md:grid-cols-2 md:gap-4 md:mx-auto">
        <section className="bg-blue-500 rounded-xl" id='one'>
        <Section1Image
          src="/web-intro.webp"
          width={1000}
          height={760}
          alt="Section 2 image">
          </Section1Image>
        <h2>Introduction to Web</h2>
        In this introduction to Web Design, beginners will learn to add structure and style to webpages by adding images, fonts, lists, links quotes and animations.
        </section>

        <section className='bg-purple-500 rounded-xl' id='two'>
        <Section2Image
        src="/more-web.webp"
          width={1000}
          height={760}
          alt="Section 2 image">
        </Section2Image>
        <h2>More Web</h2>
        Moving on from the introduction, we head into Modern Web Design. In the early days of the World Wide Web, webpages were static and boring walls of text. Thanks to the advancements in Web Design, we can bring fun and engagine experiences to users. Using your creativity, take users on a journey somewhere new.
        </section>
        </div>
      </main>
      </div>
    );
  }