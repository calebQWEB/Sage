import {Link, useNavigate} from 'react-router-dom'

const Book = ({category, id, bookImage, bookTitle }) => {
  const navigate = useNavigate()

  const onNavigate = () => {
    navigate(`/details/${id}/${category}`)
  }
  return (
    <div className="cursor-pointer hover:scale-105 transition-all duration-300" onClick={onNavigate}>
        <img src={bookImage} alt={bookTitle} className="xs:w-48 xs:h-full w-full" />
        <div className='bg-gray-100 xs:w-48 h-20 w-full border border-solid border-gray-700'></div>
    </div>
  );
};

export default Book;
