import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const statements = [
  <>
    I design <span>products</span> that <span>work well</span>
    <br />
    for people. I turn <span>ideas</span> into <span>clear</span>
    <br />
    <span>and useful</span> solutions.
  </>,

  <>
    I study <span>problems</span> and <span>build simple</span>
    <br />
    answers. Every choice I make
    <br />
    supports <span>real user needs</span>.
  </>,

  <>
    I shape <span>early thoughts</span> into <span>solid</span>
    <br />
    <span>product</span> flows. My work stays
    <br />
    <span>focused, clean, honest</span>, and useful.
  </>,

  <>
    My name is <span>Aijohi</span> and I design
    <br />
    <span>products. Thank you for visiting.</span>
    <br />
    Please feel at home.
  </>,
];


function StatementSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStatement = () => {
    setCurrentIndex((prev) => (prev + 1) % statements.length);
  };

  const prevStatement = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + statements.length) % statements.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextStatement, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="slider">
      <div className="statement-wrap">
        <button className="arrow arrow-left" onClick={prevStatement}>
          <VscChevronLeft />
        </button>

        <div className="statement-box">
          <div className="statement-text" key={currentIndex}>
            <h1>{statements[currentIndex]}</h1>
          </div>

          <Link to="/portfolio" className="welcome-btn">
            Welcome to my portfolio
          </Link>
        </div>

        <button className="arrow arrow-right" onClick={nextStatement}>
          <VscChevronRight />
        </button>
      </div>
    </section>
  );
}

export default StatementSlider;