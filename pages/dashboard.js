import { useEffect, useState } from "react";
import { db, auth } from "../utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import Head from 'next/head';

const dashboard = () => {
  // Create a state with all the posts
  return (
    <div>
      <Head>
        <title>Trackie</title>
      </Head>
      <div className="md:p-5 w-full max-w-3xl mx-auto pt-20">

      </div>
      </div>
  );
}

export default dashboard;