import axios from 'axios';
import React, { useEffect, useState } from 'react';


export default function SavedNotes()
{
    
    //const localURL = "http://localhost:8080";
    const netlifyURL = "https://backend123.netlify.app/.netlify/functions/api";
   // https://backend123.netlify.app/.netlify/functions/api/savednotes
    //const baseURL = "https://backend-mebattery.vercel.app/mebattery"

    // React.useEffect(() =>
    // {
    //     axios.get(`${baseURL}/1`).then((response) =>
    //     {
    //         setPost(response.data);
    //     });
    // }, []);

    const [savedNote, setSavedNote] = useState(null);

    useEffect(() =>
    {
        axios.get(`${netlifyURL}/savednotes`).then((response) =>
        {
            // setSavedNote(response.data);
            setSavedNote(response.body);
            // console.log(response.data);
        });
            // .catch((error) =>
            // {
            //     console.error(`"unsuccess damn the kids" + ${error}`);
            // })
    }, []);

    



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
                            <p>date: {item.date}</p>
                            <p>Note: {item.comment}</p>
                            <p>Battery level: {item.level}</p>
                        </div>
                    )
                })
            }
        </div>
        

          
    </div>
  )
}
