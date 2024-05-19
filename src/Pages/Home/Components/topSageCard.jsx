import React from "react";
import Button from '../../../components/common/Button';

const TopSageCard = ({ sageImage, sageName, booksRead, sageQuote, id }) => {

  return (
    <div className='p-3 w-full grid gap-3 glass-card'>
      <div className='flex items-center justify-start gap-2'>
        <img src={sageImage} alt="sage-photo" className="w-[48px] h-[48px] rounded-full"/>
        <span className='font-medium'>{sageName}</span>
      </div>
      <div className="w-full h-[0.75px] bg-gray-500" />
      <p className="sm:text-link text-linkMobile">{sageQuote}</p>
      <div className="grid gap-2 items-center">
        <Button text={`${booksRead} Books Read`} />
        <Button text="Profile" />
      </div>
    </div>
  );
};

export default TopSageCard;