import "../scss/App.scss";

import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [projectName, setProjectName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [repository, setRepository] = useState("");
  const [demo, setDemo] = useState("");
  const [tech, setTech] = useState("");
  const [desc, setDesc] = useState("");
  const [userName, setUserName] = useState("");
  const [job, setJob] = useState("");
  const handleChange = (event) => {
    if (event.target.id === 'name') {
      setProjectName(event.target.value);
    } else if (event.target.id === 'slogan') {
      setSlogan(event.target.value);
    } else if (event.target.id === 'repo') {
      setRepository(event.target.value);
    } else if (event.target.id === 'demo') {
      setDemo(event.target.value);
    } else if (event.target.id === 'technologies') {
      setTech(event.target.value);
    } else if (event.target.id === 'desc') {
      setDesc(event.target.value);
    } else if (event.target.id === 'autor') {
      setUserName(event.target.value);
    } else if (event.target.id === 'job') {
      setJob(event.target.value);
    }
  };

  return (
    <>
      <div className="container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
