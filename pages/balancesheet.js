import Head from 'next/head';
import { useState, useEffect } from 'react'; // Import useState and useEffect
import Header from '../components/Header';
import TopBSCards from '../components/BalanceSheet/TopBSCards';
import Layout from '../components/Layout';
import Liabilities from '../components/BalanceSheet/Liabilities';
import Assets from '../components/BalanceSheet/Assets';

const BalanceSheet = () => {
  // State to hold the current date
  const [currentDate, setCurrentDate] = useState('');

  // Effect to set the current date on component mount
  useEffect(() => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    setCurrentDate(formattedDate);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <Layout isWhiteBackground={true}>
      <Head>
        <title>Trackie</title>
      </Head>
      <main className='min-h-screen'>
        <div className='flex justify-between px-4 pt-4'>
          <h2 className='text-2xl font-semibold'>Balance Sheet ({currentDate})</h2>
          <div></div>
        </div>
        <TopBSCards />
        <div className='p-4 grid md:grid-cols-2 grid-cols-1 gap-4'>
          <Assets />
          <Liabilities />          
        </div>
      </main>
    </Layout>       
  );
}

export default BalanceSheet;