import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../src/Css/Carrusel.css';

function Carrusel({ images }) {
  const [dragStart, setDragStart] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState(0);
  const [itemsWidth, setItemsWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [disableAutoScroll, setDisableAutoScroll] = useState(false);

  const carruselRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      setItemsWidth(carruselRef.current.offsetWidth / images.length);
      setContainerWidth(carruselRef.current.offsetWidth);
    };

    updateDimensions();

    const intervalId = setInterval(() => {
      if (!dragging && !disableAutoScroll) {
        setOffset((prevOffset) => {
          const newOffset = prevOffset - itemsWidth;
          // Volver al principio cuando se alcanza la antepenúltima imagen
          return newOffset <= -containerWidth + 1 * itemsWidth ? 0 : newOffset;
        });
      }
    }, 900);

    window.addEventListener('resize', updateDimensions);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [images, containerWidth, itemsWidth, dragging, disableAutoScroll]);

  const handleMouseDown = (e) => {
    setDragging(true);
    setDisableAutoScroll(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const deltaX = e.clientX - dragStart;
      const newOffset = offset + deltaX;

      const maxOffset = 0;
      const minOffset = containerWidth - itemsWidth;

      if (newOffset > maxOffset) {
        setOffset(maxOffset);
      } else if (newOffset < -minOffset) {
        setOffset(-minOffset);
      } else {
        setOffset(newOffset);
      }

      setDragStart(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    setDisableAutoScroll(false);
  };

  return (
    <div
      className="carrusel-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="carrusel" style={{ transform: `translateX(${offset}px)` }} ref={carruselRef}>
        <div className="carrusel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carrusel-item`}>
              <img className="CarruselImgs" src={image.src} alt={`Slide ${index + 1}`} />
              <div>
                <h3>{image.captionTitle}</h3>
                <p>{image.captionText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Carrusel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      captionTitle: PropTypes.string,
      captionText: PropTypes.string,
    })
  ).isRequired,
};

export default Carrusel;
