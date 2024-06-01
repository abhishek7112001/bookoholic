import React from 'react'
import intro from '../../public/intro.png'


function Intro() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ' >
        <div className='mt-10 md:mt-20 w-full md:w-1/2'>
            <img src={intro} className='w-75 md:h-80 md:w-90 md:h-100'/>
        </div>
        <div className=' w-full md:w-1/2 mt-12 md:mt-32 '>
            <div className='space-y-10'>
                <h1 className='text-4xl font-bold'>
                    <span className='text-orange-500'>
                    Book Lovers’</span> Paradise, Unleash Your Imagination!!
                </h1>
                <p className='text-xl'>
                    Welcome to a haven for book enthusiasts. 
                    Discover new worlds and ideas with our diverse range of books, curated just for you.
                </p>
                <div>
                    <label className="input input-bordered flex items-center gap-2 dark:bg-black dark:text-white">
                        Email :
                        <input type="text" className="grow" placeholder="" />
                    </label>
                </div>
            </div>
            <div className="mt-6">
                    <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 
                            duration-300 cursor-pointer">add-on</a>
                </div>
        </div>
    </div>
    </>
  )
}

export default Intro