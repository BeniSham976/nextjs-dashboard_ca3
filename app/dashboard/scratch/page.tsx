import { lusitana } from '@/app/ui/fonts';
import Section1Image from 'next/image';
import Section2Image from 'next/image';
import Section3Image from 'next/image';

export default function Page() {
    return (
      // ..
    <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">  
    <main className="flex min-h-screen flex-col p-6">
    <div className="bg-yellow-300 border-4 border-gray-100 mx-2 rounded-2xl">
    <h2><strong>Scratch</strong></h2>Start creating animations, games and stories using the Scratch programming language that is used by primary and secondary school computer classes. It's also great for anybody who wants to learn programming for personal projects.
      </div><br></br>
      <p
      className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
      </p>
        <div className="lg:grid lg:grid-cols-3 lg:w-4/5 lg:gap-6 lg:justify-center lg:mx-auto xl:grid xl:grid-cols-3 xl:w-4/5 xl:gap-6 xl:justify-center 2xl:mx-auto 2xl:grid 2xl:grid-cols-3 2xl:w-4/5 2xl:gap-6 2xl:justify-center xl:mx-auto md:grid md:grid-cols-2 md:gap-4 md:mx-auto">
        <section className="bg-blue-500 rounded-xl" id='one'>
        <Section1Image
          src="/scratch-intro.webp"
          width={1000}
          height={760}
          alt="Section 2 image">
          </Section1Image>
          <h2>Introduction to Scratch</h2>
          <p>Create animations, apps, and interactive stories by adding code, costumes, and sounds.</p>
        </section>

        <section className='bg-purple-500 rounded-xl' id='two'>
        <Section2Image
        src="/more-scratch.webp"
          width={1000}
          height={760}
          alt="Section 2 image">
        </Section2Image>
        <h2>More Scratch</h2>
        <p>This is the next step up from the Introduction to Scratch. In this section, you will create apps, games if...then conditions and variables</p>
        </section>

        <section className='bg-green-400' id='three'>
        <Section3Image
        src="/further-scratch.webp"
          width={1000}
          height={760}
          alt="Section 2 image">
          </Section3Image>            
        <h2>Further Scratch</h2>
        <p>This section moves further than Intro and More Scratch. This covers making apps, computer-generated images, Boolean Logic and functions</p>
        </section>
        </div>
    </main>
    </div>
    );
  }