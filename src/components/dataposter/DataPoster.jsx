import axios from 'axios';
import React from 'react'

export default function DataPoster()
{
  
  function handelsubmit(e)
  {
    e.preventDefault();
    console.log("form submitted")
  }

  return (
      <div>
          

      <form onSubmit={handelsubmit}>
        <label htmlFor="sdf">aaaaaaaaaaa</label>
              <input type="text" name="posttitle" id="" />
              <input type="text" name="imageurl" id="" />
              <input type="text" name="eventdate" id="" />
          </form>

    </div>
  )
}
