import Head from 'next/head';
import Layout from '../components/Layout';
import { useRouter } from 'next/router'; // Import useRouter hook
import { AiOutlineGoogle } from 'react-icons/ai';

const ConfirmPayment = () => {
  const router = useRouter();

    // handle cancellation
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
        <h2 className="text-3xl font-semibold text-center mb-6">Confirm Your Payment</h2>
        <p className="text-center mb-4">Please review your payment details before confirming.</p>

        {/* Payment Details Section (Adjust this based on your application) */}
        <div className="border-b-2 pb-4 mb-4">
          {/* Display payment details here */}
          <p className="text-lg font-semibold">Item: Crop Machine</p>
          <p className="text-sm">Price: $200.99</p>
        </div>
        <button
          className="bg-black text-white w-full rounded-lg p-4 hover:bg-green-600 transition"
        >
          Confirm Payment
        </button>

        {/* Cancel Button */}
        <div className="mt-4">
          <button
            onClick={handleCancel} // Call the handleCancel function on button click
            className="text-white bg-red-500 w-full rounded-lg flex justify-center items-center p-1 text-center mt-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default ConfirmPayment;
