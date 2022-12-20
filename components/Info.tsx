import Image from 'next/image';
import Link from 'next/link';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Info() {
  return (
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
      <h2>Concordia University</h2>
      <div className="flex">
        <Link target="_blank" href="https://www.linkedin.com/in/winkel-yin/">
          <LinkedInIcon />
        </Link>
        <Link target="_blank" href="https://github.com/Winkel515">
          <GitHubIcon />
        </Link>
      </div>
    </div>
  );
}
