import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Typewriter from 'typewriter-effect';
import Head from 'next/head';
import Info from '../components/Info';

const typeWriterClass = 'text-2xl md:text-3xl lg:text-4xl';

const typedString = `<span class="${typeWriterClass} font-mono">
<span class="text-blue-600">const</span> Winkel = {<br/>
  &emsp;Name: <span class="text-orange-700">'Winkel Yin'</span>,<br/>
  &emsp;Role: <span class="text-orange-700">'Software Engineer'</span>,<br/>
  &emsp;Location: <span class="text-orange-700">'Montreal'</span>,<br/>
  &emsp;Resume: <span class="text-orange-700">'<a href="/files/resume.pdf" target="_blank" class="underline">click here!</a>'</span>,<br/>
  &emsp;LinkedIn: <span class="text-orange-700">'<a href="https://www.linkedin.com/in/winkel-yin/" target="_blank" class="underline">or here!</a>'</span>,<br/>
  &emsp;GitHub: <span class="text-orange-700">'<a href="https://github.com/Winkel515" target="_blank" class="underline">or even here!</a>'</span>,<br/>
  &emsp;LeetCode: <span class="text-orange-700">'<a href="https://leetcode.com/Winkel515/" target="_blank" class="underline">maybe here!?</a>'</span>,<br/>
  &emsp;YouTube: <span class="text-orange-700">'<a href="https://www.youtube.com/@winky1522" target="_blank" class="underline">definitely here!</a>'</span>,<br/>
};</span>`;
//hello, this is gator
export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Head>
        <title>Winkel Yin</title>
        <link rel="shortcut icon" href="/feelsbadman.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="flex mt-10 mx-0 sm:mx-5 lg:mx-0 flex-col md:flex-col lg:flex-row">
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
