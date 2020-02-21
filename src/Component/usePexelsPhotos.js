  
import {useState, useEffect} from 'react';
import fetch from 'node-fetch';
//const { toArray } = require('util');

/**
 * A component which fetch data from API pexeles.com 
 * and return json data based of query 
 * and export usePexelsPhotos component 
 */


const API_KEY = '563492ad6f91700001000001baf1bd40e4ef4d9fbb65204f4377abf9'
//const API_ENDPOINT = 'https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1'
const API_ENDPOINT = 'https://api.pexels.com/v1/search?query=' ;

const apiOptions = {
  'headers': { 'Authorization': API_KEY }
}

const usePexelsPhotos = query => {
  console.log(query);
 
  let url = API_ENDPOINT + query

  const [response, setResponse] = useState();

  useEffect(() => {
    async function fetchIt() {
      let res = await fetch(url, apiOptions);
      let json = await res.json();
      setResponse(json.photos);
    }
    fetchIt();
},[query, url]);

return response;

};



export default usePexelsPhotos;

      
      
     
     
