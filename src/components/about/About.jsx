import React, { useRef, useEffect, useState } from "react";
import About1 from "../../assets/about1.webp";
import About2 from "../../assets/about2.webp";
import About3 from "../../assets/about3.webp";
import "./About.scss";

function About() {
  const aboutDetailRefs = useRef([]); // Array of refs for each about-detail div
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index"); // Get index from data attribute
            setVisibleSections((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
            observer.unobserve(entry.target); // Stop observing once the section is visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    aboutDetailRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      aboutDetailRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Function to store refs in the array
  const setRefs = (el, index) => {
    if (el) {
      el.setAttribute("data-index", index); // Store the index in a data attribute
      aboutDetailRefs.current[index] = el;
    }
  };

  return (
    <div className="container about-wrapper">
      <div
        className={`about-detail d-flex ${
          visibleSections.includes("0")
            ? "animate__animated animate__fadeIn"
            : ""
        }`}
        ref={(el) => setRefs(el, 0)}
      >
        <img src={About1} className="about-img" />
        <div>
          <h2 className="about-heading">About Fusion</h2>
          <p className="about-subheading">
            We focus on discovering new medicines, diagnostics and digital
            health solutions that improve health outcomes so that we all have
            more time with the people we love.
          </p>
        </div>
      </div>
      <div
        className={`about-detail d-flex ${
          visibleSections.includes("1")
            ? "animate__animated animate__fadeIn"
            : ""
        }`}
        ref={(el) => setRefs(el, 1)}
      >
        <div>
          <h2 className="about-heading">Solutions</h2>
          <p className="about-subheading">
            Since the founding of our company, we have been developing
            innovative medicines, treatments and diagnostics that continue to
            revolutionise healthcare.
          </p>
        </div>
        <img src={About2} className="about-img" />
      </div>
      <div
        className={`about-detail d-flex ${
          visibleSections.includes("2")
            ? "animate__animated animate__fadeIn"
            : ""
        }`}
        ref={(el) => setRefs(el, 2)}
      >
        <img src={About3} className="about-img" />
        <div>
          <h2 className="about-heading">Innovation</h2>
          <p className="about-subheading">
            Driven by a passion and curiosity for science, we address some of
            the most urgent challenges in healthcare by developing tomorrow’s
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
