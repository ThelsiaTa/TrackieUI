import { AiOutlineGoogle } from "react-icons/ai";
import { signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import Head from "next/head";
import Layout from "../../components/Layout";

const Login = () => {
  const route = useRouter();
  //Sign in with google
  const [user, loading] = useAuthState(auth);
  const googleProvider = new GoogleAuthProvider();

  const displayErrorMessage = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      route.push("/dashboard");
  
      toast.success("Signed in 🤙 ", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } catch (error) {
      if (error.code === "auth/cancelled-popup-request") {
        console.log("Popup request cancelled by user");
      }
      else {
        console.error(error.message);
      }
    }    
  };

  useEffect(() => {
    if (!route || !route.push) return;
    
    if (user) {
      route.push("/dashboard");
    }
  }, [user]);

  return (
    <Layout isWhiteBackground={true}>
      <Head>
        <title>Trackie</title>
      </Head>
      <div className="mt-32 p-4 md:p-10 text-gray-700 rounded-lg w-full max-w-2xl mx-auto">
        <div>
        <h2 className="text-2xl font-semibold text-center">Join Today</h2>
        <div className="">
          <h3 className="py-4 text-center">Enter your email below to create your account</h3>
          <button
            onClick={GoogleLogin}
            className="text-white bg-black w-full rounded-lg flex justify-center align-middle p-4 text-center"
          >
            <div className="flex justify-center gap-2">
              <AiOutlineGoogle className="text-2xl" />
              <p>Sign in with Google</p> 
            </div>
          </button>
        </div>
        </div>
      </div>
    </Layout>
  );
}
 
export default Login;