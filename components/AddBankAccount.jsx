import { useRouter } from "next/router";
import { auth } from "../utils/firebase";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useState } from "react";

const BankAccount = () => {
  const router = useRouter();
  const [showConfirmLink, setShowConfirmLink] = useState(false);

  const handleLinkAccount = async () => {
    try {
      toast.success("Directing to the Bank Account page", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      router.push("/addbankaccount");
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
    }
  };  


  return (
    <div className="mt-10">
      {showConfirmLink && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-white rounded-lg p-4 z-50 mx-4 md:mx-0">
            <p className="mb-4">Do you want to link your bank account to the application?</p>
            <div className="flex justify-end">
              <button className="text-white bg-red-500 py-2 px-4 rounded-lg mr-2" onClick={handleLinkAccount}>
                Link account
              </button>
              <button className="text-gray-600 bg-gray-300 py-2 px-4 rounded-lg" onClick={() => setShowConfirmLink(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}        
      <div className="mt-10 mb-5 pt-4 px-4">
        <h3 className="text-lg font-semibold">Add Bank Account</h3>
        <p className="text-sm font-normal">Link your bank account to the application.</p>
        <button
          className="text-white bg-red-500 py-1 px-4 rounded-lg text-end mt-5"
          onClick={() => setShowConfirmLink(true)}
        >
          Link Bank Account
        </button>
      </div>
      <hr/>
    </div>
  );
};

export default BankAccount;