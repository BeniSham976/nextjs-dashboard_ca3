import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import SideNav from '../ui/dashboard/sidenav';
import Section1Image from 'next/image';
import Section2Image from 'next/image';
import Section3Image from 'next/image';
import styles from '@/app/ui/home.module.css';
import { Html } from 'next/document';

export default function Page() {
    return ( 
      // ...
      <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
    <main className="flex min-h-screen flex-col p-6">
        <div className="bg-gray-50 mx-2">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
    ></p>
      <h2><strong>Learn to code with Code Club.</strong></h2> Our projects have step-by-step instructions to teach you how to create games, animations, and much more. Choose from hundreds of options, in up to 30 languages.
        </div><br></br>
        <div className='lg:grid lg:grid-cols-3 lg:w-4/5 lg:gap-6 lg:justify-center lg:mx-auto xl:grid xl:grid-cols-3 xl:w-4/5 xl:gap-6 xl:justify-center xl:mx-auto md:grid md:grid-cols-2 md:gap-4 md:mx-auto'>
        <section className="bg-yellow-300 rounded-xl text-center" id='one'>
          <Section1Image
          src="/scratch.png"
          width={1000}
          height={760}
          alt="Section 2 image">
          </Section1Image>
          <h2>Scratch</h2>
            <p>Create animations, apps, and interactive stories by adding code, costumes, and sounds.</p>
          <a href="/dashboard/scratch"><button className='bg-gray-100 border-2 place-content-evenly rounded text-center'>Explore Scratch</button></a>
        </section>

        <section className='bg-blue-300 rounded-md text-center' id='two'>
        <Section2Image
          src="/python.png"
          width={1000}
          height={760}
          alt="Section 2 image">
          </Section2Image>
          <h2>Python</h2>
            <p>Make digital art, games, and more while exploring one of the world's most popular programming languages.</p>
          <a href="/dashboard/python"><button className='bg-gray-100 border-2 place-content-evenly rounded text-center'>Explore Python</button></a>
          </section>

          <section className='bg-cyan-500 rounded-md text-center' id='three'>
          <Section3Image
          src="/web.png"
          width={1000}
          height={760}
          alt="Section 3 image">
          </Section3Image>
          <h2>Web design</h2>
           <p>Build websites and apps by learning HTML, CSS, and JavaScript.</p>
           <a href="/dashboard/web"><button className='bg-gray-100 border-2 place-content-evenly rounded text-center'>Explore Web</button></a>
          </section>
        </div>
    </main>
    </div>
    );
  }