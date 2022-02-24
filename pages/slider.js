import Link from 'next/link';
import React from 'react';

export default function Slider(){
    return(
        <>
            {/* <div className='carousel bg-gray-200 w-full h-96 mt-4'>
                <div id="item1" className=''>
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" className='h-96 w-full' ></img>
                </div>
                <div id="item2" className=''>
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" className='h-96 w-full' ></img>
                </div>
                <div id="item3" className=''>
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" className='h-96 w-full' ></img>
                </div>

                <div className='flex flex-row'>
                    <Link href="#item1">1</Link>
                    <Link href="#item2">2</Link>
                    <Link href="#item3">3</Link>
                </div>
            </div> */}


<div className="w-full carousel h-96">
  <div id="slide1" className="relative w-full carousel-item">
    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" className="w-full h-96"></img>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link href="#slide3" className="rounded-full">❮</Link> 
      <Link href="#slide2" className="rounded-full">❯</Link>
    </div>
  </div> 
  <div id="slide2" className="relative w-full carousel-item">
    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" className="w-full h-96"></img>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link href="#slide1" className="rounded-full">❮</Link> 
      <Link href="#slide3" className="rounded-full">❯</Link>
    </div>
  </div> 
  <div id="slide3" className="relative w-full carousel-item">
    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" className="w-full h-96"></img>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <Link href="#slide2" className="rounded-full">❮</Link> 
      <Link href="#slide1" className="rounded-full">❯</Link>
    </div>
  </div> 
</div>
        </>
    )
}