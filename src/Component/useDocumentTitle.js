import {useEffect} from 'react';


/**
 *  updates document title 
 * @param {object} title 
 */
const useDocumentTitle = (title) => {
  
  useEffect(()=> {
    document.title = title;
  }, [title])

};


export default useDocumentTitle;