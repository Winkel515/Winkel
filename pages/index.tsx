import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typewriter from 'typewriter-effect';
import Head from 'next/head';

const typeWriterClass = 'text-2xl md:text-3xl lg:text-4xl';

const typedString = `<span class="${typeWriterClass} font-mono">
<span class="text-blue-600">const</span> Winkel = {<br/>
  &emsp;name: <span class="text-orange-700">'Winkel Yin'</span>,<br/>
  &emsp;role: <span class="text-orange-700">'Software Engineer'</span>,<br/>
  &emsp;location: <span class="text-orange-700">'Montreal, Canada'</span>,<br/>
  &emsp;resume: <span class="text-orange-700">'<a href="/resume" target="_blank" class="underline">click here!</a>'</span>,<br/>
  &emsp;linkedin: <span class="text-orange-700">'<a href="https://www.linkedin.com/in/winkel-yin/" target="_blank" class="underline">or here!</a>'</span>,<br/>
  &emsp;github: <span class="text-orange-700">'<a href="https://github.com/Winkel515" target="_blank" class="underline">or even here!</a>'</span>,<br/>
  &emsp;leetcode: <span class="text-orange-700">'<a href="https://leetcode.com/Winkel515/" target="_blank" class="underline">maybe here!?</a>'</span>,<br/>
};</span>`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Winkel Yin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="flex mt-10 mx-2 sm:mx-5 lg:mx-0 flex-col md:flex-col lg:flex-row">
        <div className="flex flex-col items-center mx-20">
          <Image
            src="/myFace.png"
            width={200}
            height={266}
            alt="my face"
            className="rounded-full"
          />
          <h1 className="text-3xl font-bold">Winkel Yin</h1>
          <h2>Software Engineer</h2>
          <h2>University of Concordia</h2>
          <div className="flex">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/winkel-yin/"
            >
              <LinkedInIcon />
            </Link>
            <Link target="_blank" href="https://github.com/Winkel515">
              <GitHubIcon />
            </Link>
          </div>
        </div>

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
