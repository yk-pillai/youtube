import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setClickedButton } from '../utils/buttonTagSlice';

const ButtonList = () => {
  const buttonData = useSelector(store => store.tag.buttons)
  const buttons = Object.keys(buttonData);
  const dispatch = useDispatch();

  const clickedButton = (button) => {
    dispatch(setClickedButton(button))
  }

  const scrollContainer = (direction) => {
    const container = document.querySelector(".scroll-container");
    const scrollAmount = 400; // Adjust this value as needed to control the scroll distance

    if (direction === -1) {
      container.scrollLeft -= scrollAmount; // Scroll to the left (previous)
    } else if (direction === 1) {
      container.scrollLeft += scrollAmount; // Scroll to the right (next)
    }
  };

  return (
    <div className="flex">
      <img
        onClick={() => scrollContainer(-1)}
        className="h-8 mt-3"
        src="https://w7.pngwing.com/pngs/198/222/png-transparent-computer-icons-arrow-symbol-less-than-sign-arrow-angle-triangle-black-thumbnail.png"
        alt="prev"
      ></img>
      <div className="ml-1 flex whitespace-nowrap overflow-x-hidden scroll-container">
        {buttons.map((button) => (
          <div
            onClick={() => clickedButton(button)}
            className="p-2 bg-gray-200 m-2 rounded-lg cursor-pointer"
            key={button}
          >
            {button}
          </div>
        ))}
      </div>
      <img
        onClick={() => scrollContainer(1)}
        className="h-8 rotate-180 mt-3"
        alt="next"
        src="https://w7.pngwing.com/pngs/198/222/png-transparent-computer-icons-arrow-symbol-less-than-sign-arrow-angle-triangle-black-thumbnail.png"
      ></img>
    </div>
  );
}

export default ButtonList

