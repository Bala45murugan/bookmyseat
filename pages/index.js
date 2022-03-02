import Link from 'next/link';
// import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Data from './data.json';
import Slider from './slider';
import Ticket from './ticket';

export default function Home(){

  const [input,setInput] = useState();
  const [found,setFound] = useState();
  const [search,setSearch] = useState(false);
  var [theater,setTheater] =useState();
  // const router = useRouter();

  const movies=[
    {movie:"Beast",img:"/images/beast.jpg"},
    {movie:"KGF2",img:"/images/kgf.jpg"},
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
    console.log(theater)


  return(
    <>
    <div className='sm:w-max-full'>
      <nav className='flex flex-row bg-gray-100 h-16 sm:bg-white sm:w-max-full'>
        <h1 className='text-2xl font-bold pl-6 sm:text-3xl sm:font-bold sm:pt-8 sm:absolute'>Book My Cinema</h1>
        {/* {
          input?
          <input type="text" placeholder='Search for movies' className=' mt-4 mb-4 border border-gray-400 px-2 rounded '></input>
          :
          (<div></div>)
        } */}
        <div className='sm:pl-72 sm:flex flex-row lg:ml-96'>
        <select className='sm:mt-8 mt-2 sm:text-xl ' value={input} onChange={handleChange}>
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
        {
          input ?
          (
            <div></div>
          )
          :
          (
            <button className="sm:mt-8 sm:text-xl w-28 ml-12 mt-4 h-8 bg-white text-blue-500 font-bold hover:bg-blue-500 hover:text-white px-2 rounded-2xl">SignUp</button>

          )
        }
        </div>
        
      </nav>
      {/* <Slider></Slider> */}

      {
        found && found.length >0
        ?
        (
          <div>
          <h1 className='text-red-700 font-bold mt-8 text-3xl pl-6 sm:pt-12 sm:text-3xl'>Theaters</h1>
          
          <div className=' grid grid-flow-col grid-rows-1 gap-6 mt-6 sm:grid-rows-3'>
          
            {
            found.map((e,index)=>(
              <div key={index} className="">
                
              <div  className='pl-8 pt-4 w-52 sm:w-96 sm:ml-32 h-44 mx-24 mt-6 rounded-xl border border-red-300 transition delay-50 ease-in-out hover:scale-110 hover:bg-blue-100 hover:shadow-2xl'>
              <div className='flex flex-row pl-28 sm:ml-40'>
              <img src="/images/star.png" className="w-8 h-6" alt="a"></img>
              <p className="px-2 ">{e.rating}</p>
              </div><span className='font-bold text-lg pt-2 sm:pl-20' >{e.tname}
              </span>
              <div className='pt-2 pl-8 sm:pl-32'>{e.show}</div>
              <Link href="ticket">
                <button value={e.tname} onClick={(e)=>(setTheater(e.target.value))} className=' sm:ml-32 border border-blue-400 px-2 py-1 rounded ml-8 mt-4 text-blue-400 bg-transparent hover:bg-blue-500 hover:text-white font-bold'>Book</button>
              </Link>
              </div>
              </div>
              
            ))
            }
            </div>
            
            </div>
           
        )
        :
        (
          <div>
          <h1 className='text-red-700 font-bold mt-24 text-3xl pl-6'>Recommended Movies</h1>
          <div className=' grid grid-flow-col grid-rows-1 gap-6 sm:grid-flow-col sm:pt-4  sm:grid-rows-3 sm:gap-24 '>
            {
              movies.map((e,index)=>(
                <div key={index} className="transition delay-50 ease-in-out hover:scale-110">
                <img src={e.img} alt="a" className=' w-56 h-72 mx-4 mt-6 rounded-xl sm:mx-20'></img>
                <h2 className='pl-20 mt-4 font-bold sm:pl-36 sm:text-2xl'>{e.movie}</h2>
                </div>
              ))
            }
          </div>
          </div>
        )
        
      }
  {/* {
    router.push({
      pathname : '/ticket',
      query:{place:'kde'},
    })
  } */}
 
    {/* <Ticket props={input}></Ticket> */}

    </div>
    </>
  )
}