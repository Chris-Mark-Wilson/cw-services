import React from 'react';
import useVisibility from '../hooks/useVisibility';

import '../css_files/App.css';

//takes in paragraphs object, with keys corresponding to positions in the card
//takes in imageUris object, with keys corresponding to positions in the card
//takes in alts object, with keys corresponding to positions of the correct picture

export const PictureCard = ({ paragraphs={}, imageUris={}, alts={} }) => {

      const imageCounter =Object.values(imageUris).map((_, index) => index);
      const { refArray, visibleArray } = useVisibility(imageCounter);
      let children=[];

    Object.keys(paragraphs).forEach((key,index)=>{
      children.splice(key,0,(<p key={key}>{paragraphs[key]}</p>));
    });

    Object.keys(imageUris).forEach((key,index)=>{
        children.splice(+key,0,(<img
        key={key}
        src={imageUris[key]}
        alt={alts[key]}
        title={alts[key]}
        ref={refArray.current[index]}
        className={`card-picture fade-in ${visibleArray[index] ? 'visible' : ''}`}
      />));
    });

  return (
    <section className='picture-card'>
      {children}
    </section>
  );
};

export default PictureCard;