import Head from "next/head";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { FaTractor } from 'react-icons/fa';
import Layout from '../components/Layout'

// import image
const GiCash = dynamic(() => import('react-icons/gi').then((module) => module.GiCash), { ssr: false });
const GiCycle = dynamic(() => import('react-icons/gi').then((module) => module.GiCycle), { ssr: false });
const FaBrain = dynamic(() => import('react-icons/fa').then((module) => module.FaBrain), { ssr: false });
const FaRegLightbulb = dynamic(() => import('react-icons/fa').then((module) => module.FaRegLightbulb), { ssr: false });

export default function Home() {
    return (
      <Layout isWhiteBackground={false}>
        <div className="md:px-5 w-full max-w-5xl mx-auto pt-20 pb-10 ">
            <Head>
            <title>Trackie</title>
            </Head>            
            <div>
                <h1 className="text-slate-900 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">Harvesting Trust, Growing Futures.</h1>
            </div>  

            <div>
                <p className="mt-6 text-base md:text-lg text-slate-600 text-center max-w-3xl mx-auto">Cultivate success with our farmer-focused FinTech: simplify records, predict revenue, and bridge the gap for a prosperous agriculture future!</p>
            </div>               
            <Link href='/addbankaccount' legacyBehavior>
                <button className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black gap-1">
                    <FaTractor className="fill-current w-5 h-5" />    
                    <p>Get Started</p>          
                </button>            
            </Link>   

            <div className="mx-1">
            <div className="mx-auto grid justify-center gap-4 md:grid-cols-2 pt-20">
              <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><GiCash /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">Streamlined Finances</h3>
                    <p className="text-sm text-gray-500">Simplify financial tracking and record-keeping effortlessly with our software solution.</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><GiCycle /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">Precision through Automation</h3>
                    <p className="text-sm text-gray-500">Achieve unparalleled accuracy by automating financial processes, ensuring banks have trustworthy data for evaluations.</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><FaBrain /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">Smart Predictions with Machine Learning</h3>
                    <p className="text-sm text-gray-500">Leverage cutting-edge machine learning to predict monthly yields, empowering regular revenue estimations.</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><FaRegLightbulb /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">Proactive Decision-Making</h3>
                    <p className="text-sm text-gray-500">Stay ahead with our software's regular revenue estimations, enabling banks to make strategic decisions based on real-time financial insights.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </Layout>        
    );
}