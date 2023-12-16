import Head from 'next/head';

// import image
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';
import Layout from '../components/Layout';
import CropChart from '../components/CropChart';


const input = () => {
  // Create a state with all the posts
  return (
    <Layout isWhiteBackground={true}>
      <Head>
        <title>Trackie</title>
      </Head>
      <main className='min-h-screen'>
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />          
        </div>        
        <CropChart />
      </main>
      <div className="flex flex-row items-center justify-between py-10">
        <a
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 ml-auto"
          href="/finance"
        >
          Finances
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-4 w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
      </div>
    </Layout>       
  );
}

export default input;