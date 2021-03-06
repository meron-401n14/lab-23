import {useState, useEffect} from 'react';
import socket from 'socket.io-client';



const useSocket = (url, event) => {
  
  const [socketData, setSocketData] = useState();
  const [connected, setConnected] = useState(false);
  useEffect(()=>{
    let client = socket.connect(url);

    client.on('connect', ()=>{
      setConnected('connected');
    })

    client.on('disconnect', ()=>{
      setConnected('disconnected...');
    })
    client.on(event, data=>{

      setSocketData(data);

    })
   }, [url, event])


  

   return {connected, socketData}
   
  };
  
  export default useSocket;


  

  