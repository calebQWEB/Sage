import { useState, useEffect, Suspense } from 'react';
import Book from '../UserHomePage/Components/Book'
import { useParams } from 'react-router-dom'
import { styles } from '../../styles'
import { useApi } from '../../utils/api'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = () => {
    const { fetchBooksByCategory } = useApi()
    const { genre } = useParams();

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 992, // Breakpoint for medium screens
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768, // Breakpoint for small screens
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 660, // Breakpoint for small screens
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480, // Breakpoint for extra small screens
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };

    useEffect(() => {
        fetchBooksByCategory(genre, setData, setError, setLoading)
    }, [])

    if (loading) return <div className='canvas-container'><div className='canvas-loader'></div></div>

    return (
        <main className={`${styles.padding} bg-gray-100`}>
            <h1 className='text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>{genre}</h1>
            <Slider className="mt-16" {...settings}>
                {data?.map((item, index) => {
                    return (
                        <Suspense fallback={<div>Loading...</div>}>
                            <Book
                                key={item.fields.id}
                                id={item.id}
                                category={genre}
                                bookImage={item.fields.imageURL}
                                bookTitle={item.fields.title}
                            />
                        </Suspense>
                    );
                })}
            </Slider>
        </main>
    )
}

export default Categories