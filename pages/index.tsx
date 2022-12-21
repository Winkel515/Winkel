import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import Typewriter from 'typewriter-effect';
import Head from 'next/head';
import Info from '../components/Info';

const typeWriterClass = 'text-lg md:text-xl lg:text-2xl';

const typedString = `<span class="${typeWriterClass} font-mono">
<span class="text-blue-600">const</span> Winkel = {<br/>
  &emsp;name: <span class="text-orange-700">'Winkel Yin'</span>,<br/>
  &emsp;role: <span class="text-orange-700">'Software Engineer'</span>,<br/>
  &emsp;location: <span class="text-orange-700">'Montreal'</span>,<br/>
  &emsp;resume: <span class="text-orange-700">'<a href="/files/resume.pdf" target="_blank" class="underline">click here!</a>'</span>,<br/>
  &emsp;linkedin: <span class="text-orange-700">'<a href="https://www.linkedin.com/in/winkel-yin/" target="_blank" class="underline">or here!</a>'</span>,<br/>
  &emsp;github: <span class="text-orange-700">'<a href="https://github.com/Winkel515" target="_blank" class="underline">or even here!</a>'</span>,<br/>
  &emsp;leetcode: <span class="text-orange-700">'<a href="https://leetcode.com/Winkel515/" target="_blank" class="underline">maybe here!?</a>'</span>,<br/>
};</span>`;
//hello, this is gator
export default function Home() {
  return (
    <div className="bg-white min-h-screen dark:bg-dark dark:text-white flex flex-col">
      <Head>
        <title>Winkel Yin</title>
        <link rel="shortcut icon" href="/feelsbadman.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <div className="flex mt-10 mx-0 sm:mx-5 lg:mx-0 flex-col md:flex-col lg:flex-row justify-center justify-items-center">
        <Info />

        <Typewriter
          options={{
            cursorClassName: typeWriterClass,
          }}
          onInit={(typewriter) => {
            typewriter.changeDelay(1).typeString(typedString).start();
          }}
        />
      </div>
    </div>
  );
}
