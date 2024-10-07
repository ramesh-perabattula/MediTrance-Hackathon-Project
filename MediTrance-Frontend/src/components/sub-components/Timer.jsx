import React, { useState, useEffect ,useRef } from 'react';
import './substyles/Timer.css';

import audioFile1 from '../../assets/bell-1.wav';
import audioFile2 from '../../assets/bell-2.wav';
import audioFile3 from '../../assets/bell-3.wav'; 

function Timer ({totalSeconds , setTotalSeconds }) {

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedBell, setSelectedBell] = useState('bell1'); // Default selected radio button
  const audioRef1 = useRef(new Audio(audioFile1)); 
  const audioRef2 = useRef(new Audio(audioFile2));
  const audioRef3 = useRef(new Audio(audioFile3));
  const [isPlaying, setIsPlaying]=useState(false);
  
  const stopAudio = (audioRef) => {
    audioRef.current.pause();
    // audioRef.current.currentTime = 0;  // Reset to the start
  };
  

  useEffect(() => {
    let interval;
    if (isRunning && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds(totalSeconds => totalSeconds - 1);
      }, 1000);
    } else if (totalSeconds === 0 && isRunning) {
      clearInterval(interval);
      // setIsRunning(false);

      if(!isPlaying){
            // then the below alarm will be played continously
            switch (selectedBell) {
              case 'bell1':
                audioRef1.current.play();
                break;
              case 'bell2':
                audioRef2.current.play();
                break;
              case 'bell3':
                audioRef3.current.play();
                break;
              default:
                break;
            }

      }
      setIsPlaying(true);
    }
   

    return () => clearInterval(interval);
  }, [isRunning, totalSeconds]);

  useEffect(() => {
    setMinutes(Math.floor(totalSeconds / 60));
    setSeconds(totalSeconds % 60);
  }, [totalSeconds]);

  const handleStartStop = () => {
    if(isPlaying){ // u want to stop
      
      // Stop all audio before playing the selected bell
    stopAudio(audioRef1);
    stopAudio(audioRef2);
    stopAudio(audioRef3);
    setIsPlaying(false);
    }
    setIsRunning(!isRunning);
   
  };

  const handleReset = () => {
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  const handleMinuteChange = (e) => {
    const newMinutes = parseInt(e.target.value);
    setMinutes(newMinutes);
    setTotalSeconds(newMinutes * 60 + seconds);
  };
  const handleMinuteChange1= (e) => {
    const newMinutes = parseInt(e.target.value);
    setMinutes(newMinutes);
    setTotalSeconds(newMinutes * 60);
  };

  const handleSecondChange = (e) => {
    const newSeconds = parseInt(e.target.value);
    setSeconds(newSeconds);
    setTotalSeconds(minutes * 60 + newSeconds);
  };
  const handleBellChange = (e) => {
    setSelectedBell(e.target.id);
  };


  return (
    <div className='timer'>
         <center>
                <p id='timer-times'>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
                <div>
                <label htmlFor="rangein">Min: </label>
                <input id="rangein" type="range" min="0" max="120" step="1" value={minutes} onChange={handleMinuteChange} />
                </div>
                <div>
                <label htmlFor="rangein">Sec: </label>
                <input id="rangein" type="range" min="0" max="59" step="1" value={seconds} onChange={handleSecondChange} />
                </div>
                <button id='button-str' onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
                <button id='button-reset' onClick={handleReset}>Reset</button>
                <div className='button-timer'></div>
                <button className='button-minset' onClick={handleMinuteChange1} value={5} >5min</button>
                <button  className='button-minset' onClick={handleMinuteChange1} value={10} >10min</button>
                <button  className='button-minset' onClick={handleMinuteChange1} value={15} >15min</button>
                <button  className='button-minset' onClick={handleMinuteChange1} value={30} >30min</button>
                <br/>
               
                <br></br>
            <div class="radio-button-container">
                        <div class="radio-button">
                        <input type="radio" className="radio-button__input" id="bell1" name="radio-group" onChange={handleBellChange}/>
                        <label class="radio-button__label" for="bell1">
                        <span class="radio-button__custom"></span>
                        Bell 1
                        </label>
                        </div>
                        <div class="radio-button">
                        <input type="radio" class="radio-button__input" id="bell2" name="radio-group" onChange={handleBellChange}/>
                        <label class="radio-button__label" for="bell2">
                        <span class="radio-button__custom"></span>
                        Bell 2
                        </label>
                        </div>
                        <div class="radio-button">
                        <input type="radio" class="radio-button__input" id="bell3" name="radio-group" onChange={handleBellChange}/>
                        <label class="radio-button__label" for="bell3">
                        <span class="radio-button__custom"></span>
                        Bell 3
                        </label>
                        </div>
            </div>
      </center>
</div>
  );
};

export default Timer;
