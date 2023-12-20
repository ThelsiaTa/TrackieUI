// to a qr scanner (react qr scanner youtube tutorial needed), nest qr 
// https://www.qr-code-generator.com    http://<Local IP Address>:<port number>

import Head from 'next/head';
import QRScanner from '../components/QRScanner';

export default function Pay() {
  return (
    <div>
      <Head>
        <title>QR Code Scanner</title>
        <meta name="description" content="QR Code Scanner using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>QR Code Scanner</h1>
        <QRScanner />
      </main>

      <footer>
        <p>Powered by Next.js</p>
      </footer>
    </div>
  );
}