import React from 'react';
import useVisibility from '../hooks/useVisibility';

import '../App.css';

export const PictureCard = ({ paragraphs, imageUris, alts }) => {
      const imageCounter =Object.values(imageUris).map((_, index) => index);
      const { refArray, visibleArray } = useVisibility(imageCounter);
      let children=[];

      console.log(visibleArray,refArray);


   //iterate through paragraphs using object.keys. Use the key to get the value and assign it to the children array using the key as the index

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