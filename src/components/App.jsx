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
  
  const handleChange = (id,value) => {
    if (id === 'name') {
      setProjectName(value);
    } else if (id === 'slogan') {
      setSlogan(value);
    } else if (id === 'repo') {
      setRepository(value);
    } else if (id === 'demo') {
      setDemo(value);
    } else if (id === 'technologies') {
      setTech(value);
    } else if (id === 'desc') {
      setDesc(value);
    } else if (id === 'autor') {
      setUserName(value);
    } else if (id === 'job') {
      setJob(value);
    }
  };

  return (
    <>
      <div className="container">
        <Header/>
        <Main projectName={projectName} slogan={slogan} repository={repository} demo={demo} tech={tech} desc={desc} userName ={userName} job={job} handleChange={handleChange}/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
