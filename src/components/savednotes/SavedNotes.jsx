import axios from 'axios';
import React, { useEffect, useState } from 'react';

import NotesMapper from './NotesMapper';


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
    const [notesArray, setNotesArray] = useState(null)

    useEffect(() =>
    {
        axios
            .get(`${netlifyURL}/savednotes/`)
            .then((response) =>
            {
            // setSavedNote(response.data);
            //setSavedNote(response.data);
           // console.log(response.data[1].comment);
            //setSavedNote(response.data[0].comment);
           // setSavedNote([response.data]);
            setSavedNote(response.data);
            
        })
       
    }, []);

    useEffect(() =>
    {
        console.log(savedNote);
        setNotesArray(savedNote);
    }, [savedNote])

    



    return (<div>

        <div className='text-center border border-dark'>
            <h1>Here are your notes</h1>
        </div>

        

        <div>
            {
                notesArray.map((item, index) =>
                {
                    return (

                        <NotesMapper
                            index={index}
                            date={item.date}
                            comment={item.comment}
                            level={item.level}
                        />
                        
                    )
                })
            }
        </div>
        

          
    </div>
  )
}
