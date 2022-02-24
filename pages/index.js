import React, { useState } from 'react';
import Data from './data.json';
import Slider from './slider';

export default function Home(){

  const [input,setInput] = useState();
  const [found,setFound] = useState();
  const movies=[
    {movie:"Beast",img:"/images/beast.jpg"},
    {movie:"KGF 2",img:"/images/kgf.jpg"},
    {movie:"RRR",img:"/images/rrr.jpg"},
    {movie:"Valimai",img:"/images/valimai.jpg"},
    {movie:"Don",img:"/images/don.jpg"}
  ]

  const handleChange=(e)=>{
    const keyword=e.target.value;
    if(keyword!="")
    {
      const list=Data.filter((user)=>{
        return user.id.toLocaleLowerCase().startsWith(keyword.toLocaleLowerCase());
      })
      setFound(list);
      }
      else
      {
        setFound("")
      }
      setInput(keyword)
    }


  return(
    <>
      <nav className='flex flex-row space-x-72 bg-gray-100 h-16'>
        <h1 className='text-2xl font-bold pl-6 pt-4'>Book My Cinema</h1>
        <input type="text" placeholder='Search for movies' className=' mt-4 mb-4 border border-gray-400 px-2 rounded '></input>
        <div>
        <select className='mt-2 bg-gray-100' value={input} onChange={handleChange}>
        <option value="" disabled selected>Select your City</option>
          <option value="chennai">Chennai</option>
          <option value="coimbatore">Coimbatore</option>
          <option value="madurai">Madurai</option>
          <option value="thiruvarur">Thiruvarur</option>
          <option value="thanjavur">Thanjavur</option>
          <option value="kumbakonam">Kumbakonam</option>
          <option value="nagapattinam">Nagapattinam</option>
          <option value="karaikal">Karaikal</option>
          <option value="kodaikanal">Kodaikanal</option>
          <option value="kanchipuram">Kanchipuram</option>
          <option value="kanyakumari">Kanyakumari</option>
        </select>
        <button className="w-28 mx-12 mt-4 h-8 bg-white text-blue-500 font-bold hover:bg-blue-500 hover:text-white px-2 rounded-2xl">SignUp</button>
        </div>
        
      </nav>
      <Slider></Slider>
      {
        found && found.length >0
        ?
        (
            found.map((e,index)=>(
              <div key={index}>{e.tname}</div>
            ))
        )
        :
        (
          <div className='mt-24  grid grid-flow-col grid-rows-1 gap-6'>
            {
              movies.map((e)=>(
                <img src={e.img} alt="a"className='w-56 h-72 mx-4 mt-96'></img>
              ))
            }
          </div>
        )
        
      }
    </>
  )
}