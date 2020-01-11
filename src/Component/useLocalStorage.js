
import { useState, useEffect } from "react";

function getInitialValue(key, defaultValue){
  let value;
  try {
    value = window.localStorage.getItem(key);
  } catch(e){
    console.error(e);
    value = defaultValue;
  }
  return value;
}
const useLocalStorage = (key, defaultValue) => {
  const [size, setSize] = useState(getInitialValue(key, defaultValue));
  useEffect(()=> {
    
   
    try{
      window.localStorage.setItem(key, size);
    } catch(e) {
      console.error(e);
    }
    window.localStorage.setItem('lsSize', size)
  }, [size, key]);

  return [size, setSize];
}


export default useLocalStorage;