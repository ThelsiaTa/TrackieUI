import Head from 'next/head';

// import image
import Header from '../components/Header';
import TopISCards from '../components/IncomeStatement/TopISCards';
import Layout from '../components/Layout';
import Expenses from '../components/IncomeStatement/Expenses';
import Income from '../components/IncomeStatement/Income';

// income income and expenses

const IncomeStatement = () => {
  // Create a state with all the posts
  return (
    <Layout isWhiteBackground={true}>
      <Head>
        <title>Trackie</title>
      </Head>
      <main className='min-h-screen'>
        <div className='flex justify-between px-4 pt-4'>
          <h2 className='text-2xl font-semibold'>Income Statement (Feb 2023)</h2>
          <div></div>
        </div>
        <TopISCards />
        <div className='p-4 grid md:grid-cols-2 grid-cols-1 gap-4'>
          {/*create an edit feature to input manually*/}
          <Income />
          <Expenses />          
        </div>
      </main>
      <div className="flex flex-row items-center justify-between py-10">
        <a
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 ml-auto"
          href="/balancesheet"
        >
          Balance Sheet
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

export default IncomeStatement;