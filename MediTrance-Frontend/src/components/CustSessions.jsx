import React, { useState } from 'react';
import axios from 'axios';

import '../styles/CustSessions.css';

function CustSessions ()  {

  const queryParams = new URLSearchParams(window.location.search);  // recieving all values sent through url bu ANY one
  var emailog = queryParams.get('email');
  // successfully fetched email . checked 
    const [favorite,Setfavorite]=useState({
        title:'',
        min:null,
        sec:null,
        email:'' 
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        Setfavorite({ ...favorite, [name]: value });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
            favorite.email=emailog;
            axios.post('http://localhost:5000/favsess',favorite).then(response=>{
                alert("Favorite Succesfully Added!");
                Setfavorite({title:'',min:'',sec:'',email:''});
                /*redirect to loggedin */
                window.location.href=`/loggedin?email=${emailog}`;
            })
        }
        catch(error)
        {
            console.log('Error sending registration request',error);
        }
    };

  return (
    <div className="Addfavorite">
         <div className='addfav-main'>
                <div className='header-cust'>
                    <p id='header-cust-medi'>MediTrance</p>
                    <p id='header-cust-about'>About</p>
                </div>
        </div>
        <center>
            <form class="form" onSubmit={handleSubmit}>
                    <p id="spacer"></p>
                    <input className="addses-input" type="text" placeholder='Enter the Title' name='title' value={favorite.title} onChange={changeHandler} />
                    <br/>  
                    <input className="addses-input" type="number" placeholder='Enter number of minutes'name='min' value={favorite.min} onChange={changeHandler} />
                    <br/>
                    <input className="addses-input" type="number" placeholder='Enter number of seconds' name='sec' value={favorite.sec} onChange={changeHandler} />
                    <br/>
                    <button id="addfav-btn">Add the favorite</button> 
            </form>
       </center>
    </div>
  )
}

export default CustSessions;