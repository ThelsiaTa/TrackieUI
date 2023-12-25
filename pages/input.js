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
      
      
    </Layout>       
  );
}

export default input;