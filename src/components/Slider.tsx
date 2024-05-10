import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length / 2;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(images) || images.length <= 1) {
    return null;
  }

  return (
    <div className='flex items-center justify-center w-full h-[60vh]'>
      <button onClick={prevSlide} className='p-4 bg-gray-300 hover:bg-gray-400'>
        ❮
      </button>
        {Array.from({ length }, (_, i) => i * 2).map(slideIndex => (
          <div key={slideIndex} className={`grid grid-cols-2 gap-4 ${slideIndex / 2 === current ? 'block' : 'hidden'}`}>
            {/* <img src={images[slideIndex]} alt={`Slide ${slideIndex}`} className='h-full w-full col-start-1' />
            <img src={images[slideIndex + 1]} alt={`Slide ${slideIndex + 1}`} className='h-full w-full col-start-2' /> */}
            <div className='col-start-1 h-full'>
            <ProjectCard img={images[slideIndex].url} title={images[slideIndex].title} caption={images[slideIndex].caption}/>
            </div>
            <div className='col-start-2 h-full'>
            <ProjectCard img={images[slideIndex + 1].url} title={images[slideIndex + 1].title} caption={images[slideIndex + 1].caption}/>
            </div>
          </div>
        ))}
      <button onClick={nextSlide} className='p-4 bg-gray-300 hover:bg-gray-400'>
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;