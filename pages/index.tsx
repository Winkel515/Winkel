import Image from 'next/image';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <p>Thank you Ally Zhang for being my frontend slave!</p>
      <div className="flex content-center justify-center">
        <Image src="/pepehands.png" alt="Logo" width={985} height={751} />
      </div>
    </div>
  );
}
