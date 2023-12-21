// to a qr scanner (react qr scanner youtube tutorial needed), nest qr 
// https://www.qr-code-generator.com    http://<Local IP Address>:<port number>

import Head from 'next/head';
import QRScanner from '../components/QRScanner';
import Layout from '../components/Layout';
import NETS from '../img/financelogo/NETS.jpg';
import DuitNow from '../img/financelogo/DuitNow.jpg';
import Image from 'next/image';

export default function Pay() {
  return (
    <Layout isWhiteBackground={true}>
      <Head>
        <title>Your Bank App</title>
      </Head>
      <main className='min-h-screen'>
        <div className="text-center mt-8 mb-4">
          <p className="text-lg font-semibold">Supported QR Codes</p>
          <div className="flex justify-center items-center space-x-4">
            <div className="relative w-16 h-16">
              <Image src={NETS} alt="NETS Logo" layout="fill" objectFit="contain" />
            </div>
            <div className="relative w-16 h-16">
              <Image src={DuitNow} alt="DuitNow Logo" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
        <QRScanner />
      </main>
    </Layout>       
  );
}
