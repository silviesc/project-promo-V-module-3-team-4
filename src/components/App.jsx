import "../scss/App.scss";
import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import api from "../services/api";
import ls from "../services/localStorage";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";

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
    image: "",
    photo: "",
  };
  const [dataCard, setDataCard] = useState(ls.get("card", data));
  const [url, setUrl] = useState("");
  const [fetchSuccess, setFetchSuccess] = useState(null);

  useEffect(() => {
    ls.set("card", dataCard);
  }, [dataCard]);

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
        setFetchSuccess(true);
      } else {
        setFetchSuccess(false);
      }
    });
  };

  const isValidInput = () => {
    if (dataCard.name === "") {
      return <p>Error: Rellena el nombre del proyecto</p>;
    } else if (dataCard.slogan === "") {
      return <p>Error: Rellena el nombre del slogan</p>;
    } else if (dataCard.repo === "") {
      return <p>Error: Rellena el nombre del repositorio</p>;
    } else if (dataCard.demo === "") {
      return <p>Error: Rellena el nombre de la demo</p>;
    } else if (dataCard.technologies === "") {
      return <p>Error: Rellena el nombre de las tecnologías</p>;
    } else if (dataCard.desc === "") {
      return <p>Error: Rellena el nombre de la descripción</p>;
    } else if (dataCard.author === "") {
      return <p>Error: Rellena el nombre de la autora</p>;
    } else if (dataCard.job === "") {
      return <p>Error: Rellena el trabajo de la autora</p>;
    } else if (dataCard.image === "") {
      return <p>Error: Sube una foto de la autora</p>
    } else if (dataCard.photo === "") {
      return <p>Error: Sube una foto del proyecto</p>
    }
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    ls.remove("card");
    setDataCard(data);
    setFetchSuccess(null);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route
            path="/newProject"
            element={
              <Main
                dataCard={dataCard}
                handleInput={handleInput}
                handleClickCreateCard={handleClickCreateCard}
                url={url}
                fetchSuccess={fetchSuccess}
                isValidInput={isValidInput}
                handleReset={handleReset}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
