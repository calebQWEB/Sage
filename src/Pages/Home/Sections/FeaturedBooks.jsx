import React from 'react'
import {styles} from '../../../styles'
import { featuredBooks } from '../../../constants'
import BookCarousel from '../Components/BookCarousel'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FeaturedBooks = () => {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    focusOnSelect: true
  };

  return (
    <section className={`${styles.paddingY}`}>
      <h1 className={`${styles.sectionHeadText} text-center sm:text-start`}>Featured Books</h1>

      <Slider className='mt-16' {...settings}>
        {featuredBooks.map((item, index) => {
          return (
            <BookCarousel key={item.id} bookName={item.name} bookImage={item.image} author={item.author}/>
          )
        })}
      </Slider>
    </section>
  )
}

export default FeaturedBooks