import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkIndex = (i) => {
    if (i > people.length - 1) {
      return 0;
    }
    if (i < 0) {
      return people.length - 1;
    }
    return i;
  };

  const prevPerson = () => {
    setIndex(() => {
      return checkIndex(index - 1);
    });
  };

  const nextPerson = () => {
    setIndex(() => {
      return checkIndex(index + 1);
    });
  };

  const randomPerson = () => {
    setIndex(() => {
      let rndN = Math.floor(Math.random() * people.length);
      rndN = rndN === index ? rndN + 1 : rndN;
      return checkIndex(rndN);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Suprime me!
      </button>
    </article>
  );
};

export default Review;
