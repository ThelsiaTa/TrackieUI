import Head from 'next/head';
import Layout from '../components/Layout';
import DropDownBank from '../components/DropDownBank.jsx';
import { useRouter } from 'next/router';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase.js";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbCoin } from "react-icons/tb";
import { IoCall } from "react-icons/io5";

const ConfirmPayment = () => {
  const router = useRouter();
  const user = useAuthState(auth);

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
      {/* <div classNameName="mt-10 p-8 md:p-10 text-gray-800 rounded-lg w-full max-w-md mx-auto bg-white">
        <h2 classNameName="text-3xl font-semibold text-start md:text-center mb-6">Confirmation</h2>
        <p classNameName="text-start md:text-center mb-4">
          Please review your payment details before confirming.
        </p>

        <div classNameName='classNameName="relative overflow-hidden rounded-lg border bg-white p-4 shadow"'>
          <div classNameName="pb-4 mb-4">
            <p classNameName="text-sm font-semibold">Transfer To</p>
            <div classNameName='flex gap-2 items-center text-sm'>
              <IoPersonCircleOutline />
              <p>Joshua Tan</p>
            </div>
          </div>

          <div classNameName="pb-4 mb-4">
            <p classNameName="text-sm font-semibold">Available Balance</p>
            <div classNameName='flex gap-2 items-center text-sm'>
              <TbCoin />
              <p classNameName="text-sm">$ 2,000</p>
            </div>
          </div>

          <div classNameName="">
            <p classNameName="text-sm font-semibold">Phone Number</p>
            <div classNameName='flex gap-2 items-center text-sm'>
              <IoCall />
              <p classNameName="text-sm">93-708-500</p>
            </div>
          </div> 
        </div>

        <div classNameName="flex justify-between py-10 items-center">
            <p classNameName="text-sm font-semibold">Total Amount: </p>
            <p classNameName="text-xl font-extrabold">$50.99</p>
          </div>         

        <div classNameName='flex justify-center my-2'>
          <button
            onClick={handleConfirm}        
            classNameName="bg-black hover:bg-gray-700 text-white w-full md:w-2/3 rounded-lg p-3 transition"
          >
            Confirm Payment
          </button>
        </div>
      </div> */}
  <div className='py-6'>
<DropDownBank/>

</div>

    </Layout>
  );
}

export default ConfirmPayment;