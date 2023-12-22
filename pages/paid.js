// Import necessary modules and styles
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import Tick from '../img/greentick.jpg';

export default function Paid() {
  return (
    <Layout isWhiteBackground={true}>
      <Head>
        <title>Crop Machine $200.99 - Your Bank App</title>
      </Head>

        {/* Main content */}
        <div className="flex items-center justify-center h-screen">
            <div className="p-8 rounded-md text-center">
                <div className='flex justify-center'>
                <Image src={Tick} width={30}/>
                </div>
                <h1 className="text-2xl font-semibold my-4">Payment Successful!</h1>
                <p className="text-lg text-gray-700">
                Thank you for your purchase of the Crop Machine for $200.99.
                </p>
            </div>
        </div>

    </Layout>
  );
}
