import AllDetails from '../components/confession/AllDetails';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { FaPaperPlane } from 'react-icons/fa';
import { useAuthState } from "react-firebase-hooks/auth";
import { Hamburger } from "../components/Hamburger";
import { FaUserSecret } from 'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import Head from 'next/head';

export default function Details() {
  const router = useRouter();
  const routeData = router.query;
  const [message, setMessage] = useState("");
  const [allMessage, setAllMessages] = useState([]);
  const [user, loading] = useAuthState(auth);

  //Submit a message
  const submitMessage = async () => {
    //Check if the user is logged
    if (!auth.currentUser) {
      
      toast.error("Login First 💀", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,
    })
    return router.push("/auth/Login");
    };

    if (!message) {
      console.log(message);
      toast.error("Don't leave an empty message 😅", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      return;
    }
    const docRef = doc(db, "posts", routeData.id);
    await updateDoc(docRef, {
      comments: arrayUnion({
        message,
        avatar: auth.currentUser.photoURL,
        userName: auth.currentUser.displayName,
        time: Timestamp.now(),
      }),
    });
    setMessage("");
    toast.success("Commented 👍", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500,})
  };

  //Get Comments
  const getComments = async () => {
    const docRef = doc(db, "posts", routeData.id);
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      setAllMessages(snapshot.data().comments);
    });
    return unsubscribe;
  };

  useEffect(() => {
    if (!router.isReady) return;
    getComments();
  }, [router.isReady]);
  return (
    <div className='w-full max-w-3xl mx-auto'>
    <Head>
      <title>Confessay</title>
    </Head>
    <AllDetails {...routeData}></AllDetails>

    <div className="mt-7">
    <h2 className="font-bold ml-1 mb-1">Reply confession</h2>
      <div className="flex">
        <input
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          type="text"
          value={message}
          placeholder="Add a reply 😀"
          className="bg-white shadow-sm border-2 rounded-md w-50 p-2 mr-1 text-gray-600 text-sm"
        />
        <button
          onClick={submitMessage}
          className="bg-cyan-500 text-white py-2 px-4 text-sm rounded-md"
        >
          <FaPaperPlane className="text-l"/>
        </button>
      </div>
      <h2 className="font-bold mt-10 ml-1">Comments</h2>
      <div className="w-26 ">
      { allMessage?.map((message) => (
        <div className="py-6 mb-2 text-base bg-white rounded-lg" key={message.id}>
          <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                {user && (
                  <div>
                    <img src={message.avatar} className="mr-2 w-6 h-6 rounded-full"/>
                  </div>
                )}
                {!user && (
                  <div className="text-gray-900 mr-1">
                    <FaUserSecret size={20}/>
                  </div>
                )}
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">{message.userName}</p>
                <p className="text-sm text-gray-500 ">{message.time.toDate().toDateString()}</p>
              </div>
          </div>
          <p className="text-gray-600 break-words">{message.message}</p>
        </div>  
      ))}
      </div>
    </div>
  </div>
  );
}
