import React, { useState } from 'react';
import '../css_files/custom_select.css';

const CustomSelect = ({ images,selectedImage,setSelectedImage,setSelectedImageURL }) => {
//   const [selectedImage, setSelectedImage] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (image) => {
    setSelectedImage(image);
    // setSelectedImageURL(image.url);
    setDropdownOpen(false);
  };

  return (
    <div className="custom-select">
      <div className="select-selected" onClick={() => setDropdownOpen(!dropdownOpen)}>
        {selectedImage ? (
          <>
            <img src={selectedImage.url} title={selectedImage.name} alt={selectedImage.name} className="image-option" />
           
          </>
        ) : (
          'Select an image'
        )}
      </div>
      <div className={`select-items ${dropdownOpen ? '' : 'select-hide'}`}>
        {images.map((image, index) => (
          <div key={index} className="select-item" onClick={() => handleSelect(image)}>
            <img src={image.url}
             title={image.name}
             alt={image.name}
             className="image-option" />
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;