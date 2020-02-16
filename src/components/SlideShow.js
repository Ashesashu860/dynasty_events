import React, { useState, useEffect } from "react";
import "./slideshow.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const slides = [
  {
    id: 1,
    description: "1 image"
  },
  {
    id: 2,
    description: "2 image"
  },
  {
    id: 3,
    description: "3 image"
  },
  {
    id: 4,
    description: "3 image"
  },
  {
    id: 5,
    description: "3 image"
  }
];

const SlideShow = () => {
  let [slide, setSlide] = useState(1);

  const changeSlide = () => {
    setInterval(() => {
      console.log(slide);
      if (slide > slides.length) setSlide((slide = 1));
      setSlide(slide++);
    }, 2000);
  };

  useEffect(() => {
    console.log("useEffect", slide);
    changeSlide(slide);
  }, []);
  return renderSlide(slides[slide - 1]);
};

const renderSlide = slide => {
  return (
    <TransitionGroup className="slideshow_wrapper">
      <CSSTransition
        key={slide.id}
        in={true}
        appear={true}
        timeout={1000}
        classNames="slide"
      >
        <img
          src={require(`../assets/${slide.id}.jpg`)}
          alt=""
          className="image"
        />
      </CSSTransition>
    </TransitionGroup>
  );
};

export default SlideShow;
