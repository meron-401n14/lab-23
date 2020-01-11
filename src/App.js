import React, {useState} from 'react';
import useDocumentTitle from './Component/useDocumentTitle';
import useLocalStorage from './Component/useLocalStorage';
import usePexelsPhotos from './Component/usePexelsPhotos';
import './Styles/styles.scss';



function App() {
  const [name, setName] = useState('Sarah Smalls');
  const [size, setSize] = useLocalStorage('lsSize', 3);
  const [query, setQuery] = useState('');
  const photos = usePexelsPhotos(query);
  console.log(photos);




  useDocumentTitle(name);
 
  return (
    <div className="App">
      <input type='text' value={name} onChange={e =>{
        setName(e.target.value);
 }}
   /> 
   <input
        type='number'
        value= {size}
        onChange={e=>{
          setSize(e.target.value);
        }}
        />

    <input 
    type='text'
    value ={query}
    onChange = {e => {
      setQuery(e.target.value)
}}
/>
<div className= 'row' >
  {photos 
       ? photos.map((val, ind)=>{
      return (
        <div className='col' key={ind}> 
         <img   src={val.src.small} alt={val.photographer} /> 
         </div>
         );
}) 
: ''}
</div>

    </div>
  );
}

export default App;
