import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

function Resume() {
  return (
    <div>
      <Head>
        <title>Winkel Yin</title>
        <link rel="shortcut icon" href="/feelsbadman.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <embed src="/files/resume.pdf" className="w-screen min-h-screen" />
    </div>
  );
}

export default Resume;
