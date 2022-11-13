import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import $ from "jquery";
import NotesMapper from './NotesMapper';


export default function SavedNotes()
{
    
    //const localURL = "http://localhost:8080";
    const netlifyURL = "https://backend123.netlify.app/.netlify/functions/api";
    const baseURL =  "https://backend123.netlify.app/.netlify/functions/api/savednotes"
    //const baseURL = "https://backend-mebattery.vercel.app/mebattery"

    // React.useEffect(() =>
    // {
    //     axios.get(`${baseURL}/1`).then((response) =>
    //     {
    //         setPost(response.data);
    //     });
    // }, []);

    const [savedNote, setSavedNote] = useState("");
    const [notesArray, setNotesArray] = useState([]);

    useEffect(() =>
    {
        axios
            .get(baseURL)
            .then((response) =>
            {
            setSavedNote(response.data);
            
        })
       
    }, []); 

// is possible that thats it 
// it actually it is    
    if (!savedNote) return null;

    return (<div>

        <div className='text-center border border-dark'>
            <h1>Here are your notes</h1>
        </div>

        {/* <div className='text-center'>
            <button className='btn btn-success'
                onClick={
                    showNotes
                }
            >
                Show
            </button>
        </div> */}

        <div>
            {
                savedNote.map((item, index) =>
                {
                    return (

                        <NotesMapper
                            key={index}
                            date={item.date}
                            comment={item.comment}
                            level={item.level}
                            id={item.id}
                        />
                        
                    )
                })
            }
        </div>
        

          
    </div>
  )
}
