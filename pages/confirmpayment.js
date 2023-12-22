import Head from 'next/head';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbCoin } from "react-icons/tb";
import { IoCall } from "react-icons/io5";

const ConfirmPayment = () => {
  const router = useRouter();

  // handle confirmation
  const handleConfirm = () => {
    router.push('/paid');
  };

  // handle cancellation
  const handleCancel = () => {
    router.push('/pay');
  };

  return (
    <Layout isWhiteBackground={true}>
      <Head>
        <title>Confirm Payment - Trackie</title>
      </Head>
      <div className="mt-10 p-8 md:p-10 text-gray-800 rounded-lg w-full max-w-md mx-auto bg-white">
        <h2 className="text-3xl font-semibold text-start md:text-center mb-6">Confirmation</h2>
        <p className="text-start md:text-center mb-4">
          Please review your payment details before confirming.
        </p>

        {/* Payment Details Section (Adjust this based on your application) */}
        <div className='class="relative overflow-hidden rounded-lg border bg-white p-4 shadow"'>
          <div className="pb-4 mb-4">
            <p className="text-sm font-semibold">Transfer To</p>
            <div className='flex gap-2 items-center text-sm'>
              <IoPersonCircleOutline />
              <p>Joshua Tan</p>
            </div>
          </div>

          <div className="pb-4 mb-4">
            <p className="text-sm font-semibold">Available Balance</p>
            <div className='flex gap-2 items-center text-sm'>
              <TbCoin />
              <p className="text-sm">$ 2,000</p>
            </div>
          </div>

          <div className="">
            <p className="text-sm font-semibold">Phone Number</p>
            <div className='flex gap-2 items-center text-sm'>
              <IoCall />
              <p className="text-sm">93-708-500</p>
            </div>
          </div> 
        </div>

        <div className="flex justify-between py-10 items-center">
            <p className="text-sm font-semibold">Total Amount: </p>
            <p className="text-xl font-extrabold">$50.99</p>
          </div>         

        <div className='flex justify-center my-2'>
          <button
            onClick={handleConfirm}        
            className="bg-black text-white w-full md:w-2/3 rounded-lg p-3 hover:bg-cyan-500 transition"
          >
            Confirm Payment
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default ConfirmPayment;