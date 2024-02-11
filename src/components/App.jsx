import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import api from "../services/api";
import ls from "../services/localStorage";

function App() {
  const data = {
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    image:
      "",
    photo:
      "",
  };
  const [dataCard, setDataCard] = useState(ls.get("card", data));
  const [url, setUrl] = useState("");
  const [fetchSuccess, setFetchSuccess] = useState(null);
  
  useEffect(() => {
    ls.set("card", dataCard);
  }, [dataCard])

  const handleInput = (name, value) => {
    const inputValue = value;
    const inputName = name;
    setDataCard({ ...dataCard, [inputName]: inputValue });
  };

  const handleClickCreateCard = (e) => {
    e.preventDefault();
    api(dataCard).then((response) => {
      if (response.success) {
        setUrl(response.cardURL);
        setFetchSuccess(true)
      } else {
        setFetchSuccess(false)
      }
    });
  };
  
  const handleReset = (ev) => {
    ev.preventDefault();
    ls.remove('card');
    setDataCard(data);
    setFetchSuccess(null);
  }

  return (
    <>
      <div className="container">
        <Header />
        <Main
          dataCard={dataCard}
          handleInput={handleInput}
          handleClickCreateCard={handleClickCreateCard}
          url={url}
          fetchSuccess={fetchSuccess}
          handleReset={handleReset}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;