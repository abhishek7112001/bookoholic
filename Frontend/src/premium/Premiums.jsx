import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import list from '../../public/list.json'


function Premiums() {
    
  return (
    <>
      <div className="min-h-screen flex flex-col dark:bg-slate-900 dark:text-white">
        <Navbar />

        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 item-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>Welcome to {" "}
                      <span className='text-orange-500'>
                      bookoholic :)</span>
        </h1>
        <p className='mt-12 text-xl'>Welcome to Bookoholic Pro Mode! Here, we take your love for books to the next level.
         In this enhanced version, 
        users can expect deeper, more insightful content tailored for true book aficionados.</p>
        <div className='mt-6'>
                    <a className="bg-black text-white px-4 py-2 rounded-md " href='/'>Back</a>
        </div>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'> 
        {
          list.map((item)=>(
            <Cards key={item.id} item={item} />
          ))
        }
      </div>
    </div>

        <Footer />
        </div>
    </>
  )
}

export default Premiums