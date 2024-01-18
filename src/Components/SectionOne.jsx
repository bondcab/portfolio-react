import { useState, useRef, useEffect } from "react";

function SectionOne({ setAbout, setHome, setContact, setWork }) {
  const [visible, setVisible] = useState(true);
  const domRefHome = useRef();

  useEffect(() => {
    const currentRef = domRefHome.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    if (visible) {
      setHome(true);
      setAbout(false);
      setContact(false);
      setWork(false);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [domRefHome, visible, setAbout, setContact, setHome, setWork]);

  return (
    <div
      className={
        visible ? "landingPageContainer" : "landingPageContainerReveal"
      }
      id="#sectionOne"
    >
      <div className="sectionOneTextContainer">
        <h1 className="sectionOneHeading" ref={domRefHome}>
          Hello World{" "}
        </h1>
        <h2 className="sectionOneSlogan">
          My name is Chris Bond. I am a web developer from the UK
        </h2>
        <p className="sectionOneText">Check out some of my code below</p>

        <button className="sectionOneButton" onClick={""} type="button">
          Projects
        </button>
      </div>
      <div className="profilePicContainer">
        <img
          src="portrait.jpeg"
          alt="profile Pic"
          className="profileImagePic"
        />
      </div>
      <div className="sectionOneWhite"></div>
      <div className="sectionOneGrey"></div>
    </div>
  );
}

export default SectionOne;
