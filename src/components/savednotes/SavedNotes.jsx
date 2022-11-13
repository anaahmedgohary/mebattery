import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SavedNotes()
{
    
    //const localURL = "http://localhost:8080";
    const netlifyURL = "https://backend123.netlify.app/.netlify/functions/api"
   // https://backend123.netlify.app/.netlify/functions/api/savednotes
    //const baseURL = "https://backend-mebattery.vercel.app/mebattery"
    useEffect(() =>
    {
        axios
            .get(`${netlifyURL}/savednotes`)
            .then((response) =>
            {
                // setSavedNote(response.data);
                setSavedNote(response.data);
                console.log(response.data);
            })
            .catch((error) =>
            {
                console.error(`"unsuccess damn the kids" + ${error}`);
            })
        
        
        
    }, []);

    const [savedNote, setSavedNote] = useState([]);





    return (<div>


        <div className='text-center border border-dark'>
            <h1>Here are your notes</h1>
        </div>

        

      
        <div>
            {
                
                    savedNote.map((item, index) =>
                    {
                        return (
                            <div key={index}>

                                <div className='border border-dark text-center'>
                                    <p>date: {item.date}</p>
                                    <p>Note: {item.comment}</p>
                                    <p>Battery level: {item.level}</p>
                                </div>

                            </div>
                        )
                    })
                
            }
        </div>
        
        <div>
            <p>
                
                
            </p>
            <p>
                
            </p>
        </div>

        {/* <div>
            {savedNote}
        </div> */}
          











          
    </div>
  )
}
