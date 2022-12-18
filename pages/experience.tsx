import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Head from 'next/head';

export default function Experience() {
  return (
    <div>
      <Head>
        <title>Winkel Yin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="flex mt-10 mx-5 lg:mx-0 flex-col md:flex-col lg:flex-row">
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

        <div className="flex-1 mr-0 lg:mr-20">
          <h2 className="text-3xl font-bold">Biography</h2>
          <br />
          <p>
            I studied at Concordia University Montreal in Computer Science. I
            dropped out after 2 years because I am not smart enough to get a CS
            degree. As a dropout, it is harder to find a job, so I feel the
            importance of showing off my grades. My GPA was 4.1/4.3 out of 50
            credits please hire me. During my studies, I interned at{' '}
            <Link href="https://oa.media/" target="_blank">
              OrangeAd
            </Link>
            ,{' '}
            <Link href="https://www.sap.com/canada/index.html" target="_blank">
              SAP
            </Link>{' '}
            and{' '}
            <Link href="https://www.autodesk.ca/en" target="_blank">
              Autodesk
            </Link>{' '}
            as a Software Developer. I am currently at{' '}
            <Link href="https://videri.com/" target="_blank">
              Videri
            </Link>{' '}
            as a Backend Developer.
          </p>
          <br />
          <p>
            OrangeAd is a digital signage company. Their main product is a
            display for advertisers with some proprietary features. As the
            company was fairly new, I was tasked with developing the editor for
            advertisers to customize the layout of their ad. Afterwards I was
            responsible for creating the ad display page which would be the app
            running on the tablets displaying the advert. After that was done, I
            was mainly working on fixing bugs at which point I got very bored of
            the internship.
          </p>
          <br />
          <p>
            At SAP, I was mainly working on writing Front-End tests for their
            Marketing Cloud platform. Not much to say about this internship
            except that I was very bored and depressed.
          </p>
          <br />
          <p>
            At Autodesk, I was given various tasks. My first tasks was to create
            a mock server for one of their GraphQL service as a workaround
            authentication complications. Afterwards, I worked on writing
            functions to serialize a complex data structure to a JSON format. I
            was happy to see a use case of Polymorphism in a real world
            scenario. Because the data structure was composed of different data
            types in a tree, Polymorphism was used to automatically determine
            which function to call to convert them into the correct string. Once
            that was completed, I worked on a script to automate documentation
            by converting a GraphQL schema into an RST file. Lastly, I worked on
            a front-end to display a graph data structure. This was accomplished
            using d3-graphviz to render the graph.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}
