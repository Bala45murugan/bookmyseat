import React, { useState } from 'react';
import Data from './data.json';

export default function Ticket(){

    const [found,setFound] =useState();
   
    return(
        <>
            {
                Data.map((e,index)=>(
                    e.movies.map((e)=>(
                        <div key={index}>{e.movie1}</div>
                    ))
                ))
            }
            
        </>
    )
}