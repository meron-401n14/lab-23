import React, {useState} from 'react';
import useDocumentTitle from './useDocumentTitle';
import useLocalStorage from './useLocalStorage';
import usePexelsPhotos from './usePexelsPhotos';
import '../Styles/styles.scss';

/**
 * @function Photo  Initialize state variables name, size and query 
 * @return images, localStorage size & change name based of input name in the photo page 
 * export component Photo 
 */

function Photo() {
  const [name, setName] = useState('Sarah Smalls');
  const [size, setSize] = useLocalStorage('lsSize', 3);
  const [query, setQuery] = useState('');
  const photos = usePexelsPhotos(query);
  //console.log(photos);
  useDocumentTitle(name);
  return (
    <div className="App">
     <div className="row">
       <div className="form-group">
         <label> Name:</label>
      <input 
type='text' value={name} onChange={e =>{
  setName(e.target.value);
}}
/> 
</div>
<div className="form-group">
  <label>Locla Storage size</label>
   <input
        type='number'
        value= {size}
        onChange={e=>{
          setSize(e.target.value);
        }}
        />
</div>
<div className="form-group">
  <label>Choose your photo Gallery Here:</label>
    <input 
    type='text'
    value ={query}
    onChange = {e => {
      setQuery(e.target.value)
}}
/>

</div>
</div> 
<div className= 'row' >
  {photos 
       ? photos.map((val, ind)=>{
      return (
        <div className='col' key={ind}> 
         <img   src={val.src.small} alt={val.src.photographer} /> 
         </div>
         );
}) 
: ''}
</div>

    </div>
  );
}

export default Photo;




 



        





