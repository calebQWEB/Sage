import { useState, useEffect, Suspense, lazy } from "react";
import { styles } from "../../../styles";
import { useApi } from "../../../utils/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Book = lazy(() => import("../Components/Book"));

const NinthCategory = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState("");

  const { fetchBooksByCategory } = useApi();

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
    fetchBooksByCategory("Education", setData, setError, setLoading);
  }, []);

  if (loading) return <div className='canvas-container'><div className='canvas-loader'></div></div>

  return (
    <section className={`${styles.paddingY}`}>
      <h1 className='text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Education</h1>
      <Slider className="mt-16" {...settings}>
        {data?.map((item, index) => {
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <Book
                key={item.fields.id}
                id={item.id}
                category='Education'
                bookImage={item.fields.imageURL}
                bookTitle={item.fields.title}
              />
            </Suspense>
          );
        })}
      </Slider>
    </section>
  );
};

export default NinthCategory;
