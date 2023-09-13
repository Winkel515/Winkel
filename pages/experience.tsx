import Link from 'next/link';
import Header from '../components/Header';
import Head from 'next/head';
import Info from '../components/Info';

export default function Experience() {
  return (
    <div className="bg-dark min-h-screen text-white">
      <Head>
        <title>Winkel Yin</title>
        <link rel="shortcut icon" href="/feelsbadman.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="flex mt-10 mx-5 lg:mx-0 flex-col md:flex-col lg:flex-row">
        <Info />

        <div className="flex-1 mr-0 lg:mr-20">
          <h2 className="text-3xl font-bold">Experience</h2>
          <br />
          <p>
            I studied at Concordia University Montreal in Computer Science. I
            dropped out after 2 years with a GPA was 4.1/4.3 with 51/90 credits
            completed. My main reason for enrolling into university was to more
            easily find interships using the co-op program and leave once I
            acquired enough experience to land a full time position. During my
            studies, I interned at{' '}
            <Link
              href="https://oa.media/"
              target="_blank"
              className="underline"
            >
              OrangeAd
            </Link>
            ,{' '}
            <Link
              href="https://www.sap.com/canada/index.html"
              target="_blank"
              className="underline"
            >
              SAP
            </Link>{' '}
            and{' '}
            <Link
              href="https://www.autodesk.ca/en"
              target="_blank"
              className="underline"
            >
              Autodesk
            </Link>{' '}
            as a Software Developer. I am currently at{' '}
            <Link
              href="https://videri.com/"
              target="_blank"
              className="underline"
            >
              Videri
            </Link>{' '}
            as a Backend Developer.
          </p>
          <br />
          <p>
            OrangeAd is a digital signage company with the goal of bringing AI
            into real world advertising. Their main product is a display for
            advertisers that leverages AI to give viewer data to their
            customers. As the company was fairly new, I was tasked with
            developing the editor for advertisers to customize the layout of
            their ad. Afterwards I was responsible for creating the ad display
            page which would be the app running on a screen displaying
            advertisements.
          </p>
          <br />
          <p>
            SAP is a software company that creates products to manage business
            operations and customer relations. I was mainly working on writing
            Front-End tests for their Marketing Cloud platform as well as
            implemented some components on their portal.
          </p>
          <br />
          <p>
            Autodesk is a software company that creates products tailored for
            architecture, engineering, construction, manufacturing, media,
            education, and entertainment industries. I was given various tasks.
            My first tasks was to create a mock server for one of their GraphQL
            service as a workaround authentication complications. Afterwards, I
            worked on writing functions to serialize a complex data structure to
            a JSON format. I was happy to see a use case of Polymorphism in a
            real world scenario. Because the data structure was composed of
            different data types in a tree, Polymorphism was used to dynamically
            determine which function to call to convert them into the correct
            string. Once that was completed, I worked on a script to automate
            documentation by converting a GraphQL schema into an RST file.
            Lastly, I worked on a React application to display a graph data
            structure with the help of d3-graphviz to render the graph.
          </p>
          <br />
          <p>
            Videri is a digital signage company. The job started off with
            writing unit tests for the backend services to get me familiarized
            with the code. Once I started feeling comfortable with how the code
            worked, I was tasked with resolving bugs and implementing endpoints
            to support new features.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}
