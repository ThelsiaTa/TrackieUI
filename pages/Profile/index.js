import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Head from "next/head";
import { collection, deleteDoc, doc, onSnapshot,query, where,} from "firebase/firestore";
import DeleteAccount from "../../components/DeleteAccount";
import { useRouter } from "next/router";

//
import { getAuth, updateProfile } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import Layout from "../../components/Layout";

const Setting = () => {
  const [nickname, setNickname] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [user, loading] = useAuthState(auth);
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const route = useRouter();

  const getData = async (searchQuery) => {
    if (loading) {
      return;
    }
    if (!user) {
      return route.push("/auth/Login");
    }
  
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, where("user", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let filteredPosts = snapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((post) => {
          const subject = post.subject && post.subject.toLowerCase();
          const description = post.description && post.description.toLowerCase();
          const query = searchQuery && searchQuery.toLowerCase();
          return (subject && subject.includes(query)) || (description && description.includes(query));
        });
      setPosts(filteredPosts);
    });
    return unsubscribe;
  };  
  // Get users data
  useEffect(() => {
    getData(searchQuery);
  }, [user, loading, searchQuery]);

  const handleSaveChanges = async () => {
    // Update the user's display name and photo URL in Firebase
    const profileUpdates = {};
    if (nickname.trim() !== "") {
      profileUpdates.displayName = nickname;
    }
    if (photoURL.trim() !== "") {
      profileUpdates.photoURL = photoURL;
    }
    updateProfile(auth.currentUser, profileUpdates)
      .then(() => {
        // Display a success message and redirect the user
        toast.success("Profile updated successfully!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        return route.push("/Profile");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
      });
  };  
  
  return (
    <Layout isWhiteBackground={true}>
    <div className="md:px-5 md:py-30 w-full max-w-2xl mx-auto pt-20">
      <Head>
        <title>Trackie</title>
      </Head>
      <div>
        <h1 className="text-start font-semibold text-5xl mb-10 md:mb-20 text-black">Setting</h1>        
        <DeleteAccount />
      </div>
    </div>
    </Layout>    
  );
};

export default Setting;