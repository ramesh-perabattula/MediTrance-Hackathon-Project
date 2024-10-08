import React, { useState, useEffect ,useRef } from 'react';
import '../styles/Advanced.css';
import axios from 'axios';

import Timer from './sub-components/Timer';

function Advanced () 
{

  const queryParams = new URLSearchParams(window.location.search); // recieving all values sent through url form ANY ! where
  const emailog = queryParams.get('email'); // fetching only email value out of all values
                                            // 'email' is taken as email= mention in the url from sender // checked email recieved : positive ref- emailog

  var [favSesses, setFavSess] = useState([]);

  const getFavSess=async()=>{
    try {
      console.log(emailog);
      const response = await axios.get(`https://meditrance-api.vercel.app/favsess/${emailog}`);
      setFavSess(response.data);
      } catch (error) {
      console.log("favsess not found");
    }
  }
  useEffect(()=>{
    getFavSess()       // runs it by birth automatically
}, []);



const [totalSeconds, setTotalSeconds]=useState(0);

  const howmedit=()=>{
    window.location.href='/howtomeditate';
  }
  const clickAdd=()=>{
    window.location.href=`/addfav-session?email=${emailog}`;
  }
  const autogo=()=>{
    window.location.href=`/Autosug?email=${emailog}`;   //  throwing email for automatic dur suggester
  }
  
  const onDeleteFav=async (fid)=>{
    try {
      await axios.delete(`https://meditrance-api.vercel.app/favsess/${fid}`);
      getFavSess();
    } catch (error) {
      console.error('Error deleting fav session:', error);
    }
  }
  const onSetFav=(minp,secp)=>{
    // setMinutes(minp);
    // setSeconds(secp);
    const tsecp =(minp*60) +secp;
setTotalSeconds(tsecp);

  }
  const gomed=()=>{
    window.location.href='/';
  }
  const goabout=()=>{
    window.location.href='/About';
  }

  return (
    <div className='Guest'>
                <div className='headr'>
                        <p id='headr-medi'onClick={gomed}>MediTrance</p>
                        <p id='headr-about'onClick={goabout}>About</p>
                </div>

                <div className='navbar'>
                        <li class="navbar-list" onClick={autogo}>Auto Suggestions</li>       
                        <li class="navbar-list" onClick={howmedit}>How to meditate</li>
                </div>

                <div className="hero">
                        <div >
                                <Timer totalSeconds={totalSeconds} setTotalSeconds={setTotalSeconds}  />
                        </div>

                        <div className="favorites">
                                <center><p id="favorites-tag"> Favourites</p></center>
                                <center><p id="addses-btn" onClick={clickAdd}>Add sessions</p></center>

                                <p id="favorites-list"> <strong>Your favorite sessions list  is here
                                { favSesses.map( (each_elem)=>(
                                                        <li key={each_elem._id}>
                                                        Title - {each_elem.title} {" -"} {each_elem.min}mins : {each_elem.sec} secs{' '}
                                                        <button id="del-ses-btn" onClick={() => onDeleteFav(each_elem._id)}>Delete</button> {'   '}
                                                        <button id="set-ses-btn" onClick={() => onSetFav(each_elem.min,each_elem.sec)}>Set</button>
                                                    </li>
                                                    )
                                                )
                                }</strong>
                                </p>

                        </div>
                    
            </div>

    </div>
  );
};

export default Advanced;
