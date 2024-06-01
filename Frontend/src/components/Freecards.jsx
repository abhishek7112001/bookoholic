import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json"
import Slider from "react-slick";
import Cards from './Cards.jsx';

function Freecards() {
    const filterData = list.filter((data)=>data.category==="Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return(
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Try for free!</h1>
        <p>Explore a selection of free books across various genres. Start reading
             today at no cost and discover new authors and stories that captivate your imagination.
        </p>
        </div>
    
    <div>
    <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
}

export default Freecards