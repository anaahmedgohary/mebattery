
import React from 'react';

export default function NotesMapper(props)
{
    

    

  return (

      <div id={props.id} className="text-center border border-dark">
         <div>
              <p>date: {props.date}</p>
              <p>well</p>
             <p>Note: {props.comment}</p>
             <p>Battery level: {props.level} %</p>
         </div>
      </div>
          
          
    
  )
}
