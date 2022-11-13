
import React from 'react';

export default function NotesMapper(props)
{
    

    

  return (

      <div key={props.index}>
          <p>date: {props.date}</p>
          <p>Note: {props.comment}</p>
          <p>Battery level: {props.level}</p>
      </div>
          
          
    
  )
}
