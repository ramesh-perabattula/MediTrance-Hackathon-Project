import React, { useState, useEffect ,useRef } from 'react';
import '../styles/Guest.css';
import Timer from './sub-components/Timer';

function Guest () 
{

const [totalSeconds, setTotalSeconds]=useState(0);

const gomed=()=>{
    window.location.href='/';
  }
  const goabout=()=>{
    window.location.href='/About';
  }

  return (
    <div className='Guest'>

        <div className='header'>
            <p id='header-medit' onClick={gomed}>MediTrance</p>
            <p id='header-abou'onClick={goabout}>About</p>
        </div>

        <center>
            <Timer   totalSeconds={totalSeconds} setTotalSeconds={setTotalSeconds}    />
        </center>
    
    </div>
  );
};

export default Guest;
