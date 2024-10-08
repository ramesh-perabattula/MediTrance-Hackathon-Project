import React, { useState,useEffect } from 'react';
import '../styles/AutoSug.css';
import axios from 'axios';
  
function Autosug() {
 var [UserInfo, setUserInfo] = useState([]);
  // Fetch userinfo from the server on component mount
  


  const queryParams = new URLSearchParams(window.location.search);  // recieving all values sent through url bu ANY one
  var emailog = queryParams.get('email');
  // successfully fetched email . checked 

const retAgeofUser=async()=>
  {  try {
      console.log(emailog);
      const response = await axios.get(`https://meditrance-api.vercel.app/user_inf/${emailog}`);
      setUserInfo(response.data[0]);
      } catch (error) {
      console.log("email not found");
    }
}

useEffect( ()=>{ // removed arrow func style
retAgeofUser();      // runs it by birth automatically
}, []);
  const [sugdur, setDur] = useState("--");
  const sugDur = async() => {
    let duration;
    let age =UserInfo.age;
    console.log("age is : ",age);
    if(5<=age && age <=12)
        {
            duration=7;
        }
        else if(13<=age && age<=18)
        {
            duration=15;
        }
        else if(19<=age && age<=30)
        {
           duration=25;
        }
        else if(31<=age && age<=65)
        {
          duration=25;
         
        }
        else if(age>=66 && age<=130)
        {
            duration=25;
        }else{
          duration="invalid";
        }
        
        setDur(duration+ " minutes");
    }       
  

  return (
    <div className='suggester'>
        <center>
          <div className='header-auto'>
                  <p id='header-auto-medi'>MediTrance</p>
                  <p id='header-auto-about'>About</p>
           </div>
     
           <div className='sug-form'>
                <h2 id="hedr"> Your Suggested duration for meditation is :</h2>
                 <br></br>
                 <h2 id="hedr"> {sugdur}</h2>
                <button onClick={sugDur} id="sug-but">Suggest Duration</button>
                <br></br>
                <p id="note">Note: This meditation duration Suggested based on your age {UserInfo.age} years that you've  entered during Registration.</p>
           </div>

        </center>
      
    </div>
  );
}


export default Autosug;