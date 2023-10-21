import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react';

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const [pos, setPos] = useState(null);
  // const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/get-pos/?format=json') 
      .then((response) => setPos(response.data))
      .catch((error) => console.error(error));
    
  },[])

  // useEffect(() => {
  //   console.log(activeNav)
  // }, [activeNav])

  return (
    <ChakraProvider>
      <Component {...pageProps} posData={pos} />
    </ChakraProvider>
      
  )
}
