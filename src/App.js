import "./App.css";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";

function App() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [work, setWork] = useState(false);
  const [workClicked, setWorkClicked] = useState(false);
  const [homeClicked, setHomeClicked] = useState(false);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);

  return (
    <div className="App">
      <NavBar
        setHome={setHome}
        setAbout={setAbout}
        setContact={setContact}
        setWork={setWork}
        home={home}
        about={about}
        contact={contact}
        work={work}
        workClicked={workClicked}
        setWorkClicked={setWorkClicked}
        aboutClicked={aboutClicked}
        setAboutClicked={setAboutClicked}
        homeClicked={homeClicked}
        setHomeClicked={setHomeClicked}
        contactClicked={contactClicked}
        setContactClicked={setContactClicked}
      />
      <SectionOne
        setHome={setHome}
        setAbout={setAbout}
        setContact={setContact}
        setWork={setWork}
        setWorkClicked={setWorkClicked}
        work={work}
      />
      <SectionTwo
        setHome={setHome}
        setAbout={setAbout}
        setContact={setContact}
        setWork={setWork}
      />
      <SectionThree
        setHome={setHome}
        setAbout={setAbout}
        setContact={setContact}
        setWork={setWork}
      />
      <SectionFour
        setHome={setHome}
        setAbout={setAbout}
        setContact={setContact}
        setWork={setWork}
      />
    </div>
  );
}

export default App;
