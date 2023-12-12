import Head from 'next/head';

// import image
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';
import Layout from '../components/Layout';

const dashboard = () => {
  // Create a state with all the posts
  return (
    <Layout isWhiteBackground={true}>
    <div>
      <Head>
        <title>Trackie</title>
      </Head>
      <main className='min-h-screen'>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
      </main>
      </div>
    </Layout>       
  );
}

export default dashboard;