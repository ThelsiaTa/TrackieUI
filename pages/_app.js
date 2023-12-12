import Layout from '../components/Layout'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider>
        <ToastContainer limit={1}/>
        <Component {...pageProps} />
    </ChakraProvider>
  );

}

export default MyApp
