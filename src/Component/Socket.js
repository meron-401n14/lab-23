
import React, {useState} from 'react';
import useSocket from '../useSocket';


/**
 * @function socket fetch event from localhost port 3005 
 * display the connection status connected/disconnect
 * and send message 
 */


function Socket(){

  const[message, setMessage]= useState();
  const {connected, socketData} = useSocket('http://localhost:3005', 'read message');

  /**
   * a handler to send a message while press enterkey 
   * @param {object} e 
   */


  const handleEnter = e => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };
  const sendMessage = e => {
    e.preventDefault();
  setMessage('');
  };

  /**
   * render DOM 
   */
  
  return(
    <div className='row'>
    <div className= "col-md-6">
    <div>Socket message is:{socketData}</div>
    <p> Connection status: {connected.toString()}</p>
    <form  onSubmit={handleEnter} >
          <input
            type="text"
            value={message}
            placeholder="Type a message and hit ENTER"
          />
        </form>
    </div>
    </div>
  )
}
            

            
            






export default Socket;
  


  


  
 

  



